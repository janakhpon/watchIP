import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider } from 'semantic-ui-react'
import InputComponent from './Components/InputComponent';
import LatLonComponent from './Components/LatLonComponent';

import './App.css';

function App() {
  return (
    <div>
      <div style={{height:30}}></div>
      <Container textAlign='justified'>
        <InputComponent/>
        <Divider />
        <LatLonComponent/>
      </Container>
    </div>
  );
}

export default App;
