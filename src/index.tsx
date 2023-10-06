import App from "./app/App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    root);