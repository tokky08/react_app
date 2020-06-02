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
            "applauded": 0,
            "limit": false
        };
        localStorage.setItem( "user_01", JSON.stringify( user_01 ) );
        let user_01_info = JSON.parse(localStorage.getItem("user_01"));
        

        let user_02 = {
            "name" : "user_02",
            "img": "../images/user_02.png",
            "clap": 100,
            "applauded": 0,
            "limit": false
        };
        localStorage.setItem( "user_02", JSON.stringify( user_02 ) );
        let user_02_info = JSON.parse(localStorage.getItem("user_02"));
        

        let user_03 = {
            "name" : "user_03",
            "img": "../images/user_03.png",
            "clap": 100,
            "applauded": 0,
            "limit": false
        };
        localStorage.setItem( "user_03", JSON.stringify( user_03 ) );
        let user_03_info  = JSON.parse( localStorage.getItem( "user_03" ) );


        let user_04 = {
            "name" : "user_04",
            "img": "../images/user_04.png",
            "clap": 100,
            "applauded": 0,
            "limit": false
        };
        localStorage.setItem( "user_04", JSON.stringify( user_04 ) );
        let user_04_info = JSON.parse(localStorage.getItem("user_04"));
        

        let user_05 = {
            "name" : "user_05",
            "img": "../images/user_05.png",
            "clap": 100,
            "applauded": 0,
            "limit": false
        };
        localStorage.setItem( "user_05", JSON.stringify( user_05 ) );
        let user_05_info = JSON.parse(localStorage.getItem("user_05"));
    
        

        console.log( user_01_info );
        console.log( user_02_info );
        console.log( user_03_info );    
        console.log( user_04_info );    
        console.log( user_05_info );    


    return (
      <div>
        <Header
            user_01={user_01_info}
            user_02={user_02_info}
            user_03={user_03_info}
            user_04={user_04_info}
            user_05={user_05_info}
        />
        <Main />
      </div>
    );
  }
}

export default App;
