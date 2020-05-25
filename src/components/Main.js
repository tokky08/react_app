import React from 'react';
import Introduction from './Introduction';
import PropTypes from 'prop-types';


class Main extends React.Component {
  render() {
    let introduction
    if (this.props.isSubmitted) {
        introduction = (
            <Introduction
                message={this.props.message}
                date={this.props.date}
                user_01 = {this.props.user_01}    
                user_02 = {this.props.user_02}    
                user_03={this.props.user_03}
                
                userInfo_user={this.props.userInfo_user}
                post_user={this.props.post_user}
            />
        );
    }
    return (
        <div>
            {introduction}
        </div>
    );
  }
}

Main.propTypes = {
    isSubmitted: PropTypes.bool,
    message: PropTypes.string,
    date: PropTypes.string,
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    userInfo_user: PropTypes.object,
    post_user: PropTypes.object,
};

export default Main;