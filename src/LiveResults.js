import React from "react";
import {useEffect, useState} from "react";
import Tables from "./Tables";

function LiveResults(){
    return (

        <div>
            <Tables/>
        </div>
       /* // we need to send getReq and List of Objects from server side
        <div>
            <div>

            </div>
        </div>*/



    );


}

export default LiveResults;

/*import {useEffect, useState} from "react";

function Page2 () {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log("Hello from user");
    }, [count])
    return(

        <div>
            <button onClick={ () => setCount(count+1)}>Click Here</button>
            Counter: {count}
        </div>
    )

}
export default Page2;
*/