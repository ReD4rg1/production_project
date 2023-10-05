import App from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root);