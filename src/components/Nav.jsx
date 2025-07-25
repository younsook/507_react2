
import viteLogo from '/vite.svg' //이미지표현 2가지방법
import reactLogo from '../assets/react.svg' //이미지표현 2가지방법

import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { isLogin } from '../atoms/IsLoginAtom'

export default function Nav() {
  const [login, seLogin] = useAtom(isLogin);

  const handleLogout = () =>{
    seLogin(false);
    localStorage.removeItem("id");
  }
  return (
   
     <header className='w-full min-h-20 bg-emerald-50 flex justify-between items-center'>
            <div className='flex ml-10 '>
                <img src={reactLogo} alt='react'></img> +
                <img src={viteLogo} alt='vite'></img>  
            </div>
            <div className='text-sm font-bold text-green-800'>
                <ul className='flex justify-center items-center'>
                    <Link to="/">
                      <li className='px-2 space-x-4 rounded-xl hover:bg-green-800 hover:text-white'>
                        홈으로
                      </li>
                      </Link>

                    { login &&  <Link to="/subway">
                      <li className='px-2 space-x-4 rounded-xl hover:bg-green-800 hover:text-white'>
                        대기정보
                      </li>
                      </Link> }

                      <Link to="/rest">
                      <li className='px-2 space-x-4 rounded-xl hover:bg-green-800 hover:text-white'>
                        json
                      </li>
                      </Link>
                </ul>
            </div>
            <div className='mr-10 text-sm font-bold p-5 border bg-green-600 rounded-2xl text-white'>
                 {login ? (
                      <span onClick={handleLogout} className="cursor-pointer hover:underline">
                        로그아웃
                      </span>
                    ) : (
                      <Link to="/login" className="cursor-pointer hover:underline">
                        로그인
                      </Link>
                    )}
            </div>
            
           </header> 
    
  )
}
