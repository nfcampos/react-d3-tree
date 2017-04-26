import React from 'react';
import { render } from 'react-dom';

import Tree from '../../src';

import data from './data';

let Demo = class extends React.Component {
  render() {
    return (
      <div>
        <h1>react-d3-tree Demo</h1>
        <Tree data={data} node={<circle r={5} />} />
      </div>
    );
  }
};

render(<Demo />, document.querySelector('#demo'));
