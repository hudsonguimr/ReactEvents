import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global'
import Header from './components/Header'

const App: React.FC = () => (
  <>
    <Header/>
    <Dashboard/>

    <GlobalStyle />
  </>

)

export default App;

