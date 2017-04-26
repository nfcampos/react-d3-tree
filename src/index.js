import React, { Component, Children, cloneElement } from 'react';
import { stratify, tree } from 'd3-hierarchy';

function Node({ children, x, y }) {
  return cloneElement(Children.only(children), { x, y });
}

class Tree extends Component {
  render() {
    const layout = tree().size([300, 150]);
    const root = stratify()(this.props.data);

    tree(root);

    return (
      <svg viewBox="-150 -75 300 150" height={150} width={300}>
        {root.descendants().map(
          node =>
            console.log(node) ||
            cloneElement(this.props.node, {
              key: node.id,
              cx: node.depth * 30,
              cy: node.height * 30
            })
        )}
      </svg>
    );
  }
}

Tree.Node = Node;

export default Tree;
