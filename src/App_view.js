
import { BST } from './bst';
import { AVL } from './avl';
import { TRIE } from './trie';
import { RBT } from './rbt';
import { HEAP } from './heap';

export function AppView(props) {
  
  
    const {type}=props;
    console.log(type);
    if(type==="BST"){
         return <BST/>;
        }
        else if(type==="AVL") {
         return   <AVL/>
        }
        else if(type==="TRIE") {

   return <TRIE/>
        }
        else if(type==="RBT") {
           return  <RBT/>
        }
        else if(type==="Heap") {
            return <HEAP/>
        }
}