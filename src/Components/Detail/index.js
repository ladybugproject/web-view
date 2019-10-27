import React from 'react';
import Navigator from '../Navigator';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.match.params;

    this.state = {
      recommendation: {
        prf_name: '판타스틱',
        poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121653_180607_112000.jpg',
        plc_name: 'NH아트홀 판타스틱 전용관 (NH아트홀 판타스틱 전용관)',
        date_from: '2009-04-25',
        date_to: '2019-09-30',
        genre: '뮤지컬',
        cast: '백승우, 양대용, 문진태, 김태연, 손힘찬, 박현수, 어하연 등',
      },
    };
  }

  render() {
    return (
      <>
        <Navigator />
      </>
    );
  }
}

export default Detail;
