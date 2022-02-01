import React,{useRef,useState,useReducer} from "react";
import "./style.css";

const initialState={count:0};
function reducer(state,action)
{
  switch(action.type)
  {
    case "increment":
    return {count:state.count+1};
    case "decrement":
    return {count:state.count-1};
    default:
    throw new Error("No action");
  }
}

export default function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  let [count,setCount]=useState(0);
  const inputRef=useRef('');
  const clickHandel =()=>{
    console.log(inputRef.current.value,count);
    setCount(count+2);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <p>
        <input type="text" ref={inputRef} />
        <button onclick={clickHandel}>Click Me</button>
      </p>

      <div>
        <button onclick={()=>dispatch({type:"decrement"})}>-</button>
        {state.count}
        <button onclick={()=>dispatch({type:"increment"})}>+</button>
      </div>
      
    </div>
  );
}
