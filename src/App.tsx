import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Resume, { IResumeProps } from './components/resume';
import * as React from 'react';
import props from './localConfig.json';

const Button = styled.button`
  font-size: 1rem;
  height: 2em;
  min-width: 10ch;
  padding-inline: 2ch;
  border: #283E5C solid 1px;
  border-radius: 1ch;
  background-color: #A4BBDB;
  transition: all ease 0.4s;
  :hover {
    background-color: #AEC6E8;
    box-shadow: 0 0 20px #AEC6E8;
  }
  :active {
    transition: all 0.1s;
    background-color: #73849C;
  }
`
const Footer = styled.footer`
  position: fixed;
  left: 0.5ch;
  bottom: .75rem;
  display: flex;
  flex-direction: row;
  > * {
    margin-inline: 1ch;
  }
`
const Viewport = styled.main`
  display: block;
  scale: 0.6;
`

function App() {
  const [state, set] = useState(0);
  let $props = props as IResumeProps;

  return (
    <div className="App">
      <Viewport><Resume {...$props} /></Viewport>
      <Footer>
        <Button onClick={() => set(state + 1)}>跳过 {state}</Button>
        <Button>暂停</Button>
      </Footer>
    </div>
  );
}

export default App;
