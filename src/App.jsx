import React from 'react';
// import './App.css';
import Header from "./Components/Header/Header";
import RouterSetup from "./Routes/RoutesSetup.jsx";

function App() {
  return (
    <div className="App">
          <Header />
          <RouterSetup />
    </div>
  );
}

export default App;
