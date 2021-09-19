import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MyContext} from './contextAPI/MyProvider';
import {NavLink} from 'react-router-dom';

const Contacts = (props) => {
  return(
    <div className="contacts">
      <div className="page-title">
        <span>Contact</span> List
      </div>
      <div id="cards">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              {(context.state.contacts.length !== 0) ? context.state.contacts.map((contact) => (
                <div className="card" key={contact.id}>
                  <div className="card-header">
                    <div className="contact-name truncate">{contact.name}</div>
                    <div className="card-actions">
                      <NavLink className="navlink" to={'/edit/' + contact.id} action="Add">
                        <div><FontAwesomeIcon icon="edit" color="black"/></div>
                      </NavLink>
                      <div><FontAwesomeIcon icon="trash" color="red" onClick={() => context.deleteContact(contact.id)}/></div>
                    </div>
                  </div>
                  <div className="contact-email">
                    <span>Email : </span>
                    <div className="truncate">{contact.email}</div>
                  </div>
                  <div className="contact-mobileNumber"><span>Mobile : +91</span>{contact.mobile}</div>
                </div>
              )):
                <div className="no-contact-msg">No Contacts.</div>
              }
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    </div>
  )
};

export default Contacts;