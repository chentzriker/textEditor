function Special(props) {
  return (
    <div>
      <button onClick={props.Clear}>clearALL</button>
      <button onClick={props.LowerCase}>lowerALL</button>
      <button onClick={props.UpperCase}>upperALL</button>
    </div>
  );
}
export default Special;
