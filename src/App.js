import './App.css';
import AddTransaction from './components/add';
import DisplayTransaction from './components/displayTransaction';
import Home from './components/home';

import { useState } from 'react';

function App() {


 
const [transactions, setTransactions]=useState ([]);

const add= ((transactionItem, amount, transactionType) =>{
  setTransactions ((transactions)=>[...transactions, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);
   
  
  console.log(transactions);
})


  return (
    <div className="container">
     
    <Home add={add} transactions= {transactions} />


        {/*
        or       <DisplayTransaction transactions={transactions}/>
               <AddTransaction add={add}/>
      */}


    </div>
  );
}

export default App;
