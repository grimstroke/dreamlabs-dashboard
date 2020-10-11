import React from 'react';
import cx from 'classnames';
import styles from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={cx(styles.header)}>
      <Header />
    </div>
  );
}

export default App;
