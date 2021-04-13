import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div>
            <div className="left-home">
                <h1>Recipe Ready</h1>
                <h2>
                    Cooking your favorite recipes has never been easier...
                    Go from gathering ingredients to cooking meals in no time!
                </h2>
                <Link to="/inventory"><button id="start">Get Started!</button></Link>
            </div>
            <div className="right-home">
            </div>
        </div>
    );
};

export default Home;
