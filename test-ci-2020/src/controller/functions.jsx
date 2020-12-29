export function changeInToArray (e) {
        let temp = e;
        let temp1 = temp.replace(/\[|]|\s|"|'/g,"")
        let temp2 = temp1.split(",")
        return temp2;
}

