import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ListCandidate extends Component {
  constructor(props) {
    console.log("1-Life Cycle Stage for Class based component constructor")
    super(props);

    this.deleteCandidate = this.deleteCandidate.bind(this)

    this.state = {candidate: []};
  }

  componentDidMount() {
    console.log("Check LifeCycle Stage for CompnentDidMount")
    axios.get('http://localhost:5000/candidates/')
      .then(response => {
        console.log(response.data);
        this.setState({ candidate: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCandidate(id) {
    axios.delete('http://localhost:5000/candidates/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      candidates: this.state.candidates.filter(el => el._id !== id)
    })
  }
  
  candidateList() {
    console.log('Check LifeCylce of React for CandidateList State');
    console.log(this.state.candidate);
    return this.state.candidate.map(currentcandidate => {
      console.log('MAP');
      console.log(currentcandidate);
      return <Candidate candidate={currentcandidate} deleteCandidate={this.deleteCandidate} key={currentcandidate._id}/>;
    })


  }

  render() {
    return (
      <div>
        <h3>Registred Candidate</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Jobs</th>
              <th>Join By</th>
              <th>Othres</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.candidateList() }
          </tbody>
        </table>
      </div>
    )
  }
}

 

// console.log("ReactFragment use for when return multiple dom");
const Candidate = (props) => (
 
 
<React.Fragment>  
 {/* <tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
  <td>5</td>
</tr> */}
  <tr>
    <td>{props.candidate.fullname}</td>
    <td>{props.candidate.email}</td>
    <td>{props.candidate.mobile}</td>
    <td>{props.candidate.jobs}</td>
    <td>{props.candidate.updatedby}</td>
    <td>{props.candidate.others ? 'Intrested: '+ props.candidate.others.intrested +' Relocate: '+ props.candidate.others.relocate   :null   }
    
    </td>
    <td>
      <Link to={"/editcandidate/"+props.candidate._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteCandidate(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
  </React.Fragment>
)