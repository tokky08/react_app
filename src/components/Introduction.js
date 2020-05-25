import React from 'react';
import PropTypes from 'prop-types';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo_user: this.props.userInfo_user,
            post_user: this.props.post_user,
            count: 0
        };
    }

    handleClick() {
        
        // 拍手した人が紹介した人・紹介された人でなければ
        if (!(this.props.userInfo_user.name == this.state.userInfo_user.name || this.props.userInfo_user.name == this.state.post_user.name)) {
            this.setState({
                count: this.state.count + 1,
            });

            // 紹介した人の拍手された数が+1される
            if (this.state.userInfo_user.name == this.props.user_01.name) {
                this.props.user_01.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_02.name) {
                this.props.user_02.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_03.name) {
                this.props.user_03.applauded += 1;
            }

            // 紹介された人の拍手された数が+1される
            if (this.state.post_user.name == this.props.user_01.name) {
                this.props.user_01.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_02.name) {
                this.props.user_02.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_03.name) {
                this.props.user_03.applauded += 1;
            }
        }

    }

    render() {
        return (
            <div className="bg-white">
                <div className="card-body " id="Introduction">
                    <div className="d-flex flex-row">
                        <p className=""><img className="img-thumbnail" src={this.state.userInfo_user.img} alt="Thumbnail image" width="80px"></img></p>
                        <i className="fas fa-hand-point-right fa-2x align-self-center mr-3 ml-3"></i>
                        <p className=""><img className="img-thumbnail" src={this.state.post_user.img} alt="Thumbnail image" width="80px"></img></p>
                    </div>
                    <p>{this.props.message}</p>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="">
                            <i className="fas fa-sign-language fa-2x mr-3" onClick = {()=>{this.handleClick()}}></i>
                            <span>{this.state.count}</span>
                        </div>
                        <p>{this.props.date}</p>
                    </div>
                    <hr className="m-0"/>
                </div>
            </div>
        );
    }
}

Introduction.propTypes = {
    message: PropTypes.string,
    date: PropTypes.string,
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    userInfo_user: PropTypes.object,
    post_user: PropTypes.object,
};

export default Introduction;
