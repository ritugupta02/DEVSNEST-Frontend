import "./menu.css"
const Card = (props) => {


    let index = props.k;
    return <div className="card">
        <div><h2>{props.item}</h2></div>
        <div>{props.cal}
            <button className="btn" onClick={() => props.del(index)}>Delete</button>
        </div>
        <div>{props.val}</div>
    </div>
}

export default Card;