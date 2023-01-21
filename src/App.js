import './App.css';

import GridLines from 'react-gridlines';
import { useState } from 'react';
import Select from 'react-select';
import { AppView } from './App_view';

function App() {
  

  const [type,settype]=useState("");
  const options=[
    {value:"BST",label:"Binary Search Tree"},
    {value:"AVL",label:"AVL  Tree"},
    {value:"TRIE",label:"Trie"},
    {value:"RBT",label:"Red Black Tree"},
    {value:"Heap",label:"Binary MaxHeap"}
  ];
  console.log(type.value);
  return (
    <>
    <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
                
                <div className="container align-items-center justify-content-center" style={{width:800,height:700,overflow:'scroll'}}>
                <Select styles={{width:'100%'}} className="form-control text-danger bg-success" options={options} value={type} onChange={settype}/>
                <AppView type={type.value}/>
                </div>
            </GridLines>
    </>
  );


  
}



export default App;
