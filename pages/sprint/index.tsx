import { Program } from '@/@types';
import { SprintAPI } from '@/api';
import React, { Component } from 'react';
import router from 'next/router';
import { Routes } from '@/constants/routes';
import { Loader } from '@/components/common/Loader';
import SeoHeader from '@/components/layout/SeoHeader';
import SubprogramList from '@/components/tutorial/list';
import { toValidDate } from '@/utils';

type State = {
  sprints: Program[];
  isLoading: boolean;
};

class SprintListPage extends Component<Record<string, never>, State> {
  state: State = {
    sprints: [],
    isLoading: false,
  };

  componentDidMount = async () => {
    await this.load();
  };

  load = async () => {
    this.setState({ isLoading: true });
    await SprintAPI.getSprintList()
      .then((sprints) => {
        this.setState({ sprints, isLoading: false });
      })
      .catch((e) => {
        alert(`스프린트 목록 불러오기 실패\n(${e})`);
        router.push(Routes.HOME.route);
      });
  };

  render() {
    const { isLoading, sprints } = this.state;

    if (isLoading) return <Loader />;

    return (
      <>
        <SeoHeader
          title={Routes.SPRINT_LIST.title}
          description="파이콘 한국 2023: 8월 11~13일 코엑스"
        />
        <SubprogramList
          programs={sprints}
          programTypeName="스프린트"
          noticeContent="* 스프린트는 2023년 8월 11일 금요일에 진행됩니다."
          ticketUrl="https://event-us.kr/pyconkr/event/66005"
          // ticketAvailableDate={toValidDate('2023-07-17T10:00:00')}
        />
      </>
    );
  }
}

export default SprintListPage;
