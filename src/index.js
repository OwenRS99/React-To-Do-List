import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import List from './List/List';
import ListItem from './ListItem/ListItem';

const App = () => {
  const [addedComponents, setAddedComponents] = useState([]);

  const addComponent = () => {
    setAddedComponents([...addedComponents, <ListItem key={addedComponents.length} />]);
  };

  return (
    <React.StrictMode>
      <Header />
      <Banner />
      <List add={addComponent} addedComponents={addedComponents} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
