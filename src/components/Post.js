import React from 'react';

class Post extends React.Component {
  render() {
    return (
        <div className="bg-light">
            <div className="card-body text-white" id="user_info">
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

                    <form className="form-group m-auto">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <p className="text-right mb-0 mt-3"><button className="btn btn-info" type="submit">Button</button></p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Post;
