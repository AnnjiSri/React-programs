import React, {useState} from "react";
function Rendercomponent(){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const handleLoginToggle =() =>{
        setIsLoggedIn(!isLoggedIn);
    };
    return(
        <div>
            <h1>welcome to react js</h1>
            {isLoggedIn ? (
                <p>welcome to new world</p>
            ):(
            <p>login here</p>
            )}
            <button class="anji" onClick={handleLoginToggle}>
                {isLoggedIn ? "Logout" :"Login"}
            </button>
            </div>
    );
            }
            export default Rendercomponent;