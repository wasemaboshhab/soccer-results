import {sendApiGetRequest, sendApiPostRequest} from "./AppResponse";

import React from "react";
import axios from "axios";
class Login extends  React.Component {

    state= {
        username: "",
        password: "",
        responseFromGetRequest: "",
        responseFromPostRequest: "",
        errorMessage: "",
        userExist: false,
        groupsNames: [],
        renderOption: false,
        option1: "",
        option2: "",
        groupOneGoals: 0,
        groupTwoGoals: 0,
        isClicked: false
    }


    addUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    addUserPassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state)

    }



    componentDidMount() {
        axios.get("http://localhost:8989/get-names-groups", {
            params:{

            }

        }).then((response) => {
            const array = response.data;
            this.setState({
                groupsNames: array
            });
        });
    };

    getRequest=()=> {

        sendApiPostRequest("http://localhost:8989/sign-in", {
            username:this.state.username,
            password:this.state.password
        }, (response) => {
            if (response.data.success) {
                this.setState({
                    username: response.data.user.username,
                    userExist: true,
                    renderOption: true
                })
                alert("sign in successfully!");

            } else {
                if (response.data.errorCode === 1) {
                    this.setState({
                        errorMessage: "No Such User"
                    })
                } else if (response.data.errorCode === 2) {
                    this.setState({
                        errorMessage: "Password Incorrect"
                    })

                }
            }

        })
        if(this.state.errorMessage !== ""){
            alert(this.state.errorMessage)
        }
    }

    login = () => {
        return (
            <div>
                <div className={"login"}>
                    <input type="text" value={this.state.username} onChange={this.addUserName}
                           placeholder={"username"}/>
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.addUserPassword}
                           placeholder={"password"}/>
                    <br/>
                </div>
                <button type="login" onClick={this.getRequest} disabled={this.state.userExist}>Login</button>

            </div>

        )
    }
    selectedGroup1 = () => {
        let option1 = document.getElementById("option1");
        let text1 = option1.options[option1.selectedIndex].text;
        this.setState({
            option1: text1,
        })
    }
    selectedGroup2 = () => {
        let option2 = document.getElementById("option2");
        let text2 = option2.options[option2.selectedIndex].text;

        this.setState({
            option2: text2
        })
    }

    addGoalsGroupOne = (e) => {
        let counter = this.state.groupOneGoals;
        this.setState({
            groupOneGoals:counter+1
        })
    }

    addGoalsGroupTwo = (e) => {
        let counter = this.state.groupTwoGoals;
        this.setState({
            groupTwoGoals:counter+1
        })
    }

    saveMatch = () => {
        this.setState({
            isClicked: true
        })
        sendApiPostRequest("http://localhost:8989/save-match", {
            team1: this.state.option1,
            team2: this.state.option2,
            team1Goals: this.state.groupOneGoals,
            team2Goals: this.state.groupTwoGoals
        }, (response) => {
            if (response.data.success) {
                this.setState({

                })
                alert("sign in successfully!");
            }
        })
    }

    render(){
        {
            return (
                this.state.renderOption ?
                    <div>
                        <div id={"group1"}>
                            Group 1
                            <br/>
                            <select id={"option1"} onChange={this.selectedGroup1} >
                                {
                                    this.state.groupsNames.map((team,i) => {
                                        let disabled = team.toString()===this.state.option2
                                        return (
                                            <option value={i} disabled={disabled}>{team.toString()}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>{this.state.groupOneGoals}
                                <button id={"addGoal"} onClick={this.addGoalsGroupOne} disabled={!this.state.isClicked}>Add Goal</button>
                            </div>
                        </div>
                        <div id={"group2"}>
                            <br/>
                            <br/>
                            Group 2
                            <br/>
                            <select id={"option2"} onChange={this.selectedGroup2} >
                                {
                                    this.state.groupsNames.map( (team,i) => {
                                        let disabled = team.toString()===this.state.option1
                                        return (
                                            <option value={i} disabled={disabled}  >{team.toString()}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>{this.state.groupTwoGoals}
                                <button id={"addGoal"} onClick={this.addGoalsGroupTwo} disabled={!this.state.isClicked}>Add Goal</button>
                            </div>
                        </div>
                        <button>save</button>
                        <br/>
                        <button>End Game</button>
                    </div>
                    : this.login()



            );
        }
    }
}
export default Login;