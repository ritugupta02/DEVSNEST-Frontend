import Card from "./card";

function App(props) {
    return (
        <div className="App">
            <Card item="Pizza" cal="149" />
            <Card item="Coke" cal="38" />
            <Card item="Burger" cal="69" />
            <Card item="Shahi paneer" cal="105" />
            <Card item="Naan bread" cal="320" />
            <Card item="Dal makhani" cal="280" />
            <Card item="Rice" cal="130" />
            <Card item="Chhole Bhature" cal="427" />

        </div>
    );
}

export default App;
