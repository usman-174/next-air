import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../Global/Context";
import axios from 'axios'
const Question = () => {
  const { user, checkingUser } = useContext(contextProvider);
    const [tableNames, settableNames] = useState([])
  useEffect(()=>{
    getTables()
  },[])
    const getTables = async()=>{
        const res = await axios.get('/api/tablenames')
        if(res.data){
            console.log(res.data);
            settableNames(res.data)
        }
    }
  return (
    <div className="container">
      <div className="row">
     { tableNames.length && <> <h1>SELECT WHAT YOU WANT TO CHOOSE:</h1>
     
     <ul>
         {tableNames.map(name=><li>{name.table_name}</li>)}
     </ul>
     </>}
       
      </div>
    </div>
  );
};
export default Question;
