import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Battlefield from '../../containers/Battlefield/Battlefield';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import ScreenLayout from '../../containers/ScreenLayout/ScreenLayout';

import classes from './Arena.module.css';

const Arena = () => (
  <div className={classes.Arena}>
    <ScreenLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/battle' component={Battlefield} />
          <Route home='/home' component={HomeScreen} />
          <Route home='/' component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ScreenLayout>
  </div>
);

export default Arena;
