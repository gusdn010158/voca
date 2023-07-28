import { Link } from "react-router-dom";
import useFecth from "../hooks/useFecth";
export default function DayList(){
 const days=useFecth("https://localhost:3001/days");
if(days.length ===0){
    return <span>Loading...</span>;
}
 return(
    <ul className="list_day"> 
        {days.map(day=>(
            <li key={day.id}>
            <Link to= {`/day/${day.day}`}>Day{day.day}</Link>
        </li>
        ))}
    </ul>
);

}
//키를 사용하는 이유 엘리먼트 혹은 컴포넌트의 변화를 감지하기 위함