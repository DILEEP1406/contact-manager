import React from 'react';
import {MyContext} from './contextAPI/MyProvider';

class Form extends React.Component{

  state = {
    id:'',
    name : '',
    email: '',
    mobile: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (event, context) =>{
    event.preventDefault();
    if(this.props.action === "Add") {
      context.addContact(this.state.name, this.state.email, this.state.mobile);
    }else{
      context.updateContact(this.state.id, this.state.name, this.state.email, this.state.mobile);
    }
    this.props.history.push('/');
  };

  componentDidMount(){
    if(this.props.id){
      let id = this.props.id;
      if(id){
        let myData = JSON.parse(localStorage.getItem('contacts'));
        if(myData){
          myData.forEach((contact) => {
            if(contact.id === id){
              this.setState({
                id,
                name: contact.name,
                email: contact.email,
                mobile: contact.mobile
              })
            }
          })
        }else{
          this.props.history.push('/');
          window.location.reload();
        }
      }
    }
  }

  render(){
    return(
      <div className="form">
        <div className="page-title">
          <span>{this.props.action}</span> Contact
        </div>
        <MyContext.Consumer>
          {(context) => (
            <form onSubmit={(event) => this.handleSubmit(event,context)}>
              <label htmlFor="name"><b>Name</b></label>
              <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange('name')} pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." required/>
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange('email')} pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" title="Require a valid Email." required/>
              <label htmlFor="mobile"><b>Mobile</b></label>
              <input type="text" name="mobile" placeholder="Enter Mobile Number" value={this.state.mobile} onChange={this.handleChange('mobile')} pattern="[0-9]{10}" title="Mobile Number Must be 10 digit Number." required/>
              <input type="submit" value={this.props.action}/>
            </form>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
};

export default Form;