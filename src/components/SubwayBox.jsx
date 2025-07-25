import scode from "../db/scode.json"

export default function SubwayBox({item, idx}) {
    console.log(item)
    const kdata = Object.keys(scode);
    console.log(kdata)
  return (
    <div className='w-9/10 flex flex-col mt-4'>
          <div className="text-base mb-3">
            {item.site} {item.city} | 측정시간: {item.controlnumber}
          </div>

          <div className="flex flex-wrap gap-4">
            {kdata.map((k, i) => (              
              <div key={k} className="flex flex-col items-center p-1 text-sm border rounded shadow w-20 
                                  text-center border-gray-300">
                  {/* 1 */}
                  <div className="p-2 bg-green-100">
                        {scode[k]["name"]}<br />({k})
                  </div>
                  {/* 2 */}
                  <div className="p-2 ">
                    {item.item_val} {kdata.unit}
                  </div>
              </div>
            ))} 
          </div>
        
      
      
    </div>
  )
}
