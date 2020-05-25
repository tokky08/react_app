import React from 'react';
import PropTypes from 'prop-types';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo_user: this.props.userInfo_user,
            post_user: this.props.post_user,
            count: 0,
            limit: 0,
            hovered: false,
            applauseListList: [],
            user_01_clap: 1,
            user_02_clap: 1,
            user_03_clap: 1,
            user_04_clap: 1,
            user_05_clap: 1,
        };
    }

    handleClick() {
        
        // 拍手した人が紹介した人・紹介された人でなければ
        if (!(this.props.userInfo_user.name == this.state.userInfo_user.name || this.props.userInfo_user.name == this.state.post_user.name)) {

            // 1ユーザは一つの投稿につき最大15回まで行える
            if (this.state.limit >= 15) {
                return
            }

            this.setState({
                count: this.state.count + 1,
                limit: this.state.limit + 1
            });
            

            // 紹介した人の拍手された数が+1される
            if (this.state.userInfo_user.name == this.props.user_01.name) {
                this.props.user_01.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_02.name) {
                this.props.user_02.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_03.name) {
                this.props.user_03.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_04.name) {
                this.props.user_04.applauded += 1;
            }
            if (this.state.userInfo_user.name == this.props.user_05.name) {
                this.props.user_05.applauded += 1;
            }

            // 紹介された人の拍手された数が+1される
            if (this.state.post_user.name == this.props.user_01.name) {
                this.props.user_01.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_02.name) {
                this.props.user_02.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_03.name) {
                this.props.user_03.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_04.name) {
                this.props.user_04.applauded += 1;
            }
            if (this.state.post_user.name == this.props.user_05.name) {
                this.props.user_05.applauded += 1;
            }

            let applauseList

            // 拍手した人の拍手できる数が-2される
            if (this.props.userInfo_user.name == this.props.user_01.name) {
                this.props.user_01.clap -= 2;

                applauseList = { name: this.props.userInfo_user.name, count: this.state.user_01_clap }; 
                this.setState({
                    applauseListList: this.state.applauseListList.concat(applauseList),
                    // applauseListList: applauseList,
                    user_01_clap: this.state.user_01_clap + 1
                })
            }
            if (this.props.userInfo_user.name == this.props.user_02.name) {
                this.props.user_02.clap -= 2;

                applauseList = { name: this.props.userInfo_user.name, count: this.state.user_02_clap }; 
                this.setState({
                    applauseListList: this.state.applauseListList.concat(applauseList),
                    // applauseListList: applauseList,
                    user_02_clap: this.state.user_02_clap + 1
                })
            }
            if (this.props.userInfo_user.name == this.props.user_03.name) {
                this.props.user_03.clap -= 2;

                applauseList = { name: this.props.userInfo_user.name, count: this.state.user_03_clap }; 
                this.setState({
                    applauseListList: this.state.applauseListList.concat(applauseList),
                    // applauseListList: applauseList,
                    user_03_clap: this.state.user_03_clap + 1
                })
            }
            if (this.props.userInfo_user.name == this.props.user_04.name) {
                this.props.user_04.clap -= 2;

                applauseList = { name: this.props.userInfo_user.name, count: this.state.user_04_clap }; 
                this.setState({
                    applauseListList: this.state.applauseListList.concat(applauseList),
                    // applauseListList: applauseList,
                    user_04_clap: this.state.user_04_clap + 1
                })
            }
            if (this.props.userInfo_user.name == this.props.user_05.name) {
                this.props.user_05.clap -= 2;

                applauseList = { name: this.props.userInfo_user.name, count: this.state.user_05_clap }; 
                this.setState({
                    applauseListList: this.state.applauseListList.concat(applauseList),
                    // applauseListList: applauseList,
                    user_05_clap: this.state.user_05_clap + 1
                })
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

        console.log(this.state.applauseList)


        const tooltip_li = this.state.applauseListList.map((applauseList, index) => {
            return (
                <li className="list-group-item" key={index}>{applauseList.name} : {applauseList.count}</li>
            )
        })


        let tooltip;
        if (this.state.hovered) {
            tooltip = (
                <div className="card" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
                    <ul className="list-group list-group-flush">
                        {tooltip_li}
                        {/* <li className="list-group-item">{this.props.userInfo_user.name}</li> */}
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
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
                    {tooltip}
                    <hr className="m-0"/>
                </div>
            </div>
        );
    }
}

Introduction.propTypes = {
    message: PropTypes.string,
    date: PropTypes.string,
    user_01: PropTypes.object,
    user_02: PropTypes.object,
    user_03: PropTypes.object,
    user_04: PropTypes.object,
    user_05: PropTypes.object,
    userInfo_user: PropTypes.object,
    post_user: PropTypes.object,
};

export default Introduction;
