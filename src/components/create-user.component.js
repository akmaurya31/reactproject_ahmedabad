import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullname: '',
      email: '',
      mobile: '',
      jobs: '',

    }
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  
    

 HandleFields(ev) {
  // console.log('ffffffffffffffffffevevevev');
  //  console.log(ev);
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }
  


   


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    //axios.post('http://localhost:5000/products/add', user).then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Candidate</h3>
        <h5>Please enter Candidate details :</h5>
        <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
            <label>FullName: </label>
          

            <input name="fullname"  type="text"
                required
                className="form-control"
                value={this.state.fullname}
                onChange={this.HandleFields.bind(this)}
                />
          </div>






          <div className="form-group"> 
            <label>Email ID: </label>
          

            <input name="email"  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.HandleFields.bind(this)}
                />
          </div>

          <div className="form-group"> 
            <label>Mobile: </label>
          

            <input name="mobile"   type="text"
                required
                className="form-control"
                value={this.state.mobile}
                onChange={this.HandleFields.bind(this)}
                />
          </div>

          

          {/* <div className="form-group"> 
            <label>Username: </label>
          

            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div> */}




<div className="form-group"> 
 <label>Job Profile: </label>          
  <select name="jobs" className="form-control" onChange={this.HandleFields.bind(this)}>
  <option value="Developer">Developer</option>
  <option value="Desinger">Desinger </option>
  <option value="HR">HR</option>
  <option value="Accountant">Accountant</option>
  <option value="Manager">Manager</option>   
</select>
          </div>






          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}