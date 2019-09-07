import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider } from 'semantic-ui-react'
import InputComponent from './Components/InputComponent';

import './App.css';

function App() {
  return (
    <div>
      <Container textAlign='left'>Left Aligned</Container>
      <Container textAlign='center'>Center Aligned</Container>
      <Container textAlign='right'>Right Aligned</Container>
      <Container textAlign='justified'>
        <InputComponent/>
        <Divider />
      </Container>
    </div>
  );
}

export default App;
