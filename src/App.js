import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faAngleRight, faAngleLeft, faTag } from '@fortawesome/free-solid-svg-icons'

import ResponsiveLayout from './components/ResponsiveLayout';

library.add(faStar, faAngleRight, faAngleLeft, faTag)

class App extends Component {
  render() {
    return (
      <ResponsiveLayout/>
    );
  }
}

export default App;
