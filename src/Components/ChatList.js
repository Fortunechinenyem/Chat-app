import React from "react";
import {link} from "react-router-dom";

const ChatList = () => {
    let people = new Array(10).fill("Fortune",1)
    return (
        <>
        <div className="list-group"
        style={{
            borderRight: "solid 1px",
            padding: "1rem",
        }}
        >
            {people.map((eachChat,index) => (
                <p className="list-group-item mb-0" key={index}>
                    <link 
                    style={{display:"block", margin: "1rem 0" }}
                    to= {`/people/${index}`}
                    key={index}>

                    {EachChat}
                    </link>
                </p>
            )
            )}
            
            
        </div>
            </>
    )
}

export default ChatList;