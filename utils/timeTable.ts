import { TimeTable } from '@/@types/session';

export const setIdAtDayTimeTable = (
  idByNickName: { [hostName: string]: number },
  dayTimeTable: TimeTable[]
) =>
  dayTimeTable.map((time) => {
    return {
      ...time,
      sessions: time.sessions.map((session) => {
        if (!session.host_name) return session;
        return {
          ...session,
          // id: `${idByNickName[session.host_name] || ''}`,
        };
      }),
    };
  });
