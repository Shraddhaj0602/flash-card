
import { useState } from "react";
import './App.css';

const questions=[{question:"What is React JS?",answer:"library",id:1202},
{question:"What are React components?",answer:"Building blocks",id:1234},
{question:"How do you pass data between components?",answer:"Props",id:1200},
{question:"What manages the internal state of a component?",answer:"State",id:2435},
{question:"What is VDOM diffing",answer:"Optimization",id:3451},
{question:"What does JSX stand for?",answer:"Syntax",id:3441}]





function Flashcard()
{
  const [selectid,setSelectid]=useState(null);

  function Handleclick(id)
{
  return setSelectid(selectid!==id ?id:null);
  
}


  return <div  className="flashcard">{questions.map((que)=> ( <div key={que.id} className={que.id===selectid ? 'selected' : "unselected"} onClick={()=>Handleclick(que.id)}> <p>{ que.id===selectid ? que.answer:que.question}</p></div>))}</div>
  

}
export default function App() {
 return(<div className="app"  >
  <h2 className="heading ">Let's Play with React</h2>
   <Flashcard/>
  </div>)
  
}
  