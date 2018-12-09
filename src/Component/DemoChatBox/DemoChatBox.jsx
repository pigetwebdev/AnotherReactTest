import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { moveNextPage } from '../../Actions/actionCreator';
import {bindActionCreators} from 'redux';

const API = "http://localhost:3000/"     //API Base URL
const  DEFAULT_QUERY = 'resource/chatbottext.json'    //API

//import { Test } from './DemoChatBox.styles';

class DemoChatBox extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      chatBotLevel: 0,
      chatBotText : {},
      isLoading: false,
      error : null

    };
  }
  fetchChatBotText = () => {
    fetch(API + DEFAULT_QUERY)        
      .then(response => {console.log(response); return response.json()})
      .then(data =>
        {
          this.setState({
          chatBotText: data,
          isLoading: false,
        })
        }
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchChatBotText();
  }

  getButtons = () => {
    if(this.state.chatBotText.options && this.state.chatBotLevel)
    {
      return (<div>
        {
          this.state.chatBotText.options.map(option =>(
            <button key = {option.answer} type="button" onClick={() =>{ this.onClickAnswer(option.answer);} } className="btn btn-success">{option.answer}</button>
          ))
        }
        <button type="button" onClick={ () => this.setState({ chatBotLevel: this.state.chatBotLevel+1}) } className="btn btn-danger">Comment</button>    
      </div>)
    }else
      return null;
  }
  onClickAnswer = (s) => {
    // const node = this.state.chatBotText.options.find(option => (option.answer === s));
    // console.log(node)
    // console.log(node.options === null)
    // if(node.options === null) this.props.moveNextPage
    // else {this.setState({chatBotLevel: this.state.chatBotLevel+1, chatBotText: node },() => {console.log("Updated");console.log(this.state.chatBotText)})}
			this.setState({chatBotLevel: this.state.chatBotLevel+1, chatBotText: this.state.chatBotText.options.find(option => (option.answer === s))});
  }
  render () {
    return (
      <div className="DemoChatBoxWrapper">
        {(this.state.chatBotLevel >1)&&<button onClick = {this.props.moveNextPage}>X</button>}
        <div className="form-group row">
          {

            (this.state.chatBotLevel < 2) ?
            <div className="col-sm-10">
              {this.state.chatBotLevel? <input readOnly = {true} value={!this.state.isLoading? this.state.chatBotText.question: ""} type="text" className="form-control" id="chatEdit" /> : null }
              {!this.chatBotLevel&&<button type="button" onClick={ () => this.setState({ chatBotLevel: this.state.chatBotLevel+1}) } className="btn btn-danger">Chat</button>}
              {this.getButtons()}
          </div>
          :<div className="col-sm-11">
            {this.state.chatBotLevel? <input readOnly = {true} value={!this.state.isLoading? this.state.chatBotText.question: ""} type="text" className="form-control" id="chatEdit" /> : null }
            {this.getButtons()}
          </div>

          }
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
)(DemoChatBox);
