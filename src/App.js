import Stats from './components/Stats';
import CountrySelector from './components/CountrySelector';
import { createGlobalStyle } from 'styled-components';
import './App.css';


const GlobalStyle = createGlobalStyle `
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    
    <div className="App">
    <GlobalStyle />
      <header className="App-header">
</header>
<main className="App-main">
      
<Stats url="https://covid19.mathdro.id/api"></Stats>
<CountrySelector></CountrySelector>
        </main>
    </div>
  );
}

export default App;
