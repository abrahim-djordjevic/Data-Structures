//this class is used to implement a stack abstract data type
class Stack{
	//Array is used to implement
	constructor(){
		this.items = [];
	}
	
	//function to add an element to the stack
	push(element){
		this.items.push(element);
	}
	
	//function to remove the last element in the stack
	pop(){
		if(this.items.length > 0){
			this.items.pop{};
		}
		else{
			console.log("Underflow");
		}
	}
	
	//function to print last element in the stack
	peek(){
		return this.items[this.items.length - 1];
	}
	
	//function to check if stack is empty
	isEmpty(){
		return this.items.length == 0;
	}
	
	//function to 
	printStack(){
		var str = "";
		for(var i = 0; i <= this.items.length; i++){
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}
module.export.Stack = Stack;