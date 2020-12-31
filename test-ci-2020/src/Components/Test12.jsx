import React from 'react'
import {changeInToArray} from '../controller/functions'
import '../assets/Test12.css'

class Test12 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            array1: "",
            array2: "",
            array3: 0,
            array4: null
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleArray1 = this.handleArray1.bind(this)
        this.handleArray2 = this.handleArray2.bind(this)
        this.handleTextArea = this.handleTextArea.bind(this)
        this.returnRank = this.returnRank.bind(this)
    }

    handleArray1 (e) {
        console.log(e.target.value)
        let a = e.target.value
        let temp = changeInToArray (a)
        console.log(temp)
        this.setState({array1:temp})
        console.log(this.state.array1)
       
    }
    handleArray2 (e) {
        console.log(e.target.value)
        let a = e.target.value
        let temp = changeInToArray (a)
        console.log(temp)
        this.setState({array2:temp})
        console.log(this.state.array2)

    }
    handleClick() {
        let temp1 = this.state.array1;
        let temp2 = this.state.array2;
        let temp3 = []
        let temp4 = []
        let temp5 = []
        for (let i = 0; i <temp1.length; i++) {
            if (temp2.indexOf(temp1[i]) < 0 ) {
                temp3.push(temp1[i])
            }
        }
        for (let y = 0; y <temp2.length; y ++) {
            if (temp1.indexOf(temp2[y]) < 0 ) {
                temp4.push(temp2[y])
            }
        }
            console.log(temp3)
            console.log(temp4)
            temp5 = [...temp3, ...temp4]
            console.log(temp5)
            this.setState ({array3: temp5})
            
    }

     async handleTextArea (e) {
        let a = e.target.value;
        let b =  await a.replace(/\s|\[|]/g, "");
        let c = await b.replace(/},{/g,"}a,a{");
        let d = await c.split("a,a");
        let stringToArray = [];
        for (let i = 0; i<d.length; i++) {
        let tempA = d[i].replace(/\{/g,"{\"").replace(/:/g,"\":").replace(/,/g,",\"")
        let tempB = JSON.parse(tempA)
        stringToArray.push(tempB)
        }

        console.log(stringToArray)
        this.setState ( { array4: stringToArray})
        console.log(this.state.array4[0])
    }

    async returnRank() {
        let comparePoints = []
        let compareTheRankFirstTime = []
        let arrayObject = this.state.array4
        console.log (this.state.array4.length)
        for (let i =0; i < arrayObject.length; i++) {
            comparePoints.push(arrayObject[i].points)
        }
        let comparePointsFirstTime = await [...comparePoints]
        console.log(comparePoints)
        for (let y =0; y < comparePointsFirstTime.length; y++){
            let tempRank = 1;
            for (let p= 0; p<comparePointsFirstTime.length; p++) {
                if (comparePointsFirstTime[y] < comparePointsFirstTime[p]){
                    tempRank= tempRank +1;
                }
                
            }
            compareTheRankFirstTime.push(tempRank)
        }
        console.log(compareTheRankFirstTime)
        
    }


render () {
    return (
        <>
        <div className="task12Main">
        <div className="task1">
                <input onChange={this.handleArray1} type="text" placeholder="type in array 1"/>
                <input onChange={this.handleArray2} type="text" placeholder="type in array 2"/>
                
        </div>
        <div className="task1BtnMain">
        <button className="task1Btn" onClick={this.handleClick}>Click to merge</button>
        </div>
        
        <div className="result"> KẾT QUẢ : { JSON.stringify(this.state.array3)}</div>

        <div className="textAreaBox">
            <textarea cols="30" rows="10" onChange={this.handleTextArea} placeholder="Nhập vào 1 array"></textarea>
            <textarea cols="30" rows="10"  placeholder="Kết quả trả ra"></textarea>
            
        </div>
        <div className="rankBtn"><button onClick= {this.returnRank}>Click To Rank</button></div>
        </div>
        
        </> 
    )
}
}

export default Test12;

