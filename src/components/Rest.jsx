
import { useEffect, useState, useRef } from "react";
import TailButton from "../ui/TailButton"
import axios from "axios";
 
const baseUrl = "http://localhost:3005/posts";

export default function Rest() {
    const [tdata, setTdata] = useState([]); // ① 상태 변수
    const titleR = useRef();
    const authorR = useRef();

    const getFetchData = async ()=>{
       
            console.log(baseUrl)

        // const resp = await fetch(baseUrl);   //01
        // const data = await resp.json();      //02 JSON 변환
        const {data} = await axios.get(baseUrl) //01,02 이줄로 패치해서 가져온다. 
            
            console.log("패치된 데이터:data:", data);

       setTdata(data); // 상태에 저장
    }
    const handleInput = async (e) =>{
        e.preventDefault();
        const postData = { //form의 input을 useRef로 선언 후 잡아와
            "title" : titleR.current.value,
            "author" : authorR.current.value
        }
            //axios.post로 useRef값을 baseUrl에 postData를 입력해 
            const {data} = await axios.post(baseUrl, postData);

            //getFetchData 대신 setTdata로 최신데이터 첫줄로 넣을때.
            //setTdata([data, ...tdata]);  //[...tdata, data] 마지막줄로
            //입력한 값까지 적용되게 새로 가져와
            getFetchData();

            // 입력창 input은 초기화
            titleR.current.value = "";
            authorR.current.value = "";
    }

    const handleDelete = async (id) =>{
        console.log(id)
        await axios.delete(`${baseUrl}/${id}`);
        getFetchData();

    }

     // ⑤ 마운트 시 한 번 호출
    useEffect(() => {
        getFetchData();
    }, []);

  return (
    <div>
        <div className="">
            <form className="mb-3.5">
                <label htmlFor="txt1">제목</label>
                 <input type="text" 
                        ref={titleR} id = 'txt1' className="border"></input>
                <label htmlFor="txt1">작성자</label>
                 <input type="text" 
                            ref={authorR}
                            id = 'txt2' className="border"></input>
          
                <TailButton caption="입력" 
                            color="blue" 
                            onHandle={handleInput} /> 
                            {/* caption, color, onHandle */}
            </form>
        </div>
        <ul>
            {tdata.map(item =><li key={item.id}>
                                    {item.title} ({item.author}) 
                                    <TailButton caption="삭제" 
                            color="orange" 
                            onHandle={()=>handleDelete(item.id)} /> 
                                    
                                    
                                    </li> )}
            
        </ul>
    </div>
  )
}
