import React from 'react';

const BotCard = ({ bot, handleClick, handleDelete }) => {
  return (
    <div onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <button onClick={(e) => {
        e.stopPropagation();
        handleDelete(bot);
      }}>x</button>
    </div>
  );
};

export default BotCard;
