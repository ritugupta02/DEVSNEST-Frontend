import { useState } from 'react'
import "./button.css";
const Uhook = () => {
    const [count, setCount] = useState(0);
    const INC = () => {
        setCount(count + 1);

    };
    return (


        <button className="btn" onClick={INC} >
            you clicked on me {count} times!
        </button>

    );
}

export default Uhook;
