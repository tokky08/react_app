import React from 'react';
import Header from './Header';
import Main from './Main';


class App extends React.Component {
    render() {

        // ユーザーの情報をlocalstrageに保存
        
        let user_01 = {
            "name" : "user_01",
            "img": "../images/user_01.png",
            "clap": 100,
            "applauded": 0
        };
        localStorage.setItem( "user_01", JSON.stringify( user_01 ) );
        let user_01_info = JSON.parse(localStorage.getItem("user_01"));
        

        let user_02 = {
            "name" : "user_02",
            "img": "../images/user_02.png",
            "clap": 100,
            "applauded": 0
        };
        localStorage.setItem( "user_02", JSON.stringify( user_02 ) );
        let user_02_info = JSON.parse(localStorage.getItem("user_02"));
        

        let user_03 = {
            "name" : "user_03",
            "img": "../images/user_03.png",
            "clap": 100,
            "applauded": 0
        };
        localStorage.setItem( "user_03", JSON.stringify( user_03 ) );
        let user_03_info  = JSON.parse( localStorage.getItem( "user_03" ) );
        

        console.log( user_01_info );
        console.log( user_02_info );
        console.log( user_03_info );    


    return (
      <div>
        <Header
            user_01={user_01_info}
            user_02={user_02_info}
            user_03={user_03_info}
        />
        <Main />
      </div>
    );
  }
}

export default App;
