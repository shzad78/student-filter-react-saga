import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Results extends Component {
  render() {

    let studentList;
    let filterList
    
    
    const { students } = this.props
    const {filter}= this.props
    
   
        
      
       
     
     
      studentList=students.map((item, i) => {

            return(
              
            <TableRow key={item.computerNumber}>
            <TableRowColumn>{item.studentHR.studentDetails.studentName}</TableRowColumn>
            <TableRowColumn>{item.studentHR.fatherDetails.fatherMobile}</TableRowColumn>
            <TableRowColumn>{item.studentHR.studentDetails.hafiz && 'Yes'}</TableRowColumn>
            </TableRow>
              
          )
          })

          filterList=filter.map((item, i) => {

            return(
              
            <TableRow key={item.computerNumber}>
            <TableRowColumn>{item.studentHR.studentDetails.studentName}</TableRowColumn>
            <TableRowColumn>{item.studentHR.fatherDetails.fatherMobile}</TableRowColumn>
            <TableRowColumn>{item.studentHR.studentDetails.hafiz && 'Yes'}</TableRowColumn>
            </TableRow>
              
          )
          })
        
     console.log("stuedent list is ", studentList)
    
    return(
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Student Name</TableHeaderColumn>
            <TableHeaderColumn>Father Ph #</TableHeaderColumn>
            <TableHeaderColumn>Hafiz</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} adjustForCheckbox = {false} >
           { studentList}
           { filterList}
          
        </TableBody>
      </Table>
    </div>);
    }
}
export default Results;
