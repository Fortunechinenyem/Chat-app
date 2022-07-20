import React from "react";
import { useParams } from "react-router-dom";

const MessageWrapper = () => {
    let {Id} = useParams();
    return 
    <>
    <h3>ChatId: {Id}</h3>
    </>
}

export default MessageWrapper;