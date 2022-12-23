import React from "react";
import "../css/leagueTable.css"
import "../css/LiveResult.css"
import {sendApiGetRequest} from "./AppResponse";

class LiveResults extends React.Component{
    state= {
        liveGames: []
    }

    componentDidMount() {
        sendApiGetRequest("http://localhost:8989/get-live-games" , (response)=>{
            this.setState({
                liveGames :response.data
            })
        })
    }

    render() {

        return (

            <div className={"head"}>
                <div className="content">
                    <h2>Live</h2>
                    <h2>Live</h2>
                </div>
                <div className={"league-table"} >

                    <table>
                        <tr className={"col"}>
                            <th>T1</th>
                            <th>T1G</th>
                            <th>T2G</th>
                            <th>T2</th>
                        </tr>


                        {
                            this.state.liveGames.map((game) => {
                                return (
                                    <tr className={"wpos"}>
                                        <td>{game.team1}</td>
                                        <td>{game.team1Goals}</td>
                                        <td>{game.team2Goals}</td>
                                        <td>{game.team2}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        );

    }


}
export default LiveResults;