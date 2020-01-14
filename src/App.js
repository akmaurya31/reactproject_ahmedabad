import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import AddProduct from "./components/add-product.component";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './actions/users.actions';
import TodoInput from './TodoInput';
import AddCandidate from './components/add-candidate';
import ListCandidate from './components/list-candidate';
import EditCandidate from './components/edit-candidate';





class App extends Component {

  componentDidMount() {
    this.props.getAllUsers()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewTodo(this.state.newTodo)
  }

  render() {
    let todosList = this.props.todos
      .map((todo, i) => {
        return ( 
          <li key={i}>{todo}</li> 
        )
      })
    let usersList = this.props.users.map(user => 
      <li key={user.id}>{user.name}</li>)

      const bannerImg = {        
       
    backgroundImage: 'url(banner1.jpg)',
        
      };
    
      const wtitle = {        
       
        color: '#FFF',
            
          };
      

    return (
      <Router><Navbar />
      
      <div  className="Banner-area" style={bannerImg}>
      <div className="Banner-text">
         <div className="container">
            <div className="row">
               <div className="col-xs-12">
                  <div className="Banner-heading">
                    <br/>
                     <h1 className="Banner-title"  style={wtitle}>Interview & Freelance Tracker</h1>
                     <br/> 
                  </div>
               </div> 
            </div> 
         </div> 
      </div> 
   </div>



{/* 
      <main>

      <div id="maincontent" class="p-base__main">
       
 
          <img src="shutterstock_566815396.jpg" width="100%" class="c-banner-landing__image" alt="Shutterstock 566815396" />
 
          <div class="c-banner-landing__wrap centered-block">
    <div class="c-banner-landing__caption darkbg">
                  <h1 class="c-banner-landing__title">Space Booking &amp; Management</h1>
                      </div>
  </div> 

        </div>
      </main> */}




       <div className="container">       
       <br/>
       <Route path="/" exact component={ExercisesList} />
       <Route path="/edit/:id" component={EditExercise} />
       <Route path="/create" component={CreateExercise} />
       <Route path="/addcandidate" component={AddCandidate}/>
       <Route path="/product" component={AddProduct} />
       <Route path="/listcandidate" component={ListCandidate} />
       <Route path="/editcandidate/:id" component={EditCandidate} />
      
        <TodoInput />
        <h2>List of todos</h2>
        <ul>{todosList}</ul>
        <h2>List of users</h2>
        <ul>{usersList}</ul>
      </div>

      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    users: state.users,
    candidates:state.candidates,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);







// function App() {
//   return (
//     <Router>
//       <div className="container">
//       <Navbar />
//       <br/>
//       <Route path="/" exact component={ExercisesList} />
//       <Route path="/edit/:id" component={EditExercise} />
//       <Route path="/create" component={CreateExercise} />
//       <Route path="/user" component={CreateUser} />
//       <Route path="/product" component={AddProduct} />
//       </div>
//     </Router>
//   );
// }

// export default App;
