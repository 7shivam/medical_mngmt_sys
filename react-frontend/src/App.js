import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMedicalComponent from './components/ListMedicalComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMedicalComponent from './components/CreateMedicalComponent';
import UpdateMedicalComponent from './components/UpdateMedicalComponent';
import ViewMedicalComponent from './components/ViewMedicalComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListMedicalComponent}></Route>
                          <Route path = "/Medicals" component = {ListMedicalComponent}></Route>
                          <Route path = "/add-Medical/:id" component = {CreateMedicalComponent}></Route>
                          <Route path = "/view-Medical/:id" component = {ViewMedicalComponent}></Route>
                          {/* <Route path = "/update-Medical/:id" component = {UpdateMedicalComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
