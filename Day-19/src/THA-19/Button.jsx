import { useState } from 'react'
import "./button.css";
const Uhook = () => {
    const [count, setCount] = useState(0);

    return (


        <button className="btn" onClick={() => setCount(count + 1)}>
            you clicked on me {count} times!
        </button>

    );
}

export default Uhook;