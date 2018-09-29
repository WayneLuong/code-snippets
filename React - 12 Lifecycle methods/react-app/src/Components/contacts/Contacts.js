import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
            /* pulled from value in context.js */
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className='mb-2 display-4'><span className='text-danger'>
                Contact</span> List</h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
