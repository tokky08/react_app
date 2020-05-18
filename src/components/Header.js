import React from 'react';
import User_Info from './User_Info';
import Post from './Post';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <User_Info />
        <Post /> 
      </div>
    );
  }
}

export default Header;
