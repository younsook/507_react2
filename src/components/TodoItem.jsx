import TailButton from "../ui/TailButton";

export default function TodoItem({item, onDelete, onToggle}) {
  return (
    <div className="w-full h-[60px] p-1 flex justify-between items-center border
                         border-b-blue-300 my-0.5
                            ">
      
      {/* line-through 취소선 */}
        <div onClick={()=> onToggle(item.id, item.completed)}>
        {
            item.completed == "X" ? "□" : "■"
        }
        </div>
      <span
          className={`ml-2 text-sm ${
            item.completed === "X" ? "" : "line-through text-red-400"
          }`}
        >
      {item.text}
      </span>
      <div>
       <TailButton         
                            caption="삭제" 
                            color="oreange" 
                            onHandle={()=>onDelete(item.id)} /> 
        </div>
    
    </div>
  )
}
