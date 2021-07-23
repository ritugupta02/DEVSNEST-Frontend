import Header from "./Header";
import Form from "./Form";
import "./page.css";
import Card from "./List";

import { useState } from 'react'
import Edit from "./Edit"

const App = () => {
    const [food, setFood] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(false);
    const [index, setIndex] = useState();

    function del(i) {
        console.log(food.length);
        const newCards = food.filter((e, index) => index !== i);
        setFood(newCards);

    }
    function edit(i) {
       
        // console.log(i);
        // console.log(food[i]);
        setToggleSubmit(true);

        setIndex(i);
        // console.log(toggleSubmit);
        // console.log(index);
      

    }


    return (
        <div>
            <Header />
            <Form food={food} setFood={setFood} />
            <div className="containerclass">
                <div className="container">
                    {food.map((items, index) => (
                        <Card
                            dish={items.dish}
                            cal={items.cal}
                            k={index}
                            del={del}
                            edit={edit}
                        />
                    ))}
                </div>
            </div>
            <Edit toggleSubmit={toggleSubmit} setToggleSubmit={setToggleSubmit} food={food} setFood={setFood} index={index} setIndex={setIndex} />
        </div>
    )
}

export default App;
