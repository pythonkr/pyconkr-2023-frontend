import React, { Component } from 'react';
import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import { TutorialAPI } from '@/api';
import router from 'next/router';
import { Loader } from '@/components/common/Loader';
import { Program } from '@/@types';
import SubprogramList from '@/components/tutorial/list';
import { toValidDate } from '@/utils';

type State = {
  tutorials: Program[];
  isLoading: boolean;
};

class TutorialListPage extends Component<Record<string, never>, State> {
  state: State = {
    tutorials: [],
    isLoading: false,
  };

  componentDidMount = async () => {
    await this.load();
  };

  load = async () => {
    this.setState({ isLoading: true });
    await TutorialAPI.getTutorialList()
      .then((tutorials) => {
        this.setState({ tutorials, isLoading: false });
      })
      .catch((e) => {
        alert(`튜토리얼 목록 불러오기 실패\n(${e})`);
        router.push(Routes.HOME.route);
      });
  };

  render() {
    const { isLoading, tutorials } = this.state;

    if (isLoading) return <Loader />;

    return (
      <>
        <SeoHeader
          title={Routes.TUTORIAL_LIST.title}
          description="파이콘 한국 2023: 8월 11~13일 코엑스"
        />
        <SubprogramList
          programs={tutorials}
          programTypeName="튜토리얼"
          noticeContent="* 튜토리얼은 2023년 8월 11일 금요일에 진행됩니다."
          ticketUrl="https://event-us.kr/pyconkr/event/66004"
          ticketAvailableDate={toValidDate('2023-07-17T10:00:00')}
        />
      </>
    );
  }
}

export default TutorialListPage;
