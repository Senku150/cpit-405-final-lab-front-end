import { useState } from "react";
const Send = ({setEdited,setData})=>{
      const [input, setInput] = useState("");


      const handleSubmit =()=>{
        const bookMark=input
        
 const fc = async ()=>{
    const raw = JSON.stringify({
        "bookmarkName":bookMark
      });
    const requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow"
      };
    const resp=await fetch(`http://localhost:8000/index.php`,requestOptions);
    const data= await resp.json();
    console.log(data)
    setData(data)
    //setEdited("searchBy1")
}
fc()
      }
    return(
        <div>
        <input
        className="boxForSend"
        placeholder="Enter Your BookMark "
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className="boxForSend" onClick={handleSubmit}>Search</button>
      </div>
      )
}

export default Send