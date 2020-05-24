import React from 'react';
import Main from './Main';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            hasTextareaError: true,
            now: new Date(),
            year: "",
            mon: "",
            day: "",
            hour: "",
            min: "",
            sec: "",
            postDate: "",
            postMessage:"",
            postInfo: { postDate: "", postMessage: "" },
            postInfoList: [],
        };
    }
    handleSubmit() {
        // let date_post = {date: this.state.date , postMessage: this.state.postMessage} 
        this.setState({
            isSubmitted: true,
            // postMessage: "",
            
            now: new Date(),
            year: this.state.now.getFullYear(),
            mon: this.state.now.getMonth()+1,
            day: this.state.now.getDate(),
            hour: this.state.now.getHours(),
            min: this.state.now.getMinutes(),
            sec: this.state.now.getSeconds(),
            postDate: this.state.year + " / " + this.state.mon + " / " + this.state.day  + "  " + this.state.hour + ":" + this.state.min + ":" + this.state.sec,
            postInfo: { postDate: this.state.postDate, postMessage: this.state.postMessage },
            postInfoList: this.state.postInfoList.concat(this.state.postInfo),

        })

        console.log(this.state.postInfoList)

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
                    isSubmitted = {this.state.isSubmitted}
                    key = {index}
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
