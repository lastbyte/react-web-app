import React from "react";
import '@pages/styles/home.css';
import {Link} from "react-router-dom";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return <>
        <div className="App">
            <header className="App-header">
                <Link to="counter" className="App-link">Counter App Example</Link>
                <p>
                    Edit <code>src/app/pages/home.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/lastbyte/react-web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React.js scaffold project
                </a>
            </header>
        </div>
    </>;
}

export default Home;