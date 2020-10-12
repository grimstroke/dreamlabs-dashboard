import React from 'react';
import cx from 'classnames';
import styles from './App.module.scss';
import Header from './components/header/Header';
import DashboardHeader from './components/dashboard/DashboardHeader';

function App() {
  return (
    <div className={cx(styles.header)}>
      <Header />
      <DashboardHeader />
    </div>
  );
}

export default App;
