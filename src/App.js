import React from 'react';
import cx from 'classnames';
import styles from './App.module.scss';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className={cx(styles.header)}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
