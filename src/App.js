import React from 'react';
import './App.css';
import ViewerProfile from "./containers/ViewerProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DetailsPageComponent
  from "./components/DetailsPage/DetailsPageComponent";

function App() {
  return (
      <ViewerProfile/>
  );
}

export default App;
