import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


class User_Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user_01
            // user: JSON.parse(localStorage.getItem("user")) || this.props.user_01
        };
    }

    selectUser(user_info) {
        console.log(user_info.name)
        this.setState({
            // user: JSON.parse(localStorage.getItem(user_info.name))
            user: user_info
        });
        // console.log(this.state.user)

    }


    render() {
    
        const post = (
            <Post
                user_01={this.props.user_01}
                user_02={this.props.user_02}
                user_03={this.props.user_03}
                user_04={this.props.user_04}
                user_05={this.props.user_05}
                userInfo_user={this.state.user}
            />
        );
        return (
            <div className="bg-info">
                <div className="card-body text-white" id="user_info">
                    <div className="d-flex flex-row">
                        <div className="m-auto">
                            <p className=""><img className="img-thumbnail" src={this.state.user.img} alt="Thumbnail image" width="80px"></img></p>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.user.name}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <a onClick={() => this.selectUser(this.props.user_01)} className="dropdown-item">{this.props.user_01.name}</a>
                                    <a onClick={() => this.selectUser(this.props.user_02)} className="dropdown-item">{this.props.user_02.name}</a>
                                    <a onClick={() => this.selectUser(this.props.user_03)} className="dropdown-item">{this.props.user_03.name}</a>
                                    <a onClick={() => this.selectUser(this.props.user_04)} className="dropdown-item">{this.props.user_04.name}</a>
                                    <a onClick={() => this.selectUser(this.props.user_05)} className="dropdown-item">{this.props.user_05.name}</a>
                                </div>
                            </div>
                        </div>

                        <div className="m-auto">
                            <p>拍手できる：{this.state.user.clap}</p>
                            <p>拍手された：{this.state.user.applauded}</p>
                        </div>
                    </div>
                </div>
                {post}
            </div>
        );
    }
}

User_Info.propTypes = {
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    user_04: PropTypes.object,
    user_05: PropTypes.object,
};

export default User_Info;
