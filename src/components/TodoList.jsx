import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import axios from "axios";
import { useState, useEffect } from "react";

export default function TodoList() {
    const url="http://localhost:3005/todos";
    //1
    const [tdata, setTdata] = useState([]);

    //3전체목록 불러오기 
    const getFetchData = async (text, completed) =>{
        const {data} = await axios.get(url)
        console.log("전체목록",data);
        setTdata(data);
    }

    //할일 추가
    const addTodo = async (text, completed) =>{
        console.log(text, completed);

        const postData = {text, completed};
        const data = await axios.post("http://localhost:3005/todos", postData);
        getFetchData();
        console.log("Add",data);
    }
    //수정
    const toggleTodo = async (id, completed) => {
        console.log("toggleTodo",id, completed);
        const done = completed == "X" ? "O" : "X" ;
        await axios.patch(`${url}/${id}`, {
                completed : done //반전된 값 전송
        });
         getFetchData();
    }
    //삭제
    const deleteTodo = async (id) => {
        console.log("delete",id);
        await axios.delete(`${url}/${id}`);
        getFetchData();
    }
    //2
    useEffect(() => {
        getFetchData();
    }, []);
  return (
    <div className="w-9/10 flex flex-col">
      <TodoForm addTodo ={addTodo}/>
     {tdata && tdata.map(item =><TodoItem key={item.id}
                                            item={item}
                                            onDelete={deleteTodo}
                                            onToggle={toggleTodo}
                                /> )} 
    </div>
  )
}
