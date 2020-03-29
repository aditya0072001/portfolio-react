import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="Dcontact">
      <br/>
      <div className="ct">Contact Me</div><br/>
      Email:adityatripathi2001@outlook.com
      <br></br>
      <code>Phone : +91 7667553607</code>
      <br/><br/>
      <pre><code>Made with  <div className="heart"></div>   and React.js</code></pre>
      </div>
      )
  }
}

export default Contact;