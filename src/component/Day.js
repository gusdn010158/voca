
import { useParams } from "react-router-dom";
import useFecth from "../hooks/useFecth";
import Word from "./Word";
export default function Hello(){
  const {day}=useParams();
  
    const words = useFecth(`https://localhost:3001/Words?day=${day}`);
    return(
    <>
    <h2>Day{day}</h2>
    {words.length ===0 && <span>Loading...</span>}
    <table>
        <tbody>
            {words.map(word=>(
                <Word word ={word} key={word.id}/>
            ))}
        </tbody>

    </table>
    </>
    )
}