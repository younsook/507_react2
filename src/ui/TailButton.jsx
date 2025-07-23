

export default function TailButton({caption, color, onHandle}) {
    const bg = {
        "blue" : "bg-blue-800",
        "orange" : "bg-orange-800",
        "lime" : "bg-lime-800",
    }

    const bgHover = {
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-lime-400",
    }
  return (
        //mx-2 좌우 마진 8px, my-2 상하 마진 8px, m-2 전체 방향 마진 8px (각 방향)
      <button className={`mx-2 my-2 p-4 rounded-xl text-white
            hover:cursor-pointer hover:font-bold bg-blue-500
             ${bg[color]} ${bgHover[color]}`}
             onClick={onHandle}>
        {caption}
      </button>
    
  )
}
