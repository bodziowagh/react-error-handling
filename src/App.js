import React from 'react';
import './App.css';
import { ErrorHandlerWrapper } from "./components/error-handler-wrapper";
import { SampleErrorProne } from './components/sample-error-prone';

function App() {
  return (
    <div className="App">
        <ErrorHandlerWrapper name="top level wrapper" >
          <ErrorHandlerWrapper name="lower level wrapper" >
            <SampleErrorProne />
          </ErrorHandlerWrapper>
        </ErrorHandlerWrapper>
    </div>
  );
}

export default App;
