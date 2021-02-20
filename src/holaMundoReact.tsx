import React from "react";
import ReactDOM from "react-dom";

const currentDate: string = new Date().toDateString();  
const apiBase: string= `${process.env.API_BASE}`;

ReactDOM.render(
    <h1>Hola Mundo con React</h1>,
    document.getElementById("holaMundoReact")
);

ReactDOM.render(
    <span>
        
    </span>,
    document.getElementById("currentDate")
);

ReactDOM.render(
    <span>
        {currentDate}
    </span>,
    document.getElementById("currentDate")
);

ReactDOM.render(
    <span>
        {apiBase}
    </span>,
    document.getElementById("apiBase")
);