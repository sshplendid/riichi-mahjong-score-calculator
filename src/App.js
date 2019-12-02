import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NumberTiles from './components/NumberTiles';
import HonorTiles from './components/HonorTiles';
import SelectedTileStack from './components/SelectedTileStack';

class App extends Component {
  state = {
    tiles: [
    ]
  }

  handleIncrease = (tile) => {
    console.log(`handleIncrease: ${JSON.stringify(tile)}`)
    const {tiles} = this.state;
    const count = tiles.filter(t => {
      return t.type === tile.type
          && t.kind === tile.kind
          && t.sequence === tile.sequence;
    }).length;
    
    if(tiles.length >= 14 && count < 3) {
      console.error(` ㄴ 캉이 아니면 패를 14개 이상 가질 수 없습니다.`);
      return;
    }

    if(count === 4) {
      console.error(` ㄴ 같은 패를 4개 이상 선택할 수 없습니다.`)
      return;
    }
    
    this.setState({
      tiles: tiles.concat(tile)
    });
  }
  
  handleDecrease = (tile) => {
    console.log(`handleDecrease: ${JSON.stringify(tile)}`)
    const {tiles} = this.state;
    const count = tiles.filter(t => {
      return t.type === tile.type
          && t.kind === tile.kind
          && t.sequence === tile.sequence;
    }).length;
    
    if (tile.length === 0) {
      console.error(` ㄴ 선택한 패가 없을 때 뺄 수 없습니다.`);
      return;
    }
    if (count === 0) {
      console.error(` ㄴ 선택하지 않은 패를 뺄 수 없습니다.`);
      return;
    }
    
    let selectedTile = undefined;
    
    for(let i = 0; i < tiles.length; i++) {
      let t = tiles[i];
      if (t.type === tile.type
        && t.kind === tile.kind
        && t.sequence === tile.sequence) {
          console.log(`뺄거 찾음! ${JSON.stringify(t)}`);
          selectedTile = i;
          break;
        }
    }
    
    const filteredTiles = tiles.filter((t, i) => i !== selectedTile);

    this.setState({
      tiles: filteredTiles
    });
  }

  render() {
    const orderedTiles = this.state.tiles.sort((a, b) => `${a.kind}${a.sequence}` < `${b.kind}${b.sequence}`?-1:1);
    return (
      <div className="App">
        <header className="App-header">
          <h1>리치 마작</h1>
          <SelectedTileStack tiles = {orderedTiles} />
          <NumberTiles 
            onIncrease={this.handleIncrease} 
            onDecrease={this.handleDecrease} 
            kind = "Character" />
          <NumberTiles 
            onIncrease={this.handleIncrease} 
            onDecrease={this.handleDecrease} 
            kind = "Bamboo" />
          <NumberTiles 
            onIncrease={this.handleIncrease} 
            onDecrease={this.handleDecrease} 
            kind = "Dot" />
          <HonorTiles 
            onIncrease={this.handleIncrease} 
            onDecrease={this.handleDecrease} 
            kind = "Wind" />
          <HonorTiles 
            onIncrease={this.handleIncrease} 
            onDecrease={this.handleDecrease} 
            kind = "Dragon" />
        </header>
      </div>
    );
  }
}

export default App;
