
import { useParams } from "react-router-dom"
import Word from "./Word";
import { useState } from "react";
import { useEffect } from "react";

export default function Day(){
    const {day}= useParams();
    // const wordList = dummy.words.filter(word=>word.day === Number(day))
    const [words, setWords]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3000/words?day=${day}`) // API 경로 => proms반환
        .then(res => {
          return res.json()
        })
        .then(data => {
          setWords(data);
        });
      },[day])

    return<>
    <h2>Day{day}</h2>
    <table>
        <tbody>
            {words.map(word=>(
             <Word word={word} key={word.id}/>
            ))}
            
        </tbody>
    </table>
    </>
}