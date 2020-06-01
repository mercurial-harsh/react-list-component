import React from 'react';
import Listcomp from './components/Listcomp';
import { Button } from '@material-ui/core';

function App() {

  const a=['harsh','sudhi','subhashree','twitter wala'];



  return (
    <div>

      <Listcomp title="list 1" lists={a} ></Listcomp>
      <br/>
      <div>
        <Button variant="contained" color="primary" on >
            ADD
        </Button>
      </div>
      <br>
      
      </br>

      <div>
        <Button variant="contained" color="primary">
          DELETE
        </Button>

        
      </div>
      <br/>
      <Listcomp title="list 2" lists={a}></Listcomp>
    </div>
  );
}

export default App;
