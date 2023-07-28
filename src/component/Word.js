import {useState} from "react";
export default function Word({word:w}){//word:w새로운 변수명으로 할당 가능
    const[word,setWord]=useState(w);
    const[isShow, setIsShow]= useState(false);
    const[isDone,setIsDone]=useState(word.isDone);

    function toggleShow(){
    setIsShow(!isShow);
    } 

    function toggleDone(){//새로고침해도 유지
       fetch(`https://localhost:3001/Words?day=${word.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            ...word,
            isDone:!isDone,
        }),
       })
       .then(res=>{
        if(res.ok){
            setIsDone(!isDone)
        }
       })
    } 

    function del(){
if(window.confirm('삭제하시겠습니까?')){
    fetch(`https://localhost:3001/Words?day=${word.id}`,{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
            setWord({id:0});
        }
    })
}
}

if(word.id===0){
    return null;
}
return(
<tr className={isDone?'off':""}> 
 <td>
    <input type ="checkbox" checked={isDone} onChange ={toggleDone}/>
</td>
    <td>{word.eng}</td>
    <td>{isShow && word.kor}</td>
<td>
    <button onClick={toggleShow}>뜻{isShow?'숨기기':'보기'}</button>
    <button onClick={del} className="btn-del"> 삭제 </button>
</td>
</tr>
);
}