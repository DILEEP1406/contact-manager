import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Routes from './components/routes/Routes';
import {MyProvider} from "./components/contextAPI/MyProvider";

library.add(faTrash, faEdit, faHome, faPlus, faQuestion);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Routes/>
        </MyProvider>
      </div>
    );
  }
}

export default App;
