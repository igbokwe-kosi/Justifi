
import React from 'react';

function WelcomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>WELCOME TO JUSTIFI</h1>
      <h3 style={styles.subHeader}> {/* Add descriptor text here */} </h3>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>ASK JURIS</button>
        <button style={styles.button}>ASK CONSULTANT</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '3rem',
    margin: '20px 0',
  },
  subHeader: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    width: '150px',
  }
};

export default WelcomePage;
