import Back from "@/app/Component1/page";
export default function USA (){
    const usa = {
        name:"United states",
        capital:"Washington D.C",
        population:345_426_571,
     };
    
    return(
        <div>
               <h1><b>United States 💸</b></h1>
               <ol>
                <li><u>NAME:</u> {usa.name}</li><br></br>
                <li><u>CAPITAL:</u> {usa.capital}</li><br></br>
                <li><u>POPULATION:</u> {usa.population}</li>
               </ol>
               <Back/>
        </div>
    )
}
