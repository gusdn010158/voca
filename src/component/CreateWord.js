import {useNavigate} from "react-router-dom";
import {useState,useRef} from "react";
import useFecth from "../hooks/useFecth";

export default function CreateWord(){
    const days =useFecth("https://localhost:3001/days");
    const history =useNavigate();
    const [isLoading,setIsLoading]=useState(false);

    function onSubmit(e){
        e.preventDefault();
        if(!isLoading){
        setIsLoading(true);
            fetch(`https://localhost:3001/Words`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            day: dayRef.current.value,
            eng: engRef.current.value,
            kor: korRef.current.value,
            isDone:false            
        }),
       })
       .then(res=>{
        if(res.ok){
            alert("생성이 완료되었습니다.");
        history(`/day/${dayRef.current.valueOf}`)//a태그를 사용하지않고 페이지 전환할때 사용
    setIsLoading(false);    
    }
       });
    }
    }
    const engRef =useRef(Number(null));// 랜더링과 무관한 상태값을 보관할때 씀
    const korRef =useRef(Number(null));
    const dayRef =useRef(Number(null));
    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input Type ="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input Type ="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}> 
                    {days.map(day => (
                        <option key ={days.id} value={days.day}>
                            {day.day}
                            </option>
                        ))}
                </select>
            </div>
            <button style ={{
                opacity:isLoading?0.3:1,
            }}>{isLoading ? "saving":"저장"}</button>
        </form>
    );
}//ref dom요소가 생성된후 접근 가능 current속성 해당요소에 접근 가능