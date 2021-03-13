import NavigationBar from './components/NavigationBar'
import Calendar from './components/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';


export default function App() {
  return (
    <>
      <NavigationBar />
      <h1 align='center'> Let's Achieve Something Together Today</h1>
      <Switch>
        <Route path='/calendar' component={Calendar}/> 
      </Switch>

    </>
  );
}
