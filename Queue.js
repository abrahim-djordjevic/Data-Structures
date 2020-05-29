//this class is used to implement a queue data structure
class Queue{
	//array is used to implement the data structure
	constructor{
		this.items = [];
	}
	
	//function to add items to the queue
	enqueue(element){
		this.items.shift(element);
	}
	
	//function to remove first item in queue
	dequeue(){
		if(this.items.length > 0){
			this.items.unshift();
		}
		else{
			console.log("Underflow");
		}
	}
	
	//function to print first item in queue
	front(){
		return this.items[0];
	}
	
	//function to check if queue is empty
	isEmpty(){
		return this.items.length == 0;
	}
	
	//function to print all items in the queue
	printQueue(){
		var str = "";
		for(var i = 0; i <= this.items.length; i++){
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}
module.export.Queue = Queue;