import { useState } from 'react';

const Edit = ({ toggleSubmit, setToggleSubmit, food, setFood, index, setIndex }) => {
    const [pop, setPop] = useState("");
    const [pops, setPops] = useState("");
    const editset = () => {
        let update = [...food];
        update[index].dish = pop;
        update[index].cal = pops;
        setFood(update);
        console.log("done");
        setPop("");
        setPops("");
    }

    return (
        toggleSubmit ?
            (<form className="pop" >

                <input type="text" value={pop} id="dish" placeholder="Enter food" onChange={(e) => setPop(e.target.value)}></input>
                <input type="number" value={pops} id="cal" placeholder="Enter calories" onChange={(e) => setPops(e.target.value)}></input>
                <button className="btn4" onClick={() => { setToggleSubmit(false); console.log(pop); console.log(pops); if (pop && pops) { editset(index); } }}>Update</button>



            </form>) : ""
    )
}
export default Edit;
