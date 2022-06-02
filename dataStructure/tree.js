class TreeNode {
	constructor(value) {
		this.value = value
	}
}

class Tree {
	insert(value) {
		const node = new TreeNode(value);
		if (this.root == null) {
			this.root = node;
			return;
		}

		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (current.leftChild == null) {
					current.leftChild = node;
					break;
				}
				current = current.leftChild;
			}
			else {
				if (current.rightChild == null) {
					current.rightChild = node;
					break;
				}
				current = current.rightChild;
			}
		}
	}

	find(target) {
		let current = this.root;
		while (current != null) {
			if (target < current.value) {
				current = current.leftChild;
			}
			else if (target > current.value) {
				current = current.rightChild;
			}
			else {
				return true;
			}
		}
		return false;
	}

	traverse() {
		this.#traversePostOrder(this.root);
	}

	height() {
		return this.#getHeight(this.root);
	}

	min() {
		return this.#getMin(this.root);
	}

	equals(other) {
		return this.#equals(this.root, other.root);
	}

	isBinarySearchTree() {
		return this.#isBinarySearchTree(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
	}

	traverseLevelOrder() {
		for (let i = 0; i <= this.height(); i++) {
			this.getNodesAtDistance(i)
				.forEach(item => console.log(item));
		}
	}

	getNodesAtDistance(distance) {
		const list = [];
		this.#getNodesAtDistance(this.root, distance, list);
		return list;
	}

	#getNodesAtDistance(node, distance, list) {
		if (node == null) {
			return;
		}

		if (distance === 0) {
			list.push(node.value);
			return;
		}

		this.#getNodesAtDistance(node.leftChild, distance - 1, list);
		this.#getNodesAtDistance(node.rightChild, distance - 1, list);
	}

	#isBinarySearchTree(root, min, max) {
		if (root == null) {
			return true
		}
		if (root.value < min || root.value > max) {
			return false;
		}
		return this.#isBinarySearchTree(root.leftChild, min, root.value - 1)
			&& this.#isBinarySearchTree(root.rightChild, root.value + 1, max);

	}

	#equals(first, second) {
		if (first == null && second == null) {
			return true;
		}

		if (first != null && second != null) {
			return first.value === second.value
				&& this.#equals(first.leftChild, second.leftChild)
				&& this.#equals(first.rightChild, second.rightChild);
		}

		return false;
	}

	#getMin(root) {
		if (this.#isLeaf(root)) {
			return root.value;
		}
		let left = this.#getMin(root.leftChild);
		let right = this.#getMin(root.rightChild);
		return Math.min(Math.min(left, right), root.value);
	}

	#isLeaf(node) {
		return node.leftChild == null && node.rightChild == null;
	}

	#getHeight(root) {
		if (root == null) {
			return -1;
		}

		if (this.#isLeaf(root)) {
			return 0;
		}

		return 1 + Math.max(this.#getHeight(root.leftChild), this.#getHeight(root.rightChild));
	}

	#traversePreOrder(root) {
		if (root == null) {
			return;
		}

		console.log(root.value);
		this.#traversePreOrder(root.leftChild);
		this.#traversePreOrder(root.rightChild);

	}

	#traverseInOrder(root) {
		if (root == null) {
			return;
		}

		this.#traverseInOrder(root.leftChild);
		console.log(root.value);
		this.#traverseInOrder(root.rightChild);

	}

	#traversePostOrder(root) {
		if (root == null) {
			return;
		}

		this.#traversePostOrder(root.leftChild);
		this.#traversePostOrder(root.rightChild);
		console.log(root.value);

	}
}

function main() {
	const tree = new Tree();
	tree.insert(7);
	tree.insert(4);
	tree.insert(9);
	tree.insert(1);
	tree.insert(6);
	tree.insert(8);
	tree.insert(10);

	tree.traverseLevelOrder();


}


main();
