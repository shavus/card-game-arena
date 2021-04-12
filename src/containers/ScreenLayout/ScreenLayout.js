import { Component } from "react";

import Toolbar from '../../components/Toolbar/Toolbar';

import classes from './ScreenLayout.module.css';

class ScreenLayout extends Component {
    render() {
        return (
            <div className={classes.ScreenLayout}>
                <Toolbar />
                <div className={classes.ScreenLayoutGameZoneBattlefield}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default ScreenLayout;