import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import axios from 'axios';  //We have to use  for post and get http request - Axios.js or Fetch libraries

export default class AddProduct extends Component {    
  constructor(props) {
    // console.log("LifeCycle First Call as Constructor");
    //The first thing that gets called is your component constructor 
    super(props);  //super for use get connect base component
    this.state = {
        // prtext:'Add New Product'
        product_name:"",
        product_size:"",
        msg:""
    };
  }

  handleclick=(e)=>{
    //   console.log("Small e for Event- When onchange Product Text box & Reserve setState use for manage new value in state");
    //   this.setState.prtext="TypeCliclk";
    this.setState({      
        
         // prtext: "Dummy Value"
         // prtext: e.target.value   

    })
  }

  dataChange=(ev)=>{
    //   console.log(ev);
    // console.log("Small e for Event- When onchange Product Text box & Reserve setState use for manage new value in state");
  //   this.setState.prtext="TypeCliclk";
  this.setState({        
      // prtext: "Dummy Value"
      [ev.target.name]: ev.target.value  
      //JS Declration using
  })
}

  
  handlesumbit=(e)=>{
   e.preventDefault();
  // console.log("MySubmit Click-E Prevent use for after submit page not reload");
    // console.log(this.state);
   const product = {
    // {product_name,product_size}:this.state;
    product_name: this.state.product_name,
    product_size: this.state.product_size
  }
//   console.log(product);

   
   
   //Axois is third party labraries use for get and post data
   //Fetch vs. Axios.js for making http requests
   axios.post('http://localhost:5000/products/add', product)
   .then(res => console.log(res.data));

   this.setState({
    product_name: '',
    product_size: ''

  })

}




  render() {
    return (
      <div>
        <h1> Add Project & Task </h1>
        <form name="f1" onSubmit={this.handlesumbit} >
            {/* <input type='text' onClick={this.handleclick} value={this.state.prtext}/> */}
            Product Name : <input type="text" name="product_name"  onChange={this.dataChange} value={this.state.prtext}/>
            <br/><br/>
            Product Size : <input type="text" name="product_size" onChange={this.dataChange.bind(this)} value={this.state.prtext}/>

            <br/><br/>
            <input type='submit' value='Save' />

        </form>


      </div>
    );
  }
}

// export default Addproduct;
