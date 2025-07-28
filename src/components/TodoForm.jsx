import TailButton from "../ui/TailButton"

import { useRef, useEffect } from "react"

export default function TodoForm({addTodo}) {
    const txtRef = useRef();
    const selRef = useRef();

   const handleOk =(e)=>{
    e.preventDefault();

    if(txtRef.current.value == ""){
        alert("할일 내용 입력하세요");
        txtRef.current.focus();
        return;
    }

    addTodo(txtRef.current.value, selRef.current.value);
    handleCancel();
   }

   const handleCancel =()=>{
        txtRef.current.value = ""
        selRef.current.value = "X"
        txtRef.current.focus();
   }

    useEffect(() => {
        txtRef.current.focus();
    }, []);
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
        <div className="w-full flex justify-center items-center text-2xl ">TodoList</div>
        <form className="p-2 w-full grid grid-cols-5 gap-4 items-center">
            <select
                id="sel1"
                 ref={selRef}
                className="h-[42px] border rounded-lg px-3 text-sm text-gray-700 
                        focus:outline-none focus:ring-2 focus:ring-blue-500">
                {/* <option value="">-- 선택하세요 --</option> */}
                <option value="X">X</option>
                <option value="O">O</option>
            </select>
                        
            <input type="text" 
                    ref={txtRef}
                    id = 'txt1' className="col-span-2 h-[42px] border rounded-lg px-3 py-2 text-sm text-gray-700 
                                focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>
    
            <TailButton caption="확인" 
                        color="blue" 
                        onHandle={handleOk} /> 
                        {/* caption, color, onHandle */}
            <TailButton caption="취소" 
                        color="orange" 
                        onHandle={handleCancel} /> 
         </form>
    </div>
  )
}
