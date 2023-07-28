import {useNavigate} from "react-router-dom";
import useFecth from "../hooks/useFecth";

export default function CreateDay(){
    const days = useFecth("https://localhost:3001/days");
    const history = useNavigate();

    function addDay(){
        fetch(`https://localhost:3001/days`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            day: days.length+1, // addday가 호출될때 마다 day+1
        }),
       }).then(res=>{
        if(res.ok){
        alert("생성이 완료되었습니다.");
        history(`/`);
        //fetch가 day+1를 하고 alert로 창을 띄운후 해당 주소로 이동한다.
        //a태그를 사용하지않고 페이지 전환할때 사용(자동으로)
        }
       });
    }   
    return <div>
        <h3>현재 일수: {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
}
