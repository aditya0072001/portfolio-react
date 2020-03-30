import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ProjectDetails.css'

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
      <List component="nav" aria-label="main mailbox folders" className="ListP">
      {info.map(info => (
        <ListItem dense selected autoFocus alignItems divider key={info.frok}>
          <ListItemText className="ListI" primary={info.name} /> <br/><br/><br/>
          <ListItemText className="ListI" primary={info.description} /> <br/><br/> <br/>
          <ListItemText className="ListI" primary={info.html_url} /> <br/><br/><br/>
        </ListItem>
      ))}        
      </List>
        );
      }
    }
  }
export default ProjectDetails;