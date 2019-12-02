import React, { Component } from 'react';
import Tile from './Tile';

class NumberTiles extends Component {
  static defaultProps = {
    kind: 'Character', // Character, Dot, Bamboo
  }
  range = [...Array(9).keys()].map(n => n+1)
  render() {
    const {kind, onIncrease, onDecrease} = this.props;
    const numberTiles = this.range.map(n => 
      (<Tile key={kind+':'+n}
        type = "Number"
        kind = {kind}
        sequence = {n}
        onIncrease={onIncrease} 
        onDecrease={onDecrease} 
      />)
    );
    return (
      <div>
        {numberTiles}
      </div>
    );
  }
}

export default NumberTiles;