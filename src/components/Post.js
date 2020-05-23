import React from 'react';
import Main from './Main';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            postMessage:"",
            hasTextareaError: true,
            postedList: [],
            dateList: [],
            date: "",
            postedList_map: {}
        };
    }
    handleSubmit() {
        // this.setState({isSubmitted: true});
        this.setState({
            isSubmitted: true,
            postedList: this.state.postedList.concat(this.state.postMessage),
            postMessage: "",
            date: new Date(),
            // dateList: this.state.date.concat(this.state.date),
            // postedList_map: this.state.postedList_map.set(this.state.date, this.state.postMessage)
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
        // const todoListNode = this.state.todoList.map((todo, idx) => {
        //     return <li key={idx}>{todo}</li>
        // })



        const postedListNode = this.state.postedList.map((message, index) => {
            return (
                <Main
                    isSubmitted = {this.state.isSubmitted}
                    key = {index}
                    message = {message}
                    // date = {this.state.date}
                />
            )
        })

        // const postedListNode = Object.keys(this.state.postedList_map).map((message, index) => {
        //     return (
        //         <Main
        //             isSubmitted = {this.state.isSubmitted}
        //             key = {index}
        //             message = {message}
        //             // date = {index}
        //         />
        //     )
        // })




        let button
    
        if(this.state.hasTextareaError){
            button = (<button className="btn btn-info" id="button" type="submit" disabled>Button</button>);
        } else {
            button = (<button onClick={() => this.handleSubmit()} className="btn btn-info" id="button" type="submit">Button</button>);
        }

        // let introduction

        // if (this.state.isSubmitted) {
        //     this.setState({todoList: this.state.todoList.concat(this.state.value)})
        //     introduction = (
        //         <Main
        //             isSubmitted
        //             message={this.state.postMessage}
        //             date="2020/05/23 23:05"
        //         />
        //     );
        // }

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
                {postedListNode}
            </div>
        );
    }
}

export default Post;
