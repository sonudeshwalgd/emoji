import React, {
    useEffect
} from 'react'
import ReactDom from 'react-dom/client'
import {
    useState
} from 'react'
import response from './response.json'
import singlesubres from './singlerescat.json'
import ReactDOM from 'react-dom/client';
import Upperdiv from './Upperdiv.js'
import './upper.css'
console.log("working js")

function p(msg) {
    console.log(msg)
}
export default  function Body(){
   const [sss,ssss]=useState(response)
   const [subvalue,setsubvalue]=useState("")
   const [char,setchar]=useState("")
   const [code,setcode]=useState("")
   const [group,setgroup]=useState("")
const[sub,setsub]=useState(singlesubres)
const fir =async ()=>{

}
function aa(ele){
    p(ele.slug)
   
       setsubvalue(ele.slug)
      setchar(ele.character)
       setcode(ele.codePoint)
       setgroup(ele.group)
  
   
}
const cli =(a,b,c)=>{p("jijiji");p(c.slice(a,b));ssss(c.slice(a,b))}

useEffect(()=>{fir()},[])


    return ( 
    <>
    <div className='textarea'>
    <span>
        <span>{char}</span>
        </span>
    <span>
        <div>
    <div>detail : {subvalue}</div>
    <div>group : {group}</div>
    <div>code : {code}</div>
    </div>
    </span>
    </div>
        
    <section>
        <div onClick={()=> cli(0,151,response)}><img src={require('./../cat_imoji/1.png')}></img></div>
        <div onClick={()=> cli(151,491,response)}><img src={require('./../cat_imoji/people.webp')}></img></div>
        <div onClick={()=> cli(491,629,response)}><img src={require('./../cat_imoji/ani.png')}></img></div>
        
        <div onClick={()=> cli(629,758,response)}><img src={require('./../cat_imoji/food.png')}></img></div>
        <div onClick={()=> cli(758,973,response)}><img src={require('./../cat_imoji/travel.png')}></img></div>
        <div onClick={()=> cli(973,1057,response)}><img src={require('./../cat_imoji/sport.png')}></img></div>
        
        <div onClick={()=> cli(1057,1307,response)}><img src={require('./../cat_imoji/object.png')}></img></div>
        <div onClick={()=> cli(1307,1526,response)}><img src={require('./../cat_imoji/symbol.png')}></img></div>
        <div onClick={()=> cli(1526,1793,response)}><img src={require('./../cat_imoji/flag.png')}></img></div>
        </section> 

   <div className='last'>{sss.map((ele,index)=>{
   
    return(
        <>
       <div  onClick={ ()=>{aa(ele)}}>{ele.character}</div></>
   
   
   
   
   
   
   
   
   
   
   
   
   )})}
       
 </div> 
</>)
    }