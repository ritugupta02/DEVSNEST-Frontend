import Card from "../THA-20/Card";
import { useState } from 'react'


const App = () => {
    let [card, setCard] = useState([
        { item: "Pizza", cal: "You have consumed 149 calories." },
        { item: "Coke", cal: "You have consumed 38 calories." },
        { item: "Burger", cal: "You have consumed 69 calories." },
        { item: "Shahi paneer", cal: "You have consumed 105 calories." },
        { item: "Naan bread", cal: "You have consumed 320 calories." },
        { item: "Dal makhani", cal: "You have consumed 280 calories." },
        { item: "Rice", cal: "You have consumed 130 calories." },
        { item: "Chhole Bhature", cal: "You have consumed 427 calories." }

    ]);


    function del(i) {
        console.log(card.length);
        const newCards = card.filter((e, index) => index !== i);
        setCard(newCards);
        if (card.length === 1) {
            const s = [{ item: "No Entries" }];
            setCard(s);
        }
        // if (!card.length) {
        //     // var s = "No entries";
        //     // card[0] = s;
        //     console.log("yes im working");
        // }
    }
    return (
        <div className="container">
            {card.map((items, index) => (
                <Card
                    item={items.item}
                    cal={items.cal}
                    k={index}
                    del={del}
                />
            ))}
        </div>
    );
};

export default App;