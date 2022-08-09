import ChatList from "./ChatList";
import MessageWrapper from "./MessageWrap";

const Wrapper = () => {
  return (
    <section>
      <h2 className="text-center">Chat App</h2>
      <div className="row g-0 mt-2">
        <div className="col-4">
          <ChatList />
        </div>
        <div className="col-8">
          <MessageWrapper />
        </div>
      </div>
    </section>
  );
};
export default Wrapper;
