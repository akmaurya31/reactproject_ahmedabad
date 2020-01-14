import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Store from './store';
let storeInstance = Store() 
 
function reducer(state,action){
    console.log(action);
if(action.type ==='changeState'){
    return action.payload.newState;  
}

    var st=['MyStatevar','State'];

    return st;
    // return 'State';
}


const store=createStore(reducer);
const mystore =store;

const action={
    type:'changeState',
    payload:{
        newState:'New State'
    }

}
store.dispatch(action);


console.log(mystore.getState()); 
// ReactDOM.render(<Provider store={mystore}><App /></Provider>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={storeInstance}>
      <App />
    </Provider>
    , document.getElementById('root')
  )