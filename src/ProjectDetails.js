import React from 'react';

class ProjectDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        info: [],
      };
    }
    ProjectDetails() {
      fetch("https://api.github.com/users/aditya0072001/repos")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              info:result.data,
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
          <ul>
            {info.map(info => (
              <li key={info.forks}>
                {info.description} {info.html_url}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default ProjectDetails