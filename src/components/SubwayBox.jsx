import scode from "../db/scode.json"

export default function SubwayBox({item}) {
    console.log(item)
  return (
    <div className='w-9/10 flex flex-col'>
       <div>
        {item.site} {item.city} {item.controlnumber}
       </div>
       {item.items?.map((it, idx) => (
        <div key={idx}>
          📍 {it.site} | 항목: {it.item} | 측정값: {it.value}{it.unit}
        </div>
      ))}
    </div>
  )
}
