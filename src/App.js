
import WelcomeScreen from './components/WelcomeScreen';
import Deck from './components/Deck';
import { useState } from 'react';



function App() {

  const [visibilityWelcomeScreen, setVisibilityWelcomeScreen] = useState("flex");
  const [visibilityDeck, setVisibilityDeck] = useState("none");

  function startDeck(){
    setVisibilityDeck("flex");
    setVisibilityWelcomeScreen("none");
  }

  return (
    <div className="App">
      <WelcomeScreen visibility={visibilityWelcomeScreen} startFunction={startDeck} />
      <Deck visibility={visibilityDeck} />
    </div>
  );
}

export default App;
