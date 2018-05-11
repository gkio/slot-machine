import * as React from 'react';
import './style.scss'

type HeaderState = {
    value: string;
    chanceIsSet: boolean;
}

type HeaderProps = {
    changeChanceOfWinning: () => void;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    state = {
        value: '50',
        chanceIsSet: false,
    };

    inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const re = /^([0-9]|[1-9][0-9]|100)$/;
        const {currentTarget: {value}} = e;

        if (value == '' || re.test(value)) {
            this.setState({value})
        }
    };

    changeChanse = () => {
        const {value} = this.state;
        const {changeChanceOfWinning} = this.props;
        if (value) {
            this.setState(
                {chanceIsSet: true},
                () => changeChanceOfWinning()
            )
        }
    }

    render() {
        const {value, chanceIsSet} = this.state;
        return (
            <div className="header">
                <h1 className="header_label">Slot Machine</h1>
                {chanceIsSet ? (
                    <div className="header_block">Chanse is set to {value}%</div>
                ) : (
                    <div className="header_block">
                        <div className="header_block_wrapper">
                        <span className="header_block_wrapper-label">
                            Set a chance to win
                        </span>
                            <input onChange={this.inputOnChange} value={value} className="header_block_wrapper-input"
                                   type="text"/>
                        </div>
                        <div className="header_block-btn" onClick={this.changeChanse}>
                            <button>Set</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

