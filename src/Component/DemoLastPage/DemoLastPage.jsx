import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import { Test } from './DemoLastPage.styles';

class DemoLastPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      demoState: 0,
    };
  }

  componentWillMount = () => {
    console.log('DemoLastPage will mount');
  }

  componentDidMount = () => {
    console.log('DemoLastPage mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DemoLastPage will receive props', nextProps);
  }
  
  componentWillUnMount = () => {
    console.log('DemoLastPage will unmount');
  }

  render () {
    return (
      <div className="DemoLastPageWrapper">
        <p>Leaving so soon!</p>
        <p>We will miss you while you're gone</p>
      </div>
    );
  }
}

DemoLastPage.propTypes = {
  // bla: PropTypes.string,
};

DemoLastPage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoLastPage);
