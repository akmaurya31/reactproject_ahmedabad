import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      project_name_arr:[],
      project_name:'',
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
      ncandidate:'',
      ncandidate_arr:[],
      price:0,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            project_name_arr: response.data.map(user => user.username),
            project_name_: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:5000/candidates/agr/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            ncandidate_arr: response.data.map(candidate => candidate.fullname),
            ncandidate: response.data[0].fullname,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })



  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeProjectName(e) {
    this.setState({
      project_name: e.target.value
    })
  }

  onChangecandidateName(e) {
    this.setState({
      ncandidate: e.target.value
    })
  }




  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }


  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      project_name:this.state.project_name,
      candidate: this.state.ncandidate,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      price:this.state.price,  

    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    // window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Assignment</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Project: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.project_name}
              onChange={this.onChangeProjectName.bind(this)}>
              {
                this.state.project_name_arr.map(function(project_name) {
                  return <option 
                    key={project_name}
                    value={project_name}>{project_name}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Candidate:
            {/* {this.state.ncandidate}  */}
          {/* {   this.state.ncandidate_arr.map(function(ncandidate_str) {
                   return <option 
                   key={ncandidate_str}
                   value={ncandidate_str}>{ncandidate_str}
                   </option>;
                }) } */}
          
           </label>
          <select  
              required
              className="form-control"
              value={this.state.ncandidate}
              onChange={this.onChangecandidateName.bind(this)}>
              {
                this.state.ncandidate_arr.map(function(ncandidate_str) {
                  return <option 
                    key={ncandidate_str}
                    value={ncandidate_str}>{ncandidate_str} -Developer
                    </option>;
                })
              }
          </select>
        </div>









        <div className="form-group"> 
          <label>Work Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in Hours): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Project End Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group"> 
          <label>Advanace Payment: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice.bind(this)}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}