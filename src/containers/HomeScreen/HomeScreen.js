import { Component, Fragment } from "react";

import classes from './HomeScreen.module.css';
import construction from '../../assets/images/construction.png';
import buildNewDeck from '../../assets/images/build-new-deck.png';
import crossedSwords from '../../assets/images/crossed-swords.png';
import editDeck from '../../assets/images/edit-deck.png';
import rules from '../../assets/images/rules.png';
import NavTile from '../../components/NavTile/NavTile';

class HomeScreen extends Component {

    state = {
        selectedTab: null,
        secondColumn: null,
    }

    findMatchHandler = () => {
        this.setState({
            selectedTab: 'matchmaking',
        });
        this.props.history.push('/battle');
    }

    createDeckHandler = () => {
        this.setState({
            selectedTab: 'deckBuilder',
            secondColumn: (
                <Fragment>
                    <NavTile
                        title='Modify Existing Deck'
                        description='Modify an already created deck'
                        /* replace with actual deck id*/
                        clicked={(deckId) => this.props.history.push(`/deck-builder/myDeckId2`)}
                        image={editDeck}
                        alt='Edit Deck'
                    />
                    <NavTile
                        title='Create New Deck'
                        description='Build a brand new deck'
                        clicked={() => this.props.history.push('/deck-builder')}
                        image={buildNewDeck}
                        alt='Create Deck'
                    />
                </Fragment>
            )
        });
    }

    readRulesHandler = () => {
        this.setState({
            selectedTab: 'rules',
        });
        this.props.history.push('/rules');
    }

    render() {

        return (
            <div className={classes.HomeScreen}>
                <div className={classes.HomeScreenColumn}>
                    <NavTile
                        active={this.state.selectedTab === 'matchmaking'}
                        title='Find Match'
                        description='Challenge another player to a battle'
                        clicked={this.findMatchHandler}
                        image={crossedSwords}
                        alt='Find Match'
                    />
                    <NavTile
                        active={this.state.selectedTab === 'deckBuilder'}
                        title='Deck Builder'
                        description='Create or Modify a Deck'
                        clicked={this.createDeckHandler}
                        image={construction}
                        alt='Build Deck'
                    />
                    <NavTile
                        active={this.state.selectedTab === 'rules'}
                        title='Rules'
                        description='Learn how to play'
                        clicked={this.readRulesHandler}
                        image={rules}
                        alt='Rules'
                    />
                </div>

                <div className={classes.HomeScreenColumn}>
                    {this.state.secondColumn}
                </div>
            </div>
        );
    }
}

export default HomeScreen;