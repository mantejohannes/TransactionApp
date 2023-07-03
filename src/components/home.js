import AddTransaction from "./add";
import DisplayTransaction from "./displayTransaction";


function Home (props){          {/* passing data using props*/}
    return(

        <div>
    <DisplayTransaction transactions={props.transactions}/>   
      <AddTransaction add={props.add}/>

        </div>
    )

}

export default Home ;