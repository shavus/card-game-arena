import Battlefield from '../../containers/Battlefield/Battlefield';
import ScreenLayout from '../../containers/ScreenLayout/ScreenLayout';

import classes from './Arena.module.css';

const Arena = () => (
  <div className={classes.Arena}>
    <ScreenLayout>
      <Battlefield />
    </ScreenLayout>
  </div>
);

export default Arena;
