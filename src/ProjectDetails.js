import React from 'react';

import './ProjectDetails.css'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
class ProjectDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        info: {}
      };
    }
    componentDidMount() {
      fetch("https://api.github.com/users/aditya0072001/repos")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              info:result
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, info } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (  
      <TableContainer component="ProjectDetails">
      <Table className="PTable" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Project Name</StyledTableCell>
            <StyledTableCell align="right">Project Description</StyledTableCell>
            <StyledTableCell align="right">Project Link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((info) => (
            <StyledTableRow key={info.fork}>
              <StyledTableCell align="right">{info.name}</StyledTableCell>
              <StyledTableCell align="right">{info.description}</StyledTableCell>
              <StyledTableCell align="right">{info.html_url}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        );
      }
    }
  }
export default ProjectDetails;