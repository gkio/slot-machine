import * as React from 'react';
import './style.scss'

interface PlayBtnProps {
  onClick: () => void, // Change the required prop to an optional prop.
}


export const PlayBtn: React.SFC<PlayBtnProps> = ({onClick}) =>  (
  <button className="play-btn" onClick={onClick}>
    Play
  </button>
);


