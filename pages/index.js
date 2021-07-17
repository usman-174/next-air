
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext,  useState } from "react";
import { contextProvider } from "../Global/Context";
import { useRouter } from "next/dist/client/router";
import Question from "../components/Questions";
export default function Home() {
  const { user,checkingUser } = useContext(contextProvider);
  const [start, setstart] = useState(false)
  const router = useRouter()
  if(checkingUser === null){
    return <></>
  }
  return user && checkingUser===false ? (
    <>
      <div className="container">
       {!start && <div className="row ">
          <div className="col-8 offeset-2 mx-auto text-center  ">
            <h1></h1>
            <button className='btn btn-secondary my-5' onClick={()=>setstart(true)}>
             START TEST
            </button>
          </div>
        </div>}
        {start&& <Question/>}
      </div>
    </>
  ) : 
  checkingUser===false && <div className="container">
      <div className="row">
        <div className="col-8 offeset-2 text-center">
          <h1 className="p-2">LOGIN TO SELECT USE THE APP</h1>
          <button className='btn-info' onClick={()=>router.push('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  
  
  // if (user && checkingUser === false) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-8 offeset-2 text-center">
  //           <h1 className="p-2">TAKE TEST</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else if (!user && checkingUser === false) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-8 offeset-2 text-center">
  //           <h1 className="p-2">LOGIN TO TAKE TEST</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }else{
  //   return <div className="h-100 d-flex justify-content-center align-items-center text-center mt-5">
  //   {/* <div className="row "> */}
  //     {/* <div className="col-12 justify-center text-center"> */}
  //       <div className="spinner-border">
  //         <span className="sr-only"></span>
  //       </div>
  //     {/* </div> */}
  //   {/* </div> */}
  // </div>
  // }
}
