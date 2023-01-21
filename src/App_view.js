
import GridLines from 'react-gridlines';
import { AVLTree, BinarySearchTree, RedBlackTree, useBinarySearchTree,Trie,MaxHeap, useAVLTree, useRedBlackTree, useHeap, useTrie } from 'react-tree-vis';
import { useState } from 'react';
import { BST } from './bst';
import { AVL } from './avl';
import { TRIE } from './trie';
import { RBT } from './rbt';
import { HEAP } from './heap';

export function App_view(props) {
  

  
    const {type}=props;
    console.log(type);
    if(type=="BST"){
         return <BST/>;
        }
        else if(type=="AVL") {
         return   <AVL/>
        }
        else if(type=="TRIE") {

   return <TRIE/>
        }
        else if(type=="RBT") {
           return  <RBT/>
        }
        else if(type=="Heap") {
            return <HEAP/>
        }
}