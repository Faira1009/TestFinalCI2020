import React from 'react'
import '../assets/ChildTest3GetQuiz.css'

export function ChildTest3GetQuiz (props) {
    function randomAnswer (e) {
        if (e == undefined) {
            return 0;
        }
        else {
        let randomNumber = Math.floor(Math.random() * 3) + 1 ;
        let temp1 = e.incorrect_answers;
        let temp2 = []
        temp2.push (e.correct_answer) ;
        let temp3 = [...temp1]
        temp3.splice(randomNumber,0,temp2[0])
        console.log(temp3)
        return temp3;
        }
        
    }
    let answers= randomAnswer (props.dataQuiz)
    let answerList__ = [];
    for (let i =0; i< answers.length; i++) {
        answerList__.push((<button onClick={props.answerButtonHandle} value={answers [i]} > {answers [i]} </button>))
    }
    console.log(answers)
    if (props.dataLength < props.questionNumber) { 
        return ( 
            <div>
            <div> CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH {props.questionNumber} CÂU HỎI</div>
            <div> VỚI TỔNG SỐ ĐIỂM LÀ {props.finalScore}</div>
            </div>
            
        )
       }
    else {
        return(
            <div className="mainTask3">
                <div className="mainScore"> TỔNG SỐ ĐIỂM HIỆN TẠI LÀ {props.finalScore}</div>
                <div>
                <div>Quiz về {props.dataQuiz.category} số {props.questionNumber}</div>
                <div> Độ Khó {props.dataQuiz.difficulty}</div>
                <div> Câu hỏi: {props.dataQuiz.question}</div>
                <div className="listOfAnswers">
                {answerList__}
                </div> 
            </div>
            </div>
            
        )
    }
    
}