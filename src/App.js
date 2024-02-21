import { Switch, Route } from 'react-router-dom';
import Home from './component/home';
import videoUpload from './component/videoupload'
import AnaDeArmas from './component/anaDeArmas';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/ana-de-armas/' component={AnaDeArmas}/>
      <Route exact path='/upload/'  component={videoUpload}/>
    </Switch>
  );
}

export default App;
