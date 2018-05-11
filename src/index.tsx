import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {SlotFactory} from './store';
import {Header} from '@Components/Header';
import {Modal} from '@Components/Modal';
import {Wheel} from '@Components/Wheel';
import {PlayBtn} from '@Components/Play';
import './main.scss';

@observer
class App extends React.Component<{ appState: SlotFactory }, {}> {
    state = {
        spin: false,
        modalVisible: false,
    };

    toggleSpin = () => {
        this.setState(({spin}) => {
            return ({spin: !spin});
        });
    }

    animationEnd = () => {
        this.toggleSpin();
        this.toggleModalVisibility();
        this.props.appState.getNumbers();
    }

    toggleModalVisibility = () => {
        this.setState(({modalVisible}) => {
            return ({modalVisible: !modalVisible});
        });
    }

    render() {
        const {wheels, won, changeChanceOfWinning} = this.props.appState;
        const {spin, modalVisible} = this.state;
        return (
            <div>
                <div className="wrapper">
                    <Header changeChanceOfWinning={changeChanceOfWinning}/>
                    <Wheel wheels={wheels} animationEnd={this.animationEnd} spin={spin}/>
                    <PlayBtn onClick={this.toggleSpin}/>
                </div>
                <Modal toggleModalVisibility={this.toggleModalVisibility} visible={modalVisible} isWon={won}/>
                <DevTools/>
            </div>
        );
    }
};

const appState = new SlotFactory();

ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));
