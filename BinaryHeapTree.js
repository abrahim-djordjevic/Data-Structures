//class for implementing a binary heap tree using an array
//used to implement a max heap filled from left to right
class BinaryHeap{
	constructor(){
		this.items = [];
	}
	
	//function to test if the heap is empty
	heapEmpty(){
		return this.items.length() == 0;
	}
	
	//function to return the root of the tree
	root(){
		if(this.heapEmpty()){
			console.log("Tree is Empty");
		}
		else{
			return this.items[0];
		}
	}
	
	//function to return the leas item in the tree
	lastNode(){
		if(this.heapEmpty()){
			console.log("Tree is Empty");
		}
		else{
			return this.items[this.items.length() - 1];
		}
	}
	
	//function to insert node in the tree
	insertNode(data){
		this.push(data);
		var index = this.items.length() - 1;
		this.bubbleUp(data, index);
	}
	
	//bottom up function to place nodes in order
	bubbleUp(data, child){
		if(data == this.items[0]){
			console.log("element is root");
		}
		else if(this.items[child] > this.items[parent]){
			var parent = Math.round(child/2);
			this.swap(child, parent)
			child = parent;
			this.bubbleUp(this.items[parent], parent)
		}
	}
	
	//function to swap items in the heap
	swap(child, parent){
		var temp = this.items[child];
		this.items[child] = this.items[parent];
		this.items[parent] = temp;
	}
	
	//function to delete nodes from the tree
	deleteNode(data){
		for(var i = 0; i <= this.items.length-1; i++){
			if(this.items[i] == data){
				this.items[i] = 0;
				this.bubbleUp(data, i);
				this.bubbleDown(data, i);
				
			}
		}
	}
	
	//top down function to place nodes in the correct order 
	bubbleDown(data, i){
		//no children 
		if(i+1 > this.items.length-1){
			console.log("node has no children");
		}
		//one child
		else if(i+2 > this.items.length-1){
			if(this.items[i] < this.items[i+1]){
				this.swap(this.items[i+1], this.items[i]);
			}
		}
		//two children
		else{
			if(this.items[i] < this.items[i+1] && this.items[i+1] > this.items[i+2]){
				this.swap(this.items[i+1], this.items[i]);
				bubbleDown(this.items[i+1], i+1);
			}
			else if(this.items[i]<this.items[i+2] && this.items[i+1] < this.items[i+2]){
				this.swap(this.items[i+2], this.items[i]);
				bubbleDown(this.items[i+2], i+2);
			}
		}
	}
}