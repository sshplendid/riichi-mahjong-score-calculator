import React, { Component } from 'react';
import Tile from './Tile';

class HonorTiles extends Component {
  static defaultProps = {
    kind: 'Wind', // Wind, Dragon
  }
  


  render() {
    const {type, kind} = this.props;
    const range = kind === 'Wind' ? [...Array(4).keys()] : [...Array(3).keys()]
    const honorTiles = range.map(n =>
      (<Tile key={kind + ':' + n}
        type = "Honor"
        kind = {kind}
        sequence = {n}
      />) 
    );
    return (
      <div>
        {honorTiles}
      </div>
    );
  }
}

export default HonorTiles;