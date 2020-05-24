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
      <div className="lol">Email : adityatripathi2001@outlook.com</div>
      <br></br>
      <div className="lol">Phone : +91-7667553607</div>
      <br/><br/>
      <pre><code>Made with  <code className="heart"></code> and React.js</code></pre>
      </div>
      )
  }
}

export default Contact;