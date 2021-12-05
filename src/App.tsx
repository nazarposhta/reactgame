import React  from 'react';
import {
    Routes,
    Route,
    BrowserRouter,
    Navigate
} from "react-router-dom";
import Game from './components/Game/';
import Error404 from "./components/Error404/Error404";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/game" />} />
                <Route path="/game" element={<Game />}>
                    <Route path=":type" element={<Game />} />
                </Route>
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
