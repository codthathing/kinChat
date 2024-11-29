const PageBack = ({ buttonFunction }) => {
  return (
    <div onClick={buttonFunction} className="bacLogDiv">
      <i className="fa-solid fa-chevron-left bacToLog"></i>
      <span className="bacToLogSpan">Back</span>
    </div>
  );
};

export default PageBack;