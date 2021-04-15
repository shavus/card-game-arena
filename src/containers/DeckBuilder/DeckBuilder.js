import { Component } from "react";

import CardEditor from '../../components/CardEditor/CardEditor';
import classes from './DeckBuilder.module.css';
import DeckListEditor from '../../components/DeckListEditor/DeckListEditor';

class DeckBuilder extends Component {

    state = {
        card: {
            atk: 2,
            cost: 2,
            def: 2,
            name: 'Fighter Name',
            renown: 2,
            skills: [],
        },
        deckId: null,
    }

    componentDidMount() {
        if (this.props.match.params.deckId) {
            this.setState({
                deckId: this.props.match.params.deckId,
            });
        }
        console.log(this.props);
    }

    render() {
        return (
            <div className={classes.DeckBuilder}>   
                <CardEditor card={this.state.card} />
                <DeckListEditor deckId={this.state.deckId}/>
            </div>
        );
    }
}

export default DeckBuilder;