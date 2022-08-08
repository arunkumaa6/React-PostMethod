// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{ addToCart } from './counterSlice'
import { useState ,useEffect ,uesNavigate } from 'react';
// import { addToFav } from './addFav';
import axios from "axios"
// import Details from './Details';

export function Counter() {
  const count = useSelector((state)=>state);
  
  console.log("count",count);
  const dispatch = useDispatch();

  // const [task,setTask]=useState([])

  // useEffect(()=>{
  //   getTasks()

  // },[])
 
  // const getTasks=  ()=>{

  //API Fetch method
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then((res)=> res.json())
    // .then((json)=> setTask(json))
    // axios.get('https://jsonplaceholder.typicode.com/todos/userId=1')
    // .then((res)=> setTask(res.data))


  //API axios library
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  // .then((response) => setTask(response.data));

    // const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
    // console.log("res",res.data);
    // setTask(res.data)
  // }

  // const addDetails=()=>{

  //   navi("/Details")


  // }

  const hendleAddToCart=()=>{
    dispatch(addToCart(([{id:1, name:"react"}])))
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'react',
    body: 'js',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((json) => console.log("post",json));
  };

//   const hendleFav=()=>{
//     dispatch(addToFav(([{id:1,name:"js"}])))
//   }
  
  return (
    <div style={{ "textAlign":"center"}}>

      <button onClick={()=>hendleAddToCart()}>update</button>
      {/* <button onClick={()=>hendleFav()}>Fav</button> */}
      {/* <button onClick={()=> addDetails(task)}></button> */}
      
      <h3>Click update button</h3>
      {/* {task?.map((item,index)=> <p key={index}>{item.boby}</p>
      )} */}
    </div>
  );
}
