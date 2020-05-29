

class Node{
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}
	
	add(element){
		//create new node
		var newNode = new Node(element);
		var currentNode;
		if(this.head == null){
			this.head = newNode;
		}
		else{
			currentNode = this.head;
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			currentNode.next = newNode;
		
		
		}
		this.size++;
	}
	
	insertAt(element, location){
		//create new node
		var newNode = new node(element);
		var currentNode, prevNode;
		var index = 0;
		if(location = 0){
			this.head = newNode;
		}
		else{
			currentNode = this.head;
			while(index < location){
				prevNode = currentNode
				currentNode = currentNode.next;
				index++;
			}
			newNode.next = currentNode;
			prevNode.next = newNode;
		}
		this.size++;
	}
	
	removeFrom(location){
		var currentNode, prevNode;
		var index = 0;
		if(index > 0 && location > this.size){
			return -1;
		}
		else if(location = 0){
			this.head = this.head.next;
		}
		else{
			currentNode = this.head;
			while(index < location){
				prevNode = currentNode;
				currentNode = currentNode.next;
				index++
			}
			prevNode.next = currentNode.next;
		}
		this.size--;
	}
	
	removeElement(element){
		var currentNode, prevNode;
		currentNode = this.head;
		while(currentNode != null){
			if(this.head.element == element){
				this.head = this.head.next;
			}
			else if(currentNode.element != element){
				prevNode = currentNode;
				currentNode = currentNode.next;	
			}
			else{
				prevNode.next = currentNode.next;
			}
			this.size--;
			return currentNode.element;
			
		}
		return -1;
	}
	
	indexOf(element){
		var count = 0;
		var currentNode = this.head;
		while(currentNode != null){
			if(currentNode.element == element){
				return count;
			}
			else{
				count++;
				currentNode = currentNode.next;
			}
			
		}
		return -1;
	}
	
	isEmpty(){
		return this.size == 0;
	}
	
	listSize(){
		console.log(this.size);
	}
	
	printList(){
		var currentNode = this.head;
		var str = ""
		while(currentNode){
			str += currentNode.element + " ";
			currentNode = currentNode.next;
		}
		console.log(str);
	}
	
}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;