import React from 'react';
import APIClient from '../APIClient';
import Navigator from '../Navigator';
import Overview from './Overview';
import Synopsis from './Synopsis';
import Cast from './Cast';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.match.params;

    this.state = {
      result: {},
    };
  }

  async componentDidMount() {
    const result = await APIClient.prfinfo(this.props.match.params);

    this.setState({
      result,
    });
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
