import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import backImg from '../../asset/img_back.png';
//import { Test } from './DemoPage.styles';
import DemoChatBox from '../../Component/DemoChatBox'
import DemoLikeProduct from '../../Component/DemoLikeProduct'
import DemoLastPage from '../../Component/DemoLastPage'
import './DemoPage.css';
class DemoPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      demoState: 0,
    };
  }

  render () {
    return (
      <div className="DemoPageWrapper">
				{/* <img src={backImg} className="back-img" alt="" /> */}
				{(this.props.pageIndex === 0)&&<DemoChatBox />}
				{(this.props.pageIndex === 1)&&<DemoLikeProduct />}
				{(this.props.pageIndex === 2)&&<DemoLastPage />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pageIndex: state.movePageIndex
 };
};
export default connect(
  mapStateToProps,
  null,
)(DemoPage);
