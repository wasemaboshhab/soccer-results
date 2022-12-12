import React from "react";
import {useEffect, useState} from "react";

function LiveResults(){
    return (
      <div>
          Live Result
      </div>
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