import React, { useState, useEffect } from 'react';

const BotList = () => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        // Fetch bot data from the server
        fetch('http://localhost:0/bots')
            .then(response => response.json())
            .then(data => {
                setBots(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

    return (
        <div>
            <h2>Bot List</h2>
            <ul>
                {bots.map(bot => (
                    <li key={bot.id}>{bot.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BotList;

