import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditCandidate extends Component {
  constructor(props) {
    console.log('LC 1 Stage');

    super(props);

    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeJobs = this.onChangeJobs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   //LC 1 stage State is blank
    this.state = {
      fullname: '',
      email: '',
      mobile: 0,
      jobs: '',
      others:'',
      relocate:'',
      intrested:'',
      candidatearray: []
    }
  }

  componentDidMount() {
    console.log('LC 2 Stage');
    //LC 2 stage State will be will be monogdb axois
    axios.get('http://localhost:5000/candidates/'+this.props.match.params.id)
      .then(response => {  
        let chk_others;
        response.data.others ? chk_others  = response.data.others : chk_others = {}

        //others:{ intrested: response.data.others.intrested, relocate: response.data.others.relocate}       


        this.setState({
          fullname: response.data.fullname,
          email: response.data.email,
          mobile: response.data.mobile,
          jobs: response.data.jobs,
          others:chk_others
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/candidates/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {   
        console.log(error);
      })

  }

  //Second way of define all change method for using element in form

  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    })
  }

  onChangeJobs(jobs) {
    this.setState({
      jobs: jobs.target.value
    })
  }

  toggleChange(eot) {
    
     
    //console.log(eot);
   
    // for (let i = 1; i < this.state.options.length; i++) {
    //   let value = this.state.options[i].value;
    //   this.refs[value].getDOMNode().checked = true;
    // }


    // let intrested = eot.target.value;
    let insarry=[];
    // console.log(insarry);
    
    // intrested.forEach(intrested => {
    //    if (intrested.value === eot.target.value)
    //    intrested.isChecked =  eot.target.checked
    // })
    // let checkArray = [];
    // for (var key in this.state) {
    //   if (this.state[key] === true) {
    //     checkArray.push(key);
    //   }
    // }

     

    this.setState({
      intrested: eot.target.value
     
    })
  }


  // setGender(event) {
  //   console.log(event.target.value);
  // }

  // handleCheckChieldElement = (event) => {
  //   let fruites = this.state.fruites
  //   fruites.forEach(fruite => {
  //      if (fruite.value === event.target.value)
  //         fruite.isChecked =  event.target.checked
  //   })
  //   this.setState({fruites: fruites})
  // }


  toggleChanger(eot) {
    console.log(eot.target.value);
    
    this.setState({
      relocate: eot.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

 
    //change candidate data in object
    const candidate_objdata = {
      fullname: this.state.fullname,
      email: this.state.email,
      mobile: this.state.mobile,
      jobs: this.state.jobs,
      updatedby:"Admin",
      others:{ relocate: this.state.relocate, intrested:this.state.intrested }

      
    }

    console.log(candidate_objdata);

    axios.post('http://localhost:5000/candidates/update/' + this.props.match.params.id, candidate_objdata)
      .then(res => console.log(res.data));

  window.location = '/listcandidate';
  }

  render() {
    return (
    <div>
      <h3>Edit Candidate</h3>
      <form onSubmit={this.onSubmit}>



   <div className="form-group"> 
      <label>FullName: </label>
      <input name="fullname"  type="text"
         required
         className="form-control"
         value={this.state.fullname}
         onChange={this.onChangeFullname}
         />
   </div>
   <div className="form-group"> 
      <label>Email ID: </label>
      <input name="email"  type="text"
         required
         className="form-control"
         value={this.state.email}
         onChange={this.onChangeEmail}
         />
   </div>
   <div className="form-group"> 
      <label>Mobile: </label>
      <input name="mobile"   type="text"
         required
         className="form-control"
         value={this.state.mobile}
         onChange={this.onChangeMobile}
         />
   </div>
   {/* 
   <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
         required
         className="form-control"
         value={this.state.username}
         onChange={this.onChangeUsername}
         />
   </div>
   */}
   <div className="form-group">
      <label>Job Profile: </label>          
      <select value={this.state.jobs} name="jobs" className="form-control" onChange={this.onChangeJobs}>
         <option  value="Developer">Developer</option>
         <option value="Desinger">Desinger </option>
         <option value="HR">HR</option>
         <option value="Accountant">Accountant</option>
         <option value="Manager">Manager</option>
      </select>
   </div>

   <div className="form-group">

     
   <label>Can His/Her Relocate ? :  </label>  

   <span onChange={this.toggleChanger.bind(this)}>
   
      <input type="radio"    value="YES" name="relocate"/> Yes 
      <input type="radio"    value="NO" name="relocate"/>  No
   </span>

    {/* Relocate Yes :
  <input type="radio"   checked={this.state.relocate === "yes"}   name="relocate"  onChange={this.toggleChanger.bind(this)} value="yes" /> 
  Relocate No: 
  <input type="radio" checked={this.state.relocate === "no"}  name="relocate"  onChange={this.toggleChanger.bind(this)} value="no" />
   */}
  
  </div>
 
  



   <div className="form-group"  onChange={this.toggleChange.bind(this)}>
   <label>His/Her Intrested also as :  </label>          
   
   <label>
        <input name="intrested"
          type="checkbox"
          value="Freelance"
        
           />
       Freelance
      </label>
      <label>
        <input  name="intrested"
          type="checkbox"
          value="FullTime"
          
           />
       FullTime
      </label>

      <label>
        <input  name="intrested"
          type="checkbox"
          value="Parttime"
          
          />
       PartTime
      </label>

      </div>


   <div className="form-group">
      <input type="submit" value="Edit User" className="btn btn-primary" />
   </div>
</form> </div>
    )
  }
}

const RadioButton = (props) => {
  return (
      <div className="RadioButton">
          <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
          <label htmlFor={props.id}>{props.label}</label>
      </div>
  );
}
