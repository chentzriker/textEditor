function Special(props) {
  return (
    <div>
      <h3>specials</h3>
      <button onClick={props.Clear}>clearALL</button>
      <button onClick={props.LowerCase}>lowerALL</button>
      <button onClick={props.UpperCase}>upperALL</button>
    </div>
  );
}
export default Special;
