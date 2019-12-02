import React, { Component } from 'react';
import Tile from './Tile';

class SelectedTileStack extends Component {
  defaultProps = {
    tiles: []
  }
  render() {
    const {tiles} = this.props;
    const list = tiles.map((t, i) => 
      (<Tile key = {t.kind + ':' + t.sequence + ':readonly:' + i} 
        type = {t.type}
        kind = {t.kind}
        sequence = {t.sequence}
        editable = {false}
      />)
      );
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default SelectedTileStack;