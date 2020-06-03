import React from 'react';
import PropTypes from 'prop-types';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo_user: this.props.userInfo_user,
            post_user: this.props.post_user,
            count: this.props.count,
            postInfoList: JSON.parse(localStorage.getItem('postInfoList')),
            hovered: false,
        };
    }

    handleClick() {
     
        let user = JSON.parse(localStorage.getItem(this.props.userInfo_user_now.name))

        if (!user.limit) {

            // 拍手した人が紹介した人・紹介された人でなければ
            if (!(this.props.userInfo_user_now.name == this.state.userInfo_user.name || this.props.userInfo_user_now.name == this.state.post_user.name)) {
                

                for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                    if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                        let count = JSON.parse(localStorage.getItem('postInfoList'))
                        count[i]["count"] += 1;
                        localStorage.setItem("postInfoList", JSON.stringify(count))
                        this.setState({
                            count: count[i]["count"]
                        });
                    }
                    
                }


                // 紹介した人の拍手された数が+1される
                if (this.state.userInfo_user.name == this.props.user_01.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_01"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_01", JSON.stringify(applauded))
                }
                if (this.state.userInfo_user.name == this.props.user_02.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_02"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_02", JSON.stringify(applauded))
                }
                if (this.state.userInfo_user.name == this.props.user_03.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_03"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_03", JSON.stringify(applauded))
                }
                if (this.state.userInfo_user.name == this.props.user_04.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_04"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_04", JSON.stringify(applauded))
                }
                if (this.state.userInfo_user.name == this.props.user_05.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_05"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_05", JSON.stringify(applauded))
                }

                // 紹介された人の拍手された数が+1される
                if (this.state.post_user.name == this.props.user_01.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_01"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_05", JSON.stringify(applauded))
                }
                if (this.state.post_user.name == this.props.user_02.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_02"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_02", JSON.stringify(applauded))
                }
                if (this.state.post_user.name == this.props.user_03.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_03"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_03", JSON.stringify(applauded))
                }
                if (this.state.post_user.name == this.props.user_04.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_04"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_04", JSON.stringify(applauded))
                }
                if (this.state.post_user.name == this.props.user_05.name) {
                    
                    let applauded = JSON.parse(localStorage.getItem("user_05"))
                    applauded["applauded"] += 1;
                    localStorage.setItem("user_05", JSON.stringify(applauded))
                }


                // 拍手した人の拍手できる数が-2される
                if (this.props.userInfo_user_now.name == this.props.user_01.name) {
                    
                    let clap = JSON.parse(localStorage.getItem("user_01"))
                    clap["clap"] -= 2;
                    localStorage.setItem("user_01", JSON.stringify(clap))


                    for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                        if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                            let clap = JSON.parse(localStorage.getItem('postInfoList'))
                            clap[i]["user_01_clap"] += 1;
                            localStorage.setItem("postInfoList", JSON.stringify(clap))
                        }
                        
                    }

                }

                if (this.props.userInfo_user_now.name == this.props.user_02.name) {
                    
                    let clap = JSON.parse(localStorage.getItem("user_02"))
                    clap["clap"] -= 2;
                    localStorage.setItem("user_02", JSON.stringify(clap))


                    for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                        if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                            let clap = JSON.parse(localStorage.getItem('postInfoList'))
                            clap[i]["user_02_clap"] += 1;
                            localStorage.setItem("postInfoList", JSON.stringify(clap))
                        }
                        
                    }

                }

                if (this.props.userInfo_user_now.name == this.props.user_03.name) {
                    
                    let clap = JSON.parse(localStorage.getItem("user_03"))
                    clap["clap"] -= 2;
                    localStorage.setItem("user_03", JSON.stringify(clap))


                    for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                        if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                            let clap = JSON.parse(localStorage.getItem('postInfoList'))
                            clap[i]["user_03_clap"] += 1;
                            localStorage.setItem("postInfoList", JSON.stringify(clap))
                        }
                        
                    }


                }

                if (this.props.userInfo_user_now.name == this.props.user_04.name) {
                    
                    let clap = JSON.parse(localStorage.getItem("user_04"))
                    clap["clap"] -= 2;
                    localStorage.setItem("user_04", JSON.stringify(clap))



                    for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                        if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                            let clap = JSON.parse(localStorage.getItem('postInfoList'))
                            clap[i]["user_04_clap"] += 1;
                            localStorage.setItem("postInfoList", JSON.stringify(clap))
                        }
                        
                    }


                }

                if (this.props.userInfo_user_now.name == this.props.user_05.name) {

                    let clap = JSON.parse(localStorage.getItem("user_05"))
                    clap["clap"] -= 2;
                    localStorage.setItem("user_05", JSON.stringify(clap))



                    for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                        if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {
                            let clap = JSON.parse(localStorage.getItem('postInfoList'))
                            clap[i]["user_05_clap"] += 1;
                            localStorage.setItem("postInfoList", JSON.stringify(clap))
                        }
                        
                    }

                }

            }
            
        }

    }

    onMouseEnter() {
        this.setState({
            hovered: true
        });
    }

    onMouseLeave() {
        this.setState({
            hovered: false
        });
    }

    render() {


        if (JSON.parse(localStorage.getItem('postInfoList')) != null) {

            for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++) {

                let postInfo = JSON.parse(localStorage.getItem('postInfoList'))

                let postInfoJson = [
                    { name: "user_01", count: postInfo[i]["user_01_clap"] },
                    { name: "user_02", count: postInfo[i]["user_02_clap"] },
                    { name: "user_03", count: postInfo[i]["user_03_clap"] },
                    { name: "user_04", count: postInfo[i]["user_04_clap"] },
                    { name: "user_05", count: postInfo[i]["user_05_clap"] },
                ]

                if (JSON.parse(localStorage.getItem('applauseListList_new')) == null) {
                    localStorage.setItem("applauseListList_new", JSON.stringify([]))
                }


                let data = JSON.parse(localStorage.getItem('applauseListList_new'))  
                data[i] = postInfoJson
                localStorage.setItem("applauseListList_new", JSON.stringify(data))
            
            }
        }

        console.log(JSON.parse(localStorage.getItem('applauseListList_new')))
        console.log(this.state.applauseListList)
        console.log(JSON.parse(localStorage.getItem('postInfoList')))



        // 1ユーザは一つの投稿につき最大15回まで行える

        if (this.state.user_01_clap > 15) {
            let limit = JSON.parse(localStorage.getItem("user_01"))
            limit["limit"] = true;
            localStorage.setItem("user_01", JSON.stringify(limit))
        } else {
            let limit = JSON.parse(localStorage.getItem("user_01"))
            limit["limit"] = false;
            localStorage.setItem("user_01", JSON.stringify(limit))
        }

        if (this.state.user_02_clap > 15) {
            let limit = JSON.parse(localStorage.getItem("user_02"))
            limit["limit"] = true;
            localStorage.setItem("user_02", JSON.stringify(limit))
        }else {
            let limit = JSON.parse(localStorage.getItem("user_02"))
            limit["limit"] = false;
            localStorage.setItem("user_02", JSON.stringify(limit))
        }

        if (this.state.user_03_clap > 15) {
            let limit = JSON.parse(localStorage.getItem("user_03"))
            limit["limit"] = true;
            localStorage.setItem("user_03", JSON.stringify(limit))
        }
        else {
            let limit = JSON.parse(localStorage.getItem("user_03"))
            limit["limit"] = false;
            localStorage.setItem("user_03", JSON.stringify(limit))
        }

        if (this.state.user_04_clap > 15) {
            let limit = JSON.parse(localStorage.getItem("user_04"))
            limit["limit"] = true;
            localStorage.setItem("user_04", JSON.stringify(limit))
        }else {
            let limit = JSON.parse(localStorage.getItem("user_04"))
            limit["limit"] =false;
            localStorage.setItem("user_04", JSON.stringify(limit))
        }

        if (this.state.user_05_clap > 15) {
            let limit = JSON.parse(localStorage.getItem("user_05"))
            limit["limit"] = true;
            localStorage.setItem("user_05", JSON.stringify(limit))
        }else {
            let limit = JSON.parse(localStorage.getItem("user_05"))
            limit["limit"] = false;
            localStorage.setItem("user_05", JSON.stringify(limit))
        }

    



        let clapList_li
        if (JSON.parse(localStorage.getItem('postInfoList')) != null) {
            for (let i = 0; i < JSON.parse(localStorage.getItem('postInfoList')).length; i++){

                if (JSON.parse(localStorage.getItem('postInfoList'))[i].id == this.props.id) {

                    // 降順にソート
                    let sort = JSON.parse(localStorage.getItem("applauseListList_new"))
                    sort[i] = JSON.parse(localStorage.getItem('applauseListList_new'))[i].sort(
                                function(a,b){
                                    return (a.count < b.count ? 1 : -1);
                                }
                            );
                    localStorage.setItem("applauseListList_new", JSON.stringify(sort))

                    clapList_li = JSON.parse(localStorage.getItem('applauseListList_new'))[i].map((applauseList, index) => {
                        if(applauseList.count != 0){
                            return (
                                <li className="list-group-item" key={index}>{applauseList.name} : {applauseList.count}</li>
                            )
                        }
                    })

                    console.log(JSON.parse(localStorage.getItem('applauseListList_new'))[i])
                }
                
            }
        }
        



        let clapList;
        if (this.state.hovered) {
            clapList = (
                <div className="card" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
                    <ul className="list-group list-group-flush">
                        {clapList_li}
                    </ul>
                </div>
            );
        }

        return (
            <div className="bg-white">
                <div className="card-body " id="Introduction">
                    <div className="d-flex flex-row">
                        <p className=""><img className="img-thumbnail" src={this.state.userInfo_user.img} alt="Thumbnail image" width="80px"></img></p>
                        <i className="fas fa-hand-point-right fa-2x align-self-center mr-3 ml-3"></i>
                        <p className=""><img className="img-thumbnail" src={this.state.post_user.img} alt="Thumbnail image" width="80px"></img></p>
                    </div>
                    <p>{this.props.message}</p>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="">
                            <i className="fas fa-sign-language fa-2x mr-3" onClick = {()=>{this.handleClick()}}></i>
                            <span className="countHover p-2" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>{this.state.count}</span>
                        </div>
                        <p>{this.props.date}</p>
                    </div>
                    {clapList}
                    <hr className="m-0"/>
                </div>
            </div>
        );
    }
}

Introduction.propTypes = {
    id: PropTypes.number,
    count: PropTypes.number,
    message: PropTypes.string,
    date: PropTypes.string,
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    user_04: PropTypes.object,
    user_05: PropTypes.object,
    userInfo_user: PropTypes.object,
    post_user: PropTypes.object,
    userInfo_user_now: PropTypes.object,
    post_user_now: PropTypes.object,
};

export default Introduction;
