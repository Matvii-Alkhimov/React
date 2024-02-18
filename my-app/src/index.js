import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App/App';
// import user from "./user.json";
// import { Profile } from './components/Additional-Task/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        {/* <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        ></Profile> */}
    </>
);

