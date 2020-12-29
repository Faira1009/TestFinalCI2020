import React from 'react'
import {ChildTest3GetQuiz} from '../Components/ChildTest3GetQuiz'


const a ={
    "response_code": 0,
    "results": [
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of the following sports is not part of the triathlon?",
            "correct_answer": "Horse-Riding",
            "incorrect_answers": ["Cycling", "Swimming", "Running"]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "This Canadian television sportscaster is known for his Hockey Night in Canada role, a commentary show during hockey games.",
            "correct_answer": "Don Cherry",
            "incorrect_answers": ["Don McKellar", "Don Taylor ", "Donald Sutherland"]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which boxer was banned for taking a bite out of Evander Holyfield&#039;s ear in 1997?",
            "correct_answer": "Mike Tyson",
            "incorrect_answers": ["Roy Jones Jr.", "Evander Holyfield", "Lennox Lewis"]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which African American is in part responsible for integrating  Major League baseball?",
            "correct_answer": "Jackie Robinson",
            "incorrect_answers": ["Curt Flood", "Roy Campanella", "Satchell Paige"]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which year did Jenson Button won his first ever Formula One World Drivers&#039; Championship?",
            "correct_answer": "2009",
            "incorrect_answers": ["2010", "2007", "2006"]
        }]
}

class Test3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: a.results,
            questionNum: 0,
            score: 0,
        }
        this.handleAnswerButton = this.handleAnswerButton.bind (this)
    }

    handleAnswerButton(e) {
        console.log(e.target.value)
        let answerFromBtn = e.target.value ;


        if (answerFromBtn == this.state.data[this.state.questionNum].correct_answer) {
            alert ("đúng dòi bạn được cộng 10 điểm")
            this.setState(prevState => ({
                questionNum: prevState.questionNum + 1,
                score: prevState.score + 10
                }))
                console.log( this.state.score)
        }
        else {
            alert ("TIẾC QUÁ BẠN ĐÃ TRẢ LỜI SAI DÒI @.@ ư ư")
            this.setState(prevState => ({
                
                questionNum: prevState.questionNum + 1,
                score: prevState.score + 0
                }))
        }
    }

     
    render() {
            return(
                <>
                <ChildTest3GetQuiz answerButtonHandle={this.handleAnswerButton} dataQuiz= {this.state.data[this.state.questionNum]} questionNumber ={this.state.questionNum+1} finalScore= {this.state.score} dataLength={this.state.data.length}/>
    
                </>
            )
        }
        
    }



export default Test3;
