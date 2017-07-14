import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';

import configureStore from './configureStore';



class App extends PureComponent {
  state = {
    isLoading: true,
    store: configureStore(() => this.setState({ isLoading: false })),
  };

  render() {
    return (
      <Provider store={this.state.store}>
        <Home />
      </Provider>
    )
  }
}
export default App;
