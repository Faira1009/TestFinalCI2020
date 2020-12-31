import React from 'react'
import {ChildTest3GetQuiz} from '../Components/ChildTest3GetQuiz'



class Test3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: null,
            questionNum: 0,
            score: 0,
        }
        this.handleAnswerButton = this.handleAnswerButton.bind (this)
    }
    
    
    async componentDidMount() {
        const url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
        const res = await fetch (url)
        const data = await res.json()
        this.setState ({data: data.results, loading: false})
        console.log(this.state.data)
    
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
        console.log(this.state.data)
            return(
                <>
                { this.state.loading || !this.state.data ? (
                    <div>loading</div>
                ): (
                    <ChildTest3GetQuiz answerButtonHandle={this.handleAnswerButton} dataQuiz= {this.state.data[this.state.questionNum]} questionNumber ={this.state.questionNum+1} finalScore= {this.state.score} dataLength={this.state.data.length}/>
    
                )}
                
                </>
            )
        }
        
    }



export default Test3;
