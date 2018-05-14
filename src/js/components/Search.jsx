import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { withStyles } from 'material-ui/styles';
import { func, shape, arrayOf, string, bool, any } from 'prop-types';
import Results from "./Results";
import * as actions from "../actions";
import { connect } from "react-redux";

class Search extends Component {
  static propTypes = {
    getStudents: func.isRequired,
    data: arrayOf(any).isRequired,    
    error: shape({
      message: string
    })
  };

  static defaultProps = {
    error: null
  };
  state = {
    studentName: "",
    fatherPh: ""
   
  };

  

  onAmountChange = (e, index, value) => {
    this.setState({ num: value });
  };
  render() {
    console.log("this is data from search", this.props.data);
    console.log("this is filter from search", this.props.filter);
    

    return (
      <div>
        
        <TextField
          id="student-name"
          label="Student Name"
          placeholder="Student Name"
          className={this.state.studentName}
          margin="normal"
          value={this.state.studentName}
          onChange={e => {
            this.setState({ studentName: e.target.value })
                        }}
          
        />

         <TextField
          id="father-ph"
          label="Father Ph"
          placeholder="Father Ph"
          className={this.state.fatherPh}
          margin="normal"
          value={this.state.fatherPh}
          onChange={e => {
            this.setState({ fatherPh: e.target.value })
                        }}
          
        />
        
        <br />



        <button
          onClick={() => {
            this.props.getStudents();
          }}
        >
          Load  
        </button>
        
        <button
          onClick={() => {
            this.props.getFilter(this.state);
          }}
        >
          Filter  
        </button>

        <br />
        
          <Results
             students ={this.props.data} 
            filter= {this.props.filter}


          
          />
        
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data.data,
    filter: state.filter.data
  };
}
export default connect(mapStateToProps, { getStudents: actions.fetchData, getFilter: actions.fetchFilter })(Search);
