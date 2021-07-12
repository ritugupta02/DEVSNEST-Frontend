import "./menu.css";

function Card(props) {
    const { item, cal } = props;
    console.log(props);
    return (
        <div className="container">
            <div className="card">
                <h1 className="items">{item}</h1>
                <h3 className="cals">You have consumed {cal} cals today.</h3>
            </div>
        </div>
    )

}
export default Card;