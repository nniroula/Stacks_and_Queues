class Queue{
    constructor(){
        // create an array/list to hold data
        this.data = [];
    }
    // methods
    enqueue(val){
        this.data.push(val);
    }
    dequeue(val){
        if(this.data.length === 0){
            throw new Error("Can not dequeue from an empty queue"); 
        }
        else{
            return this.data.shift(); // from the beginning bcoz queue is firt in first out
        }
    }
    peek(){
        return this.data[0];
    }
    isEmpty(){
//         return this.data.length >= 1;
        if(this.data.length >= 1){
            return "Not Empty";
        }
        else{
            return "Empty";
        }
    }

}