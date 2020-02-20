import React, { useState } from 'react';
import { } from 'date-fns';

import { Container, Timer, Button, Form, Clock } from './styles';

export default function Main() {

  const [time, setTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerController, setTimerController] = useState('');

  function handlePause(){
    clearInterval(timerController);
    setTimerStarted(false);

  }

  function handleStart(){
    setTimerStarted(true);
      let x = time;
      const id = setInterval(() => {
        x += 1;
        setTime(x);
        
      }, 1000);
  
      setTimerController(id);
  }

  function handleSave(){

  }

  return (
    <Container>
      <Timer>
        <Clock>{time}</Clock>
        {timerStarted 
            ? <Button onClick={handlePause}>Pause</Button>
            : <Button onClick={handleStart}>{time>0 ? 'Continue' : 'Start'}</Button>
        }
      </Timer>
      
      <Form show={!timerStarted && time>0}>
        <input type="text" placeholder="Name"></input>
        <strong>Time Spend on the task: {time} </strong>
        <Button onClick={handleSave}>Save in history</Button>
      </Form>
    </Container>
  );
}
