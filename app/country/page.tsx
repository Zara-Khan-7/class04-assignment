import Link from "next/link"
export default function Countries_name(){
  if(!Countries_name){
    return(
      <div>
        <h1>Country Not Found</h1>
      </div>
    )
  };
  return(
    <div>
      <h1>List of National Capitals by Population</h1>
      <p>This is a list of national capitals, ordered according to population.</p>
      <p>The population statistics given refer only to the official capital area, and do not include the wider metropolitan/urban district.</p>
      <ol>
      <li><Link href="/country/india">India</Link></li><br></br>
      <li><Link href="/country/china">China</Link></li><br></br>
      <li><Link href="/country/usa">United States</Link></li><br></br>
      <li><Link href="/country/indonesia">Indonesia</Link></li><br></br>
      <li><Link href="/country/pakistan">Pakistan</Link></li><br></br>
      </ol>
    </div>
  )
}
