function StyleText(props) {
  return (
    <div>
      <h3>change font size</h3>
      <button onClick = {(e) => props.changeSize(e)}>14</button>
      <button onClick = {(e) => props.changeSize(e)}>16</button>
      <button onClick = {(e) => props.changeSize(e)}>18</button>
      <h3>change font style</h3>
      <button onClick = {(e) => props.changeFontFamily(e)}>Fantasy</button>
      <h3>change color</h3>
      <button onClick = {(e) => props.changeColor(e)}>red</button>
      <button onClick = {(e) => props.changeColor(e)}>blue</button>
      <button onClick = {(e) => props.changeColor(e)}>green</button>
      <button onClick = {(e) => props.changeColor(e)}>black</button>
    </div>
  );
}
export default StyleText;
