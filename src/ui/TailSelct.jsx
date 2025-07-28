

export default function TailSelct({selRef, handleSel, dText, opv, opt}) {
  return (
    <div className="w-full flex items-center">
    
        <select id="area" 
                ref={selRef} 
                onChange={handleSel}
                defaultValue=""
                className="bg-gray-50 border mx-4 border-gray-300 
                text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block 
                 p-2 w-full h-[42px]">

                 <option value="" >{dText}</option>
                {
                    opv && opt && opv.map((item, idx) => 
                    <option key={item} 
                            value={item}>
                        {opt[idx]}
                    </option>
                            )                  
                 }
        </select>
    </div>
  )
}
