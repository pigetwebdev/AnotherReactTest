import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

import { moveNextPage } from '../../Actions/actionCreator';
import imgProduct from '../../asset/img_product.png';



//import { Test } from './DemoLikeProduct.styles';
const Handle = Slider.Handle;
const toolTips = ['hate it','not really','so-so','fine','like it','love it']


class DemoLikeProduct extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      valueLike : 0
    };
  }
  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={toolTips[value]}
        visible={true}
        placement="bottom"
        key={index}
      >
      <Handle value={value} {...restProps} />
      </Tooltip>  
    );
  };
  
  render () {
    return (
      <div className="DemoLikeProductWrapper">
       <button onClick = {this.props.moveNextPage}>X</button>
        <div className='demo-product'>
          <img src={imgProduct} className="img-product" alt="" />
          <Slider
            defaultValue={this.state.valueLike}
            min={0}
            max={5}
            step={1}
            withBars 
            handle={this.handle}
            />
        </div>          
      </div>    
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveNextPage
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(DemoLikeProduct);
