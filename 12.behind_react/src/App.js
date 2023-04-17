import React, { useState, useCallback } from 'react';
import Button from "./components/UI/Button/Button"
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setNewParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  const newParagraphHandler = useCallback(()=>{

    if(allowToggle) {

      setNewParagraph(showParagraph => !showParagraph)
    }
  },[allowToggle])
  console.log("app running");

  const allowToggleHandler = (props) =>{
    setAllowToggle((props)=>!props
    )
  }
// use callback se koristi kada zelimo da snimimo neku fju
//onakva kakva jest tj da mozemo koristi memo 
// callbak snima funkciju u memoriju i onda nakon sto rendereduje se
//komp nece ponovo napraviti funju
// dep ce dozvoliti da aok se sta promjeni u dep da ponovo rekreira fuu


//useMemo je u biti kao callbak al se koristi za sve ne samo za fje
// npr use memo koristi da snimimo sortiranje arraya da ne mora uvijek to raditi
// koritstimo usememo da wrapujemo i array koji sortiramo da ne bi ga ponovo pravio
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={newParagraphHandler}>Toogle paragraph</Button>
    </div>
  );
}

export default App;
