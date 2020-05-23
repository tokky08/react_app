import React from 'react';
import PropTypes from 'prop-types';

class Introduction extends React.Component {
  render() {
    return (
        <div className="bg-white">
            <div className="card-body " id="Introduction">
                <div className="d-flex flex-row">
                    <p className=""><img className="img-thumbnail" src="../images/user_01.png" alt="Thumbnail image" width="80px"></img></p>
                    <i className="fas fa-hand-point-right fa-2x align-self-center mr-3 ml-3"></i>
                    <p className=""><img className="img-thumbnail" src="../images/user_02.png" alt="Thumbnail image" width="80px"></img></p>
                </div>
                <p>{this.props.message}</p>
                <div className="d-flex flex-row justify-content-between">
                    <div className="">
                        <i className="fas fa-sign-language fa-2x mr-3"></i>
                        <span>0</span>
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
    isSubmitted: PropTypes.boolean,
    message: PropTypes.string,
    date:PropTypes.string
};

export default Introduction;
