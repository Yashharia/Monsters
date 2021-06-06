import React from 'react';
import { Card } from '../card/card.component';

import './cards-list.styles.css';
export const CardsList = props => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>);
}

export default CardsList;