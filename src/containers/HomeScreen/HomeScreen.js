import { Component, Fragment } from "react";

import construction from '../../assets/images/construction.png';
import crossedSwords from '../../assets/images/crossed-swords.png';
import rules from '../../assets/images/rules.png';
import NavTile from '../../components/NavTile/NavTile';

class HomeScreen extends Component {

    findMatchHandler = () => {
        this.props.history.push('/battle');
    }

    createDeckHandler = () => {
        this.props.history.push('/deck-maker');
    }

    readRulesHandler = () => {
        this.props.history.push('/rules');
    }

    render() {
        return (
            <Fragment>
                <NavTile
                    title='Find Match'
                    description='Challenge another player to a battle'
                    clicked={this.findMatchHandler}
                    image={crossedSwords}
                    alt='Find Match'
                />
                <NavTile
                    title='Deck Builder'
                    description='Build a new deck'
                    clicked={this.createDeckHandler}
                    image={construction}
                    alt='Build Deck'
                />
                <NavTile
                    title='Rules'
                    description='Learn how to play'
                    clicked={this.readRulesHandler}
                    image={rules}
                    alt='Rules'
                />
            </Fragment>
        );
    }
}

export default HomeScreen;