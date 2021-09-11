import React from "react";
import "../App.css"

function Sqaure({ val,chooseSqaure }){
return (
    <div className="square" onClick={chooseSqaure}>{val}</div>
)

}

export default Sqaure;