import React, { useRef } from "react";
const Form = ({ food, setFood }) => {
    const dish = useRef(null);
    const cal = useRef(null);
    const Addinfo = e => {
        e.preventDefault();
        // console.log(dish.current.value);
        if (dish && cal) {
            setFood([...food, {
                "dish": dish.current.value,
                "cal": cal.current.value
            }]);
        }
        console.log(food);
        dish.current.value = "";
        cal.current.value = null;
    }
    return (
        <form className="input-form" onSubmit={Addinfo}>
            <div className="inner-form">
                <input type="text" id="dish" placeholder="Enter food" ref={dish}></input>
                <input type="number" id="cal" placeholder="Enter calories" ref={cal}></input>
                <button className="btn">+</button>

            </div>
        </form>
    )
}
export default Form;