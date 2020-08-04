import React from 'react';
import './App.css';
import Game from './components/game/Game';

function App(props) {
  const catsOfPrey = {
      name: 'Cats of Prey',
      logoSrc: 'https://balladeer.files.wordpress.com/2010/09/academyofarturbanknights.jpg'
  }
  const birdsOfWar = {
      name: 'Birds of War',
      logoSrc: 'https://www.logolynx.com/images/logolynx/2d/2d3f515fd4452cbd01c18e0fb6149eb2.jpeg'
  }
  const flamingComets = {
      name: 'Flaming Comets',
      logoSrc: 'https://www.kindpng.com/picc/m/171-1716100_cool-gaming-logo-png-unused-cool-youtube-logos.png'
  }
  const ghastlyEntities = {
      name: 'Ghastly Entities',
      logoSrc: 'https://www.kindpng.com/picc/m/184-1841157_gfx-logo-mascotlogo-mascot-gaming-banner-youtube-mascot.png'
  }
  return (
      <div className='App'>
          <Game
              venue='Madison Square Garden'
              homeTeam={catsOfPrey}
              visitingTeam={birdsOfWar}
          />
          <Game
              venue='Qudos Bank Arena'
              homeTeam={flamingComets}
              visitingTeam={ghastlyEntities}
          />
      </div>
  )
}

export default App;
