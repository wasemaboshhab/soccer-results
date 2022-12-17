import React from "react";
import "../css/leagueTable.css"
import "../css/LiveResult.css"

function LiveResults() {
    /*state = {
        teamsPlaying : [
            {team1 : "Barcelona", team1Goals:5 , team2Goals:0 ,team2:"Real madrid"},
            {team1 : "city", team1Goals:1 , team2Goals:1 ,team2:"united"}
        ]
    }*/
    const teamsPlaying = [
        {team1: "Barcelona", team1Goals: 5, team2Goals: 0, team2: "Real madrid"},
        {team1: "city", team1Goals: 1, team2Goals: 1, team2: "united"}
    ]
    // not ready yet in server
    // componentDidMount() {
    //     sendApiGetRequest("http://localhost:8989/get-live-games" , (response)=>{
    //         this.setState({
    //             teamsPlaying :response.data
    //         })
    //     })
    // }

    return (

       <div className={"head"}>
           <div className="content">
               <h2>Live</h2>
               <h2>Live</h2>
           </div>
           <div className={"league-table"} >

               <table>
                   {/* <h1 data-shadow='Live!'>Live!</h1>*/}
                   <tr className={"col"}>
                       <th>T1</th>
                       <th>T1G</th>
                       <th>T2G</th>
                       <th>T2</th>
                   </tr>


                   {
                       teamsPlaying.map((game) => {
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
export default LiveResults;