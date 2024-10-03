import Back from "@/app/Component1/page";
export default function Pakistan (){
    const pakistan = {
        name:"Pakistan",
        capital:"Islamabad",
        population:251_269_164,
     };
    
    return(
        <div>
               <h1><b>Pakistan 📿</b></h1>
               <ol>
                <li><u>NAME:</u> {pakistan.name}</li><br></br>
                <li><u>CAPITAL:</u> {pakistan.capital}</li><br></br>
                <li><u>POPULATION:</u> {pakistan.population}</li>
               </ol>
               <Back/>
        </div>
    )
}
