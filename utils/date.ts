/**
 * 오늘 날짜를 반환 (0시 0분 0초)
 */
export const getToday: () => Date = () => {
  const now = new Date();
  now.setHours(0, 0, 0);

  return now;
};

/**
 * Date를 문자열로
 *
 * Y(연), M(월), D(일), H(시), m(분), S(초)
 */
export const toFormatString: (date: Date, format?: string) => string = (
  date,
  format = 'Y/M/D H:m'
) => {
  const Y = date.getFullYear().toString();
  const mm = date.getMonth() + 1;
  const M = (mm > 9 ? '' : '0') + mm;
  const dd = date.getDate();
  const D = (dd > 9 ? '' : '0') + dd;

  const hh = date.getHours();
  const H = (hh > 9 ? '' : '0') + hh;
  const mn = date.getMinutes();
  const m = (mn > 9 ? '' : '0') + mn;
  const s = date.getSeconds();
  const S = (s > 9 ? '' : '0') + s;

  return format
    .replace('Y', Y)
    .replace('M', M)
    .replace('D', D)
    .replace('H', H)
    .replace('m', m)
    .replace('S', S);
};
export const toISOFormatString: (date: Date) => string = (date) => {
  return toFormatString(date, 'Y-M-DTH:m:S');
};

/**
 * 날짜 문자열을 Date로
 */
export const toValidDate: (dateString: string) => Date = (dateString) => {
  const datetimeFormat =
    /(?<year>\d+)-(?<month>\d{2})-(?<date>\d{2})(T|\s)(?<hour>\d{2}):(?<minute>\d{2}):(?<second>\d{2})(?<timezone>\+\d{2}:\d{2})?/;
  const datetimeKorFormat =
    /(?<year>\d+)-(?<month>\d{2})-(?<date>\d{2})\s(?<noon>오전|오후)\s(?<hour>\d{1,2}):(?<minute>\d{2}):(?<second>\d{2})/;
  const r =
    datetimeFormat.exec(dateString) || datetimeKorFormat.exec(dateString);
  if (r === null) {
    throw new Error('Invalid date string');
  } else {
    if (r.groups === undefined) {
      throw new Error('Invalid date string');
    } else if (parseInt(r.groups.year) < 1900) {
      throw new Error('Invalid year');
    } else {
      const result = new Date(
        parseInt(r.groups.year),
        parseInt(r.groups.month) - 1, // Month는 0부터
        parseInt(r.groups.date),
        parseInt(r.groups.hour),
        parseInt(r.groups.minute),
        parseInt(r.groups.second)
      );

      if (r.groups.timezone !== undefined) {
        result.setHours(
          r.groups.timezone[0] === '+'
            ? result.getHours() - parseInt(r.groups.timezone.slice(1, 3))
            : result.getHours() + parseInt(r.groups.timezone.slice(1, 3))
        );
        result.setMinutes(
          r.groups.timezone[0] === '+'
            ? result.getMinutes() - parseInt(r.groups.timezone.slice(4, 6))
            : result.getMinutes() + parseInt(r.groups.timezone.slice(4, 6))
        );
      }

      if (r.groups.noon === '오후') {
        result.setHours(result.getHours() + 12);
      }

      return result;
    }
  }
};

/**
 * 입력한 날짜를 UTC로 변환
 * @param date 날짜
 * @param timezone 입력한 날짜의 시간대를 분 단위로 입력. +09:00라면 +540
 */
export function toUTC(
  date: Date,
  timezone: number | undefined = undefined
): Date {
  const utcDate = new Date(date);

  if (timezone === undefined) {
    const offset = date.getTimezoneOffset();
    utcDate.setMinutes(utcDate.getMinutes() + offset);
  } else {
    utcDate.setMinutes(utcDate.getMinutes() - timezone);
  }

  return utcDate;
}

/**
 * UTC에서 지정한 시간대로 변환
 * @param date 날짜
 * @param timezone 원하는 날짜의 시간대를 분 단위로 입력. +09:00라면 +540
 */
export function fromUTC(
  date: Date,
  timezone: number | undefined = undefined
): Date {
  const resultDate = new Date(date);

  if (timezone === undefined) {
    const offset = date.getTimezoneOffset();
    resultDate.setMinutes(resultDate.getMinutes() - offset);
  } else {
    resultDate.setMinutes(resultDate.getMinutes() + timezone);
  }

  return resultDate;
}
