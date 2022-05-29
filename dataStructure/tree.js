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

	const tree2 = new Tree();
	tree2.insert(7);
	tree2.insert(4);
	tree2.insert(9);
	tree2.insert(1);
	tree2.insert(6);
	tree2.insert(8);
	tree2.insert(10);

	console.log(tree.equals(tree2));
}


main();
