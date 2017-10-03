function ChatWindow(props) {
  const phrases = props.value.map((phrase, index) => {
    return (
      <div key={index} className="chatwindow">
        <p>{phrase}</p>
      </div>
    )
  });
  return <div>{phrases}</div>
};

export default ChatWindow;