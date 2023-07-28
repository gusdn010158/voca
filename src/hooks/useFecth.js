import { useEffect,useState } from "react";

export default function useFecth(url){
    const[data,setData]=useState([]);
    useEffect(()=>{
      fetch(url)
      .then(res=>{
          return res.json()
      })
      .then(data=>{
          setData(data);
      })
  },[url]);
  return data;
}
//useeffect에서 url이 작동되었을때 url주소에서 응답객체를 받고 json형태로 바꾼다. 그리고 이 json형태를 setdata로 바꾼다.
// fetch()res.json() 첫번째 then함수에 전달된 인자 
//res는 http통신 요청과 응답에서 응답 정보를 담고있는 객체