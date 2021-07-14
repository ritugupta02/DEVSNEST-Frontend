import "./chessboard.css";

function Card(props) {

    return (
        <div className="square" style={{ backgroundColor: props.color }}>
        </div>
    )

}
export default Card;