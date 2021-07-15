import React from "react";
import ReactDOM from "react-dom";
import Uhook from "./THA-19/Button";

const Buttons = () => {
    return (
        <div>
            <h2>Buttons</h2>
            <Uhook />
            <Uhook />
            <Uhook />

        </div>
    );
};



ReactDOM.render(<Buttons />, document.getElementById("root"));