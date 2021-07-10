import "./index.css";

function App() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
        arr.push(<div className="box" />);
    }
    return (
        <div className="App">
            <div className="square">
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
                <div className="row">{arr}</div>
            </div>
        </div>
    );
}

export default App;