import { useRef } from "react"
import { isLogin } from "../atoms/IsLoginAtom"
import { useAtom } from "jotai";

export default function Login() {
  const [login , setLogin ] = useAtom(isLogin);
  const emailRef = useRef();
  const pwdRef = useRef();

  const handleLogin = (e) =>{
    e.preventDefault(); 
    // if(emailRef.current.value==""){
    //   alert('이메일을 입력하세요.');
    //   return;
    // }
    // if(pwdRef.current.value==""){
    //   alert('비밀번호를 입력하세요.');
    //   return;
    // }
    if(emailRef.current.value != "hodu0622@naver.com"){
      alert('아이디가 존재하지 않습니다.');
      return;
    }
    if(pwdRef.current.value != "1234"){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    localStorage.setItem("id", emailRef.current.value);
    setLogin(true);
  }


  return (
    
    <div className="flex min-h-full flex-col justify-start lg:px-8">
      <div >
        <h2 className=" text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-sm py-12">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
            </div>
            {/* 이메일 input  */}
            <div className="mt-2">
              <input id="email" ref={emailRef} name="email" type="email" autoComplete="email" required
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1
                 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                  focus:outline-indigo-600 sm:text-sm h-12"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
             
            </div>
            {/* 패스워드 input */}
            <div className="mt-2">
              <input id="password" ref={pwdRef} name="password" type="password" autoComplete="current-password" required
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1
                 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                  focus:outline-indigo-600 sm:text-sm h-12" />
            </div>
          </div>

          <div>
            <button onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold
               text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-indigo-600 h-10">
              Sign in
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
