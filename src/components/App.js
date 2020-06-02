import React from 'react';
import Header from './Header';
import Main from './Main';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_01: JSON.parse(localStorage.getItem('user_01')),
            user_02: JSON.parse(localStorage.getItem('user_02')),
            user_03: JSON.parse(localStorage.getItem('user_03')),
            user_04: JSON.parse(localStorage.getItem('user_04')),
            user_05: JSON.parse(localStorage.getItem('user_05')),
        };
    }
    render() {

        // // ユーザーの情報をlocalstrageに保存

        if(this.state.user_01 == null){
            let user_01 = {
                "name" : "user_01",
                "img": "../images/user_01.png",
                "clap": 100,
                "applauded": 0,
                "limit": false
            };
            localStorage.setItem("user_01", JSON.stringify(user_01));
            this.setState({
                user_01: JSON.parse(localStorage.getItem("user_01"))
            });
        }
        

        if(this.state.user_02 == null){
            let user_02 = {
                "name" : "user_02",
                "img": "../images/user_02.png",
                "clap": 100,
                "applauded": 0,
                "limit": false
            };
            localStorage.setItem("user_02", JSON.stringify(user_02));
            this.setState({
                user_02: JSON.parse(localStorage.getItem("user_02"))
            });
        }
        

        if(this.state.user_03 == null){
            let user_03 = {
                "name" : "user_03",
                "img": "../images/user_03.png",
                "clap": 100,
                "applauded": 0,
                "limit": false
            };
            localStorage.setItem("user_03", JSON.stringify(user_03));
            this.setState({
                user_03: JSON.parse(localStorage.getItem("user_03"))
            });
        }
        
        
        if(this.state.user_04 == null){
            let user_04 = {
                "name" : "user_04",
                "img": "../images/user_04.png",
                "clap": 100,
                "applauded": 0,
                "limit": false
            };
            localStorage.setItem("user_04", JSON.stringify(user_04));
            this.setState({
                user_04: JSON.parse(localStorage.getItem("user_04"))
            });
        }
        

        if(this.state.user_05 == null){
            let user_05 = {
                "name" : "user_05",
                "img": "../images/user_05.png",
                "clap": 100,
                "applauded": 0,
                "limit": false
            };
            localStorage.setItem("user_05", JSON.stringify(user_05));
            this.setState({
                user_05: JSON.parse(localStorage.getItem("user_05"))
            });
        }
        
        

    return (
      <div>
        <Header
            user_01={this.state.user_01}
            user_02={this.state.user_02}
            user_03={this.state.user_03}
            user_04={this.state.user_04}
            user_05={this.state.user_05}
        />
        <Main />
      </div>
    );
  }
}

export default App;
