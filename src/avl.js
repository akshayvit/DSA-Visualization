import GridLines from 'react-gridlines';
import { AVLTree, useAVLTree } from 'react-tree-vis';
import { useState } from 'react';

export function AVL() {
    const {ref,insert,remove}=useAVLTree();
    const [insertValue1,setInsertValue1]=useState(0);
    const [removeValue1,setRemoveValue1]=useState(0);
    return (
      <>
      <div className='container-fluid justify-content-center bg-primary'>
      <input 
      type="number" className='form-control'
      onChange={(elem) => setInsertValue1(parseInt(elem.currentTarget.value))}
    />
    <button className='bg-success' onClick={() => insert(insertValue1)}>Insert</button>
    <br />
    <input
      type="number" className='form-control'
      onChange={(elem) => setRemoveValue1(parseInt(elem.currentTarget.value))}
    />
    <button className='bg-danger' onClick={() => remove(removeValue1)}>Remove</button>

      </div>
      <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
        
        <div className='panel' style={{width:800,height:700,overflow:'scroll'}}>
       
       <AVLTree treeStyles={{lineColor:'red',lineHoverColor:'orange',nodeFontColor:'white',nodeNullFontColor:'green',nodeBorder:'4px solid red',nodeBackgroundColor:'green',nodeShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',nodeHoverBackgroundColor:'blue',nodeHoverBorder:'pink'}} data={[1,2,3]} ref={ref}/>
        </div>
    </GridLines>
    </>
    );
}