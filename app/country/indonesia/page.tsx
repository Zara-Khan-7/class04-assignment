import Back from "@/app/Component1/page";
export default function Indonesia (){
    const indonesia = {
        name:"Indonesia",
        capital:"Jakarta",
        population:283_487_931
     };
    
    return(
        <div>
               <h1><b>Indonesia🥋</b></h1>
               <ol>
                <li><u>NAME:</u> {indonesia.name}</li><br></br>
                <li><u>CAPITAL:</u> {indonesia.capital}</li><br></br>
                <li><u>POPULATION:</u> {indonesia.population}</li>
               </ol>
               <Back/>
        </div>
    )
}
