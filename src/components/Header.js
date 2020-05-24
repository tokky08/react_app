import React from 'react';
import User_Info from './User_Info';
// import Post from './Post';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <User_Info
                    user_01 = {this.props.user_01}    
                    user_02 = {this.props.user_02}    
                    user_03 = {this.props.user_03}    
                />
            </div>
        );
    }
}

Header.propTypes = {
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    userInfo_user: PropTypes.object,
};

export default Header;
