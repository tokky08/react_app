import React from 'react';
import Main from './Main';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            hasTextareaError: true,
            postMessage:"",
            postInfo: { postDate: "", postMessage: "" },
            postInfoList: [],
        };
    }

    handleSubmit() {
        const now = new Date();
        const year = now.getFullYear();
        const mon = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        const min = now.getMinutes();
        const postDate = year + "/" + mon + "/" + day + "　" + hour + ":" + min;
        const postInfo = { postDate: postDate, postMessage: this.state.postMessage }; 
        this.setState({
            isSubmitted: true,
            postMessage: "",
            postInfoList: this.state.postInfoList.concat(postInfo),

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

    
    render() {
        
        const introduction = this.state.postInfoList.map((postInfo, index) => {
            return (
                <Main
                    key = {index}
                    isSubmitted = {this.state.isSubmitted}
                    message = {postInfo.postMessage}
                    date = {postInfo.postDate}
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
                            <p className=""><img className="img-thumbnail" src="../images/user_01.png" alt="Thumbnail image" width="80px"></img></p>
                            <div className="dropdown post_dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                </div>
                            </div>
                        </div>

                        <div className="form-group m-auto post-form" /*onSubmit={() => {this.handleSubmit()}}*/>
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

export default Post;
