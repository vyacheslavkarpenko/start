import React, { Component } from 'react';
const head = <h1>View header</h1>
class View extends Component {
  render() {
    return (
      <div>
        {head}
          <p>
              This is View component rendered inside view 
          </p>
      </div>
    );
  }
}

export default View;