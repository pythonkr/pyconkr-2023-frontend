import { TimeTableInfo } from '@/@types/session';

import { Fragment } from 'react';

import {
  B5,
  Head,
  LinkedContent,
  SessionHostName,
  SessionTitle,
  Table,
  TableWrapper,
  Td,
  Tr,
} from './Table';

export const TimeTable = ({
  timeTableInfo,
}: {
  timeTableInfo: TimeTableInfo;
}) => {
  return (
    <TableWrapper>
      <Table>
        <Head title={timeTableInfo.title} location={timeTableInfo.location} />
        <tbody>
          {timeTableInfo?.TimeTable?.map((row, i) => {
            return (
              <Fragment key={row.time + i}>
                <Tr>
                  {/* 시간 */}
                  <Td rowSpan={2}>
                    <B5 c="label">{row.time}</B5>
                  </Td>
                  {/* 세션 제목 */}
                  {row.sessions.map((session) => (
                    <Td
                      colSpan={row.sessions.length === 1 ? 3 : 1}
                      key={session.title}
                    >
                      <LinkedContent
                        condition={!!session.id}
                        href={`/session/${session.id}`}
                      >
                        <SessionTitle
                          title={session.title}
                          category={session.category}
                        />
                      </LinkedContent>
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  {/* 세션 호스트 이름 */}
                  {row.sessions.map(
                    (session) =>
                      session.host_name !== undefined && (
                        <Td
                          key={session.host_name}
                          colSpan={row.sessions.length === 1 ? 3 : 1}
                        >
                          <LinkedContent
                            condition={!!session.id}
                            href={`/session/${session.id}`}
                          >
                            <SessionHostName
                              key={session.host_name}
                              hostName={session.host_name}
                            />
                          </LinkedContent>
                        </Td>
                      )
                  )}
                </Tr>
              </Fragment>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
