import { fromUTC, toValidDate } from '@/utils';

export class TicketType {
  id: string;

  /** 티켓 이름 */
  name: string;

  /** 티켓 가격 */
  price: number;

  /** 최소 가격 */
  minPrice: number | null;

  /** 티켓 설명 */
  desc: string;

  /** 티켓으로 참가하는 요일 */
  day: 'FRI' | 'SAT' | 'SUN' | 'WEEKEND';

  /** 프로그램 정보 */
  program: {
    title: string;
    shortDesc: string;
    startAt: Date;
    endAt: Date;
    programType: typeof ProgramTypes;
  };

  /** 환불 가능 여부 */
  isRefundable: boolean;

  private constructor(p: TicketType) {
    this.id = p.id;
    this.name = p.name;
    this.price = p.price;
    this.minPrice = p.minPrice;
    this.desc = p.desc;
    this.day = p.day;
    this.program = p.program;
    this.isRefundable = p.isRefundable;
  }

  static fromAPI(d: APITicketType): TicketType {
    return new TicketType({
      id: d.id,
      name: d.name,
      price: d.price,
      minPrice: d.min_price,
      desc: d.desc,
      day: d.day,
      program: {
        title: d.program.title,
        shortDesc: d.program.short_desc,
        startAt: fromUTC(toValidDate(d.program.start_at)),
        endAt: fromUTC(toValidDate(d.program.end_at)),
        programType: d.program.program_type,
      },
      isRefundable: d.is_refundable,
    });
  }

  static fromAPIs(data: APITicketType[]): TicketType[] {
    return data.map((d) => TicketType.fromAPI(d));
  }
}

export type APITicketType = {
  id: string;
  name: string;
  price: number;
  min_price: number | null;
  desc: string;
  day: 'FRI' | 'SAT' | 'SUN' | 'WEEKEND';
  program: {
    title: string;
    short_desc: string;
    start_at: string;
    end_at: string;
    program_type: typeof ProgramTypes;
  };
  is_refundable: boolean;
  is_buyable: boolean;
};

export const ProgramTypes = ['CONFERENCE', 'TUTORIAL', 'SPRINT'] as const;
