import React from 'react';

class User_Info extends React.Component {
  render() {
      return (
        <div className="bg-info">
            <div className="card-body text-white" id="user_info">
                <div className="d-flex flex-row">
                    <div className="m-auto">
                        <p className=""><img className="img-thumbnail" src="../images/user_01.png" alt="Thumbnail image" width="80px"></img></p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                            </div>
                        </div>
                    </div>

                    <div className="m-auto">
                        <p>拍手できる：100</p>
                        <p>拍手された：0</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default User_Info;
