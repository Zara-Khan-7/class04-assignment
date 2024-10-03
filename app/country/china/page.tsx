import Back from "@/app/Component1/page";

export default function China (){
    const china = {
            name:"China",
            capital:"Beijing",
            population:1_419_321_278,
     };
    return(
        <div>
               <h1><b>China 🐲</b></h1>
               <ol>
                <li><u>NAME:</u> {china.name}</li><br></br>
                <li><u>CAPITAL:</u> {china.capital}</li><br></br>
                <li><u>POPULATION:</u> {china.population}</li>
               </ol>
               <Back/>
        </div>
    )
}