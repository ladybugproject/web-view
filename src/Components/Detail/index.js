import React from 'react';
import Navigator from '../Navigator';
import Overview from './Overview';
import Synopsis from './Synopsis';
import Cast from './Cast';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.match.params;

    this.state = {
      result: {
        prf_name: '판타스틱',
        poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121653_180607_112000.jpg',
        plc_name: 'NH아트홀 판타스틱 전용관 (NH아트홀 판타스틱 전용관)',
        date_from: '2009-04-25',
        date_to: '2019-09-30',
        genre: '뮤지컬',
        synopsis: '작가의 꿈을 안고 상경한 경상도 여자 정은과 정체를 알 수 없는 미스터리 서울 남자 경민이 옥탑방으로 동시에',
        cast: '백승우, 양대용, 문진태, 김태연, 손힘찬, 박현수, 어하연 등',
        cast_profile: [
          { name: "오세미", profile: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF152946_190812_160950.gif" },
          { name: "유민정", profile: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF152946_190812_160950.gif" },
        ],
      },
    };
  }

  render() {
    const { result } = this.state;

    return (
      <>
        <Navigator />
        <Overview result={result} />
        <Synopsis result={result} />
        <Cast result={result} />
      </>
    );
  }
}

export default Detail;
