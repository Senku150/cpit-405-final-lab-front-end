import { useState, useEffect } from "react";
import Send from "./Send";
import Edit from "./Edit";
import Delete from "./Delete";
import Add from "./Add";
const Show = () => {
  const [data, setData] = useState("");
  const [edited,setEdited]=useState("notingNew")
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      const response = await fetch(`http://localhost:8000/index.php`,requestOptions);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [edited]);

  return (
    <div>
            <Send setData={setData} setEdited={setEdited} />
            <Delete setEdited={setEdited}/>
            <Edit setEdited={setEdited}/>
            <Add setEdited={setEdited} />
      {
        // If data is NOT empty or null
        data && (
            
          <div>
            <table className="tableForData">
            <thead>
                <th className="thForData">ID</th>
                <th className="thForData">BookMark</th>
                <th className="thForData">URL</th>
                <th className="thForData">Date</th>
                </thead>
                <tbody>

                {data.map(e => (

                   <tr className="tdForData">{e.id /*class name is td even tho its tr I guess I'm bad at naming things */}
                   <td className="tdForData">{e.title}</td>
                   <td className="tdForData">{e.link}</td>
                   <td className="tdForData">{e.date_added}</td>
                  
                   </tr>
                ))}
                </tbody>
            </table>
          </div>
        )
      }
    </div>
  );
};
export default Show;
