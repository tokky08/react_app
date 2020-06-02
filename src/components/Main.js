import React from 'react';
import Introduction from './Introduction';
import PropTypes from 'prop-types';


class Main extends React.Component {
  render() {
    let introduction
    if (this.props.isSubmitted) {
        introduction = (
            <Introduction
                id={this.props.id}
                count={this.props.count}
                message={this.props.message}
                date={this.props.date}
                user_01 = {this.props.user_01}    
                user_02 = {this.props.user_02}    
                user_03 = {this.props.user_03}
                user_04 = {this.props.user_04}
                user_05 = {this.props.user_05}
                
                userInfo_user_now={this.props.userInfo_user_now}
                post_user_now={this.props.post_user_now}

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
    id: PropTypes.number,
    count: PropTypes.number,
    isSubmitted: PropTypes.bool,
    message: PropTypes.string,
    date: PropTypes.string,
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    user_04: PropTypes.object,
    user_05: PropTypes.object,
    userInfo_user: PropTypes.object,
    post_user: PropTypes.object,
    userInfo_user_now: PropTypes.object,
    post_user_now: PropTypes.object,
};

export default Main;
