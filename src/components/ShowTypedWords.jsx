function ShowTypedWords(props) {
    return (
        <div>
            {props.arrText.length > 0 && props.arrText.map((element, index) => <span key={index} style={element.style}>{element.letter}</span>)}
        </div>
    )
}
export default ShowTypedWords;