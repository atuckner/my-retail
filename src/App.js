import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleLeft, faTag } from '@fortawesome/free-solid-svg-icons'

import ResponsiveLayout from './components/ResponsiveLayout';

library.add(faAngleRight, faAngleLeft, faTag)

class App extends Component {
  render() {
    return (
      <ResponsiveLayout/>
    );
  }
}

export default App;
