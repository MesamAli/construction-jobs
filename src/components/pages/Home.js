import React from 'react';
import Item from '../Layout/Item';
import data from "../../Data/db.json";

const Home = () => {
    return (
        <div id="home">
            <div id="home-bg-cover">
                <div className="overlay">
                    <div className="overlay-text">
                        <h1>Construction Jobs Finder</h1>
                        <h2>Convenient Construction job search</h2>
                    </div>
                </div>
            </div>
            <div>
                <div id="jobs-container">
                    <div id="heading-container">
                        <h1>Current Jobs</h1>
                    </div>
                    { data && <Item jobs={ data.Jobs } /> }
                </div>
            </div>
        </div>
    );
}

export default Home;
