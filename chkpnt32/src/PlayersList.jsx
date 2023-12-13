

import React from 'react';
import Player from './player'; 
import playersData from './players'; 

const PlayersList = () => {
  return (
    <div className='playerList' >
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
