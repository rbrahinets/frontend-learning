import React, { useState } from 'react';
import Athlete from './Athlete';
import { observer } from 'mobx-react';

interface Props {
    athlete: Athlete;
}

const TradeForm = ({ athlete }: Props) => {
    const [teamName, setTeamName] = useState<string>('');

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Team name..."
                onChange={(e) => setTeamName(e.target.value)}
            />
            <span>
                <button
                    type="button"
                    onClick={() => athlete.tradePlayer(teamName)}
                >
                    Trade
                </button>
            </span>
        </React.Fragment>
    );
};

export default observer(TradeForm);
