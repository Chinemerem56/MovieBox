
import {useState} from'react';


function Todo(){
      const[input,setInput]=useState("");
      const[todos,setTodos]=useState([]);

      const addTodo=()=>{
        if(input.trim()){
            setTodos([...todos,input]);
            setInput("")
        }
      }
      return(
            <div >
                  <h1 style={{color:'#333',textAlign:'center'}}>🚍My To-do list</h1>
                  <div>
                        <input type="text" value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        placeholder="Add a new task" />
                        <button onClick={addTodo} >Add</button>
                  </div>
                  <ul>
                        {todos.map((todo, index)=>(
                              <li key={index} ><span>{todo}</span>
                              <button onClick={()=>setTodos(todos.filter((_, i)=> i !==index))}
                                    >Delete</button>
                              </li>
                        ))}
                  </ul>
            </div>
      )
}
export default Todo
