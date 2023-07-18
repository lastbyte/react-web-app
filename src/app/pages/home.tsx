import React, {useEffect} from "react";
import './styles/home.css';
import logo from '../../assets/images/logo.svg';
import {getPostById} from "../clients/placeholder";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {

    useEffect(() => {
        getPostById(1).then((response) => {
            console.log("use-effect from Home : ", response);
        });
        getPostById(2).then((response) => {
            console.log("use-effect from Home : ", response);
        });
    });

    return <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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