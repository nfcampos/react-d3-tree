import React, { Component, Children, cloneElement } from 'react';
import { stratify, tree } from 'd3-hierarchy';

function Node({ children, x, y }) {
  return cloneElement(Children.only(children), { x, y });
}

class Tree extends Component {
  render() {
    const { height, width, margin } = this.props;

    const layout = tree().size([200, 400]);
    const root = stratify()(this.props.data);

    layout(root);

    return (
      <svg height={height + margin * 2} width={width + margin * 2}>
        <g transform={`translate(${margin}, ${margin})`}>
          {root.descendants().map(node =>
            cloneElement(this.props.node, {
              key: node.id,
              cx: node.y,
              cy: node.x
            })
          )}

          {root.links().map(link =>
            cloneElement(this.props.link, {
              key: link.source.id + link.target.id,
              x1: link.source.y,
              y1: link.source.x,
              x2: link.target.y,
              y2: link.target.x
            })
          )}
        </g>
      </svg>
    );
  }
}

Tree.Node = Node;

export default Tree;
