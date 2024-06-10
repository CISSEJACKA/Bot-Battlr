import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
      ))}
    </div>
  );
};

export default BotCollection;
