import * as React from 'react';
import './style.scss'

type WheelProps = {
    animationEnd: () => void,
    wheels: Array<Array<Number>>,
    spin: Boolean,
}

export class Wheel extends React.Component<WheelProps, {}> {

    ref: HTMLDivElement;
    componentDidMount() {
        const {animationEnd} = this.props;
        const el: HTMLDivElement  = this.ref;
        el.addEventListener(
            'animationend',
            () => {
                setTimeout(animationEnd,500)
            }
        )
    }

    render() {
        const {wheels, spin} = this.props;
        return (
            <div className="wheel">
                <div className="wheel-wrapper">
                    {wheels.map((_wheels, idx) => (
                        <div className="wheel-joins" key={idx}>
                            {_wheels.map((wheel, index) => (
                                <div ref={ref => (idx === 0 && index === 0) && (this.ref = ref)}
                                     className={spin ? 'animate' : ''} key={index}>{wheel}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

