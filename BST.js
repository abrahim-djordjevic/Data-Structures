//class for implementing nodes in a binary search tree
class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

//class for implementing a binary search tree
class BST{
	constructor(){
		this.root = null;
	}
	
	//helper function for creating a node to be inserted into the tree
	insert(data){
		var newNode = new Node(data);
		if(this.root == null){
			this.root = newNode;
		}
		else{
			this.insertNode(this.root, newNode);
		}
	}
	
	//function to insert a node in the correct position within the tree
	insertNode(node, newNode){
		if(newNode.data < node.data){
			if(node.left == null){
				node.left = newNode;
			}
			else{
				node = node.left;
				this.insertNode(node, newNode);	
			}
		}
		else{
			if(node.right == null){
				node.right = newNode;
			}
			else{
				node = node.right;
				this.insertNode(node, newNode);
			}
		}
	}
	
	//helper function that calls the removeNode method
	remove(data){
		this.root = this.removeNode(this.root, data);
	}
	
	//function to remove nodes
	removeNode(node, data){
		if(node == null){
			return null;
		}
		else if(data > node.data){
			node.right = this.removeNode(node.right, data);
			return node;
		}
		else if(data < node.data){
			node.left = this.removeNode(node.left, data);
			return node;
		}
		//node is similar to data
		else{
			//for node with no children
			if(node.left == null && node.right == null){
				node = null;
				return node;
			}
			//for node with one child
			else if(node.left == null){
				node = node.right;
				return node;
			}
			else if(node.right == null){
				node = node.left;
				return node;
			}
			//for nodes with two children
			else{
				var temp = this.findSmallestNode(node.right);
				node.data = temp.data;
				node.right = this.remove(node.right, temp.data)
				return node;
			}
			
		}
	}
	
	//function for finding smallest noe within a tree
	findSmallestNode(node){
		if(node.left == null){
			return node;
		}
		else{
			node = node.left;
			this.findSmallestNode(node.left);
		}
	}
	
	//function for searching the tree
	searchTree(data, node){
		if(this.root == null){
			return false;
		}
		else if(data == node.data){
			return true;
		}
		else if(data < node.data){
			node = node.left;
			this.searchTree(data, node);
		}
		else{
			node = node.right;
			this.searchTree(data, node);
		}
	}
	
	//preorder traversal
	preorderTraversal(node){
		if(node != null){
			console.log(node.data);
			this.preorderTraversal(node.left);
			this.preorderTraversal(node.right);
		}
	}
	
	//postorder traversal
	postorderTraversal(node){
		if(node != null){
			this.postorderTraversal(node.left);
			this.postorderTraversal(node.right);
			console.log(node.data);
		}
	}
	
	//inorder traversal
	inorderTraversal(node){
		if(node != null){
			this.inorderTraversal(node.left);
			console.log(node.data);
			this.inorderTraversal(node.right);
		}
	}
}