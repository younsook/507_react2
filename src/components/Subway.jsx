import TailCard from "../ui/TailCard"
import TailSelect from "../ui/TailSelct"
import sarea from "../db/sarea.json"
import { useRef, useState, useEffect } from "react"
import SubwayBox from "./SubwayBox";

export default function Subway() {
  const [tdata, setTdata] = useState([]);
  const [timeDate, setTimeDate] = useState([]);

  const selRef = useRef();
  const sareaCode = sarea.map(item => item["코드"]); //TailSelect 를 사용하기 위해 분리해서 가져옴
  const sareaArea = sarea.map(item => item["측정소"]); //TailSelect 를 사용하기 위해 분리해서 가져옴
  const today = new Date().toISOString().slice(0,10).replaceAll("-",""); //날짜별로 쭉 가져옴.


  console.log(today)

  const getFetchData = async()=>{
    const apiKey = import.meta.env.VITE_DATA_API; 
    //const baseUrl = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByItem?serviceKey=${apiKey}&pageNo=12&numOfRows=5&resultType=json&areaIndex=${selRef.current.value}`
    //const baseUrl = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByItem?serviceKey=${apiKey}&pageNo=12&numOfRows=5&resultType=json&controlnumber=${today}&areaIndex=${selRef.current.value}`
    const baseUrl = 
                        `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByItem` +
                        `?serviceKey=${apiKey}` +
                        `&pageNo=12` +
                        `&numOfRows=5` +
                        `&resultType=json` +
                        `&controlnumber=${today}` +
                        `&areaIndex=${selRef.current.value}`;

    
    //let url = `${url}`
    console.log("2. baseUrl :",baseUrl)

    const res = await fetch(baseUrl);
    const json = await res.json();
    console.log("3.fetch 응답내용:", json);

    //const items = json.response.body.items;
    const items = json.response.body.items?.item ?? [];

    console.log("4fetch 가져온 배열:", items); // 콘솔에서 확인

    setTdata(items); // 상태에 저장

  }
  const handleSelect =()=>{
    console.log("1선택된 측정소 코드:",selRef.current.value);
    getFetchData();
  }



  useEffect(()=>{
    //시간만 뽑아서 배열을 만듬
    let tm = [];
    tm = tdata.map(item => item.controlnumber); // 전체 시간 추출
    console.log("tdata : ", tdata) 
    console.log("시간정렬 : ", tm)
    tm.sort();

    ////
      tdata.forEach(item => {
      console.log("✔여기가달라야..", `${item.controlnumber}-${item.item}`);


      });
    ////

    let tmData =[];
    tmData = tm.map(item => tdata.filter(titem => titem.controlnumber == item)[0])

    setTimeDate(tmData)
  }, [tdata]);


  return (
    <div className="w-9/10 flex flex-col"> 
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="flex justify-center items-center text-2xl  font-bold">측정소 선택</h1>
        <div>
            <TailSelect selRef={selRef}
                        handleSel = {handleSelect}
                        dText="--측정소 선택--"
                        opv={sareaCode}
                        opt={sareaArea} />
        </div>
        
      </div>
      <div>
        {timeDate.map((item, idx) => (
          <SubwayBox key={`${item.controlnumber}-${item.site}-${idx}`} 
                      item={item} 
                      itemCode={item.item}
                      value={item.val}/>
        ))}
      </div>
    </div>
  )
}
