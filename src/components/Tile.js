import React, { Component } from 'react';
import './Tile.css';
// import tiles from '../../public/tiles.jpg';

class Tile extends Component {
  state = {
    selected: false,
    count: 0,
  }
  static defaultProps = {
    type: 'Number', // Number, Honor
    kind: 'Character', // Character, Dot, Bamboo, Wind, Dragon
    sequence: 1,
  }
  
  tile = () => {
    const {type, kind, sequence} = this.props;
    if(!['Number', 'Honor'].includes(type)) {
      throw new Error('수패가 아님');
    }
    if(type === 'Number') {
      const kinds = ['Character', 'Bamboo', 'Dot'];
      if(sequence < 1 && sequence > 9) {
        throw new Error(`수패 범위 초과: ${sequence}`);
      }
      switch(kind) {
        case kinds[0]:
          return `${sequence} 만`;
        case kinds[1]:
          return `${sequence} 삭`;
        case kinds[2]:
          return `${sequence} 통`;
        default:
          throw new Error(`수패가 맞나? ${kind}`);
      }
    } else {
      // 자패
      const kinds = ['Wind', 'Dragon'];
      if(kind === kinds[0]) {
        // 바람
        const winds = ['동', '남', '서', '북']
        return winds[sequence];
      } else {
        const dragons = ['백', '발', '중']
        return dragons[sequence];
      }
    } 
  }
  handleIncrease = () => {
    const {selected, count} = this.state;
    if(selected && count === 4) {
      console.error('카운트는 최대값이 4이다.');
      return;
    }
    this.setState({
      selected: true,
      count: count + 1
    })
  }
  
  handleDecrease = () => {
    const {selected, count} = this.state;
    if(!selected && count === 0) {
      console.error('카운트는 0 이상이어야 한다.');
      return;
    }
    this.setState({
      selected: count === 1 ? false : true,
      count: count - 1
    })
  }
  render() {
    const tileName = this.tile();
    const count = this.state.count;
    return (
      <div class = "tile">
        <p>{tileName}</p>
        <span>{count}</span>
        <div>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
        </div>
      </div>
    );
  }
}

export default Tile;