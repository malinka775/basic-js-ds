const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.Root = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    return this.Root
    
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    if (!this.Root) {
      this.Root = new Node(data)
      return
    } 
    
    let current = this.Root

    
    while (current) {
      if (data === current.data) {
        return
      }
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data)
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = new Node(data)
          return
        }
        current = current.right
      }

    }


  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    return !!this.find(data)
  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    let current = this.Root

    while (current) {
      if (data === current.data) {
        break
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return current
  }

   remove(data) {
    //throw new NotImplementedError('Not implemented');

    this.Root = removeFromTree(this.Root, data)
    function removeFromTree(currentRoot, data) {
      if (currentRoot == null) {
        return null
      }

      if (data > currentRoot.data) {
        currentRoot.right = removeFromTree(currentRoot.right, data)
        return currentRoot
      } else if (data < currentRoot.data) {
        currentRoot.left = removeFromTree(currentRoot.left, data)
        return currentRoot
      } else {
        if ( currentRoot.left == null && currentRoot.right == null) {
          return null
        } 
        if (currentRoot.left == null) {
          currentRoot = currentRoot.right
          return currentRoot
        } 
        
        if ( currentRoot.right == null) {
          currentRoot = currentRoot.left
          return currentRoot
        }

        let maxInLeftSubtree = currentRoot.left
        while (maxInLeftSubtree.right) {
          maxInLeftSubtree = maxInLeftSubtree.right
        }
        currentRoot.data = maxInLeftSubtree.data
        currentRoot.left = removeFromTree( currentRoot.left, maxInLeftSubtree.data)

        return currentRoot

      }
    }

  }


  min() {
    //throw new NotImplementedError('Not implemented');
    let current = this.Root
    if (!current) {
      return null
    }
    while (current.left != null) {
      current = current.left
    }
    return current.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    let current = this.Root
    if (!current) {
      return null
    }
    while (current.right != null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};
