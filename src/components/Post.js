import React from 'react';
import Main from './Main';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            hasTextareaError: true,
            postMessage:"",
            postInfoList: JSON.parse(localStorage.getItem('postInfoList')) || [],
            post_user: this.props.user_02
        };
    }

  

    handleSubmit() {
        const now = new Date();
        const year = now.getFullYear();
        const mon = ("0" + (now.getMonth() + 1)).slice(-2);
        const day = ("0" + now.getDate()).slice(-2);
        const hour = ("0" + now.getHours()).slice(-2);
        const min = ("0" + now.getMinutes()).slice(-2);
        const postDate = year + "/" + mon + "/" + day + "　" + hour + ":" + min;
        const postInfo = {
            id: Math.random(),
            count: 0,
            postDate: postDate,
            isSubmitted: true,
            postMessage: this.state.postMessage,
            post_user: this.state.post_user,
            userInfo_user: this.props.userInfo_user,
            
            user_01_clap: 0,
            user_02_clap: 0,
            user_03_clap: 0,
            user_04_clap: 0,
            user_05_clap: 0,
        };
        this.setState({
            isSubmitted: true,
            postMessage: "",
            postInfoList: [...this.state.postInfoList, postInfo],
        }, () => {
            localStorage.setItem('postInfoList', JSON.stringify(this.state.postInfoList))
        })
    }


    handleTextareaChange(event){        
        const inputValue = event.target.value;
        const noEnough = inputValue.length < 5;
        this.setState({
            postMessage: inputValue,
            hasTextareaError: noEnough
        })
    }

    selectUser(user_info) {
        this.setState({
            post_user: user_info
        })
    }

    
    render() {

        const introduction = this.state.postInfoList.map((postInfo, index) => {
            return (
                <Main
                    key={index}
                    id={postInfo.id}
                    count={postInfo.count}
                    isSubmitted={postInfo.isSubmitted}
                    message={postInfo.postMessage}
                    date={postInfo.postDate}
                    user_01={this.props.user_01}
                    user_02={this.props.user_02}
                    user_03={this.props.user_03}
                    user_04={this.props.user_04}
                    user_05={this.props.user_05}
                    userInfo_user_now={this.props.userInfo_user}
                    userInfo_user={postInfo.userInfo_user}
                    post_user_now={this.state.post_user}
                    post_user={postInfo.post_user}
                />
            )
        })


        let button
    
        if(this.state.hasTextareaError){
            button = (<button className="btn btn-info" id="button" type="submit" disabled>Button</button>);
        } else {
            button = (<button onClick={() => this.handleSubmit()} className="btn btn-info" id="button" type="submit">Button</button>);
        }


        return (
            <div className="bg-light">
                <div className="card-body text-white" id="post">
                    <div className="d-flex flex-row">
                        <div className="m-auto">
                            <p className=""><img className="img-thumbnail" src={this.state.post_user.img} alt="Thumbnail image" width="80px"></img></p>
                            <div className="dropdown post_dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.post_user.name}
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

                        <div className="form-group m-auto post-form">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                value={this.state.postMessage}
                                onChange={(event) => { this.handleTextareaChange(event) }}>
                            </textarea>
                            <p className="text-right mb-0 mt-3">{button}</p>
                        </div>
                    </div>
                </div>
                {introduction}
            </div>
        );
    }
}

Post.propTypes = {
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    user_04: PropTypes.object,
    user_05: PropTypes.object,
    userInfo_user: PropTypes.object,
};

export default Post;

