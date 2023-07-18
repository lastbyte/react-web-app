import React from "react";
import './styles/home.css';
import Counter from "../components/counter";
import {Link} from "react-router-dom";

interface HomeProps {

}

const CounterApp: React.FC<HomeProps> = (props: HomeProps) => {
    return <>
        <div className="App">
            <header className="App-header">
                <Counter/>
                <p>
                    Edit <code>src/app/components/counter.tsx</code> and save to reload.
                </p>
                <Link
                    className="App-link"
                    to="/"
                >
                    Back To Home
                </Link>
            </header>
        </div>
    </>;
}

export default CounterApp;