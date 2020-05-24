import React from 'react';
import PropTypes from 'prop-types';

class User_Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user_02
        };
    }

    selectUser(user_info) {
        this.setState({
            user: user_info
        })
    }


    render() {
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
                                </div>
                            </div>
                        </div>

                        <div className="m-auto">
                            <p>拍手できる：{this.state.user.clap}</p>
                            <p>拍手された：{this.state.user.applauded}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

User_Info.propTypes = {
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object
};

export default User_Info;
