import classes from './App.module.css';
import classes2 from './lightmode.module.css'
import Navigation from './components/UI/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skills';
import Projects from './pages/Projects';
import { useState } from 'react';

function App() {

  const [isDark, setIsDark] = useState(true)

  function switchMode(){
    console.log(isDark)
    setIsDark(!isDark)
  }
  return (
    <div className={!isDark ? classes.lightMode : classes.App}>
      <Navigation switchMode={switchMode} />
      {/* <Route path='/'>
        <Redirect to='/home' />
      </Route> 
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/skills'>
        <Skill />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route> */}

      <Home />
      <About />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
