import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      {army.map(bot => (
        <BotCard key={bot.id} bot={bot} handleClick={() => releaseBot(bot)} handleDelete={() => dischargeBot(bot)} />
      ))}
    </div>
  );
};

export default YourBotArmy;
