import Back from "@/app/Component1/page";

export default function India (){
    const india = {
        name:"India",
        capital:"New Delhi",
        population:1_450_935_791
     };
    
    return(
        <div>
               <h1><b>India 🎆</b></h1>
               <ol>
                <li><u>NAME:</u> {india.name}</li><br></br>
                <li><u>CAPITAL:</u> {india.capital}</li><br></br>
                <li><u>POPULATION:</u> {india.population}</li>
               </ol>
               <Back/>
        </div>
    )
}
