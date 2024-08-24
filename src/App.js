
import React from 'react';
import { Provider } from 'react-redux';
import store from './Component/store';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
