import React from 'react';
import s from './App.module.scss';
import UsersContainer from './Components/UsersContainer';

function App() {
  return (
    <div >
      <div className={s.Info}>Info</div>
      <UsersContainer />
    </div>
  );
}

export default App;
