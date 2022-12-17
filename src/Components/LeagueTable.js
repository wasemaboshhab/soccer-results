import React, {Component} from "react";
import {sendApiGetRequest} from "./AppResponse";
import '../css/leagueTable.css'




class LeagueTable extends React.Component{
    state = {
        teams : [],

    }

    componentDidMount() {
        sendApiGetRequest("http://localhost:8989/get-static-table" , (response)=>{
            this.setState({
                teams: response.data
            })
        });
    }



    render() {
        return (
            <div >
                <div className={"league-table"}>

                    <h1 className={"heading"}> STANDING</h1>
                    <table>
                        <tr className={"col"}>
                            <th>#</th>
                            <th className={"left"}>TEAM</th>
                            <th>PTS</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>+/-</th>
                            <th>GD</th>
                            {/*<th>POSITION</th>*/}
                        </tr>


                        {/*<Tables teams={this.state.teams}/>*/}
                         {



                            this.state.teams.map((team) => {




                                return (
                                    <tr className={"wpos"}>
                                        <td >{team.id}</td>
                                        <td className={"left"}>{team.name}</td>
                                        <td>{team.points}</td>
                                        <td>{team.numberOfWins}</td>
                                        <td>{team.draws}</td>
                                        <td>{team.numberOfLosses}</td>
                                        <td>{team.inFavorGoals} - {team.goalsAgainst}</td>
                                        <td>{team.ratioOfGoals}</td>
                                        {/*<td>{team.position}</td>*/}
                                    </tr>
                                );


                            })
                        }
                    </table>
                </div>


            </div>
        );
    }


}

export default LeagueTable;