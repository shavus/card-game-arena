import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Battlefield from '../../containers/Battlefield/Battlefield';
import DeckBuilder from '../../containers/DeckBuilder/DeckBuilder';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import Rules from '../../containers/Rules/Rules';
import ScreenLayout from '../../containers/ScreenLayout/ScreenLayout';

import classes from './Arena.module.css';

const Arena = () => (
  <div className={classes.Arena}>
    <ScreenLayout>
      <BrowserRouter>
        <Switch>
          <Route path='/battle' component={Battlefield} />
          <Route path='/deck-builder/:deckId' component={DeckBuilder} />
          <Route path='/deck-builder' component={DeckBuilder} />
          <Route path='/home' component={HomeScreen} />
          <Route path='/rules' component={Rules} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ScreenLayout>
  </div>
);

export default Arena;
