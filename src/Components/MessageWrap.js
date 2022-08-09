import React from "react";
import { useParams } from "react-router-dom";

const MessageWrapper = () => {
  let { Id } = useParams();
  return (
    <section>
      <h3>ChatId: {Id}</h3>
    </section>
  );
};

export default MessageWrapper;
