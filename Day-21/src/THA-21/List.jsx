

const Card = (props) => {


    let index = props.k;
    return <div className="card">
        <div className="innercard">

            <span className="name">{props.dish}</span>
            <span className="calo">{props.cal} Calories
                <button className="btn1" onClick={() => props.del(index)}><i className="fa fa-trash"></i></button>
                <button className="btn2" onClick={() => props.edit(index)}><i className="fa fa-pencil"></i></button>
            </span>
            {/* <div>{props.val}</div> */}
        </div>
    </div>
}

export default Card;