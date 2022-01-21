//  Stacks

class Stack{
    constructor(){
        this.data = [];
    }
    // methods
    push(val){
        this.data.push(val);
    }
    pop(){
        if(this.data.length === 0){
            return "There is no data in stack"
        }
        else{
            return this.data.shift();
        }
    }
    peek(){
        return this.data[0];
    }
    isEmpty(){
        if(this.data.length >= 1){
            return "Not Empty";
        }
        else{
            return "Empty";
        }
    }
}

const stac = new Stack();
stac.push("Coding");
stac.push("Programming");
stac.pop()
stac.isEmpty()
console.log(stac);