import React from "react";
import './styles/home.css';
import logo from '../../assets/images/logo.svg';

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
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