import React, {Component} from 'react';
import uniqid from 'uniqid';

// first we will make a new context
const MyContext = React.createContext({});

// Then create a provider Component
class MyProvider extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    let myData = localStorage.getItem('contacts');
    if (myData) {
      this.setState({
        contacts: JSON.parse(myData)
      })
    }
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        addContact: (name, email, mobile) => {
          console.log(`${name} , ${email}, ${mobile}`);
          this.setState((prevState, props) => {
              contacts: prevState.contacts.unshift({id: uniqid(), name, email, mobile})
            },
            () => {
              localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
            }
          )
        },
        updateContact: (id, name, email, mobile) => {
          let myData = JSON.parse(localStorage.getItem('contacts'));
          if (myData) {
            myData.forEach((contact) => {
              if (contact.id === id) {
                contact.name = name;
                contact.email = email;
                contact.mobile = mobile;
                this.setState({
                  contacts: myData
                });
                localStorage.setItem('contacts', JSON.stringify(myData));
              }
            })
          }
        },
        deleteContact: (id) => {
          let myData = JSON.parse(localStorage.getItem('contacts'));
          if (myData) {
            myData.forEach((contact, index) => {
              if (contact.id === id) {
                myData.splice(index,1);
                this.setState({
                  contacts: myData
                });
                localStorage.setItem('contacts', JSON.stringify(myData));
              }
            })
          }
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {
  MyProvider,
  MyContext
};
