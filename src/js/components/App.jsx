import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Search';
import * as actions from '../actions';

export class App extends React.Component {
  

  

  render() {
    const { data, isLoading, error } = this.props;

    return (
      
      
      <MuiThemeProvider>
        <div className="app">
       
       <Search/> 
       </div>
       </MuiThemeProvider>
        
      
    );
  }
}



export default App;
