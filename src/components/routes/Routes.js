import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './../Navbar';
import Contacts from './../Contacts';
import Form from './../Form';
import About from './../About';


const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/add" render={(props) => (
          <Form action="Add" history={props.history}/>
        )}/>
        <Route exact path="/edit/:id" render={(props) => (
          <Form action="Update" id={props.match.params.id} history={props.history}/>
        )}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;