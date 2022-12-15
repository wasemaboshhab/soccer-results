import React from "react";

function Tables() {
  const groups = [
      {id:1,name:"a",goals:2, goalsAginst: 0 },
      {id:2,name:"b",goals:3, goalsAginst: 1 }
  ]

    return (
        <div>
            <table style={{margin: "40px"}} border={"1px solid black"}>

                <tr>
                    <th style={{padding: "10px"}}>id</th>
                    <th style={{padding: "10px"}}>name</th>
                    <th style={{padding: "10px"}}>goals</th>
                    <th style={{padding: "10px"}}>goals - against</th>
                </tr>

                {

                    groups.map((team) => {

                        return (
                            <div>
                                <tr>
                                    <td style={{padding: "10px"}}>{team.id}</td>
                                    <td style={{padding: "10px"}}>{team.name}</td>
                                    <td style={{padding: "10px"}}>{team.goals}</td>
                                    <td style={{padding: "10px"}}>{team.goalsAginst}</td>

                                </tr>
                            </div>
                        );
                    })
                }


            </table>
        </div>
    );

   /* return (
        <table>
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Modify Customer</th> // where you'll put the edit button
            </tr>
            </thead>
            <tbody>
            {/!* iterate through the customers array and render a unique Customer component for each customer object in the array *!/}
            { customers.map(customer => <Customer key={customer.id} customer={customer} />) }
            </tbody>
        </table>
    )
*/






}

export default Tables;