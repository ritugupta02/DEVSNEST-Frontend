import Card from "./card";

function App() {
    return (
        // const arr = [];

        <div className="board">
            {
                [...Array(64)].map((item, index) => {
                    let BGC = " ";
                    if ((Math.floor(index / 8) % 2 === 0 && index % 2 === 0) || (Math.floor(index / 8) % 2 !== 0 && index % 2 !== 0)) {
                        BGC = "black";
                    }
                    else {
                        BGC = "white"
                    }

                    return (
                        <Card color={BGC} />
                    )
                })
            }

        </div>
    );
}

export default App;