import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isSubmitted: false,
          textarea:"",
          hasTextareaError: true
        };
    }
    handleSubmit() {
        this.setState({isSubmitted: true});
    }

    handleTextareaChange(event){
        const inputValue = event.target.value;
        const noEnough = inputValue.length < 5;
        this.setState({
            textarea: inputValue,
            hasTextareaError: noEnough
        })
    }
    
    render() {
        let button
    
        if(this.state.hasTextareaError){
            button = (<button className="btn btn-info" id="button" type="submit" disabled>Button</button>);
        } else {
            button = (<button className="btn btn-info" id="button" type="submit">Button</button>);
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

                        <form className="form-group m-auto post-form" onSubmit={() => {this.handleSubmit()}}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                value={this.state.textarea}
                                onChange={(event) => { this.handleTextareaChange(event) }}>
                            </textarea>
                            <p className="text-right mb-0 mt-3">{button}</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
