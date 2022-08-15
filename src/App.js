import React from 'react';
import styles from './App.module.css';
import Posts from './components/Posts';

function App() {
  
  return (
      <div className={styles.app}>
        <Posts />
      </div>
  );
}

export default App;
