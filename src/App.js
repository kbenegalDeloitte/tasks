import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <Authenticator>
  		  {({ signOut, user }) => (
  			<main>
  			  <h1>Hello {user.username}</h1>
  			  <button onClick={signOut}>Sign out</button>
  			</main>
  		  )} 
  		</Authenticator>
    </div>
    
  );
}

export default App;