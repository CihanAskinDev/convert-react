import { useState } from "react"
export default function Converter () {
  const [money, setMoney]= useState(0)
   const [currency, setCurrency] = useState("USD")
   const [currencytwo, setCurrencytwo] = useState("Won")
   const convertionTable = {
    Won: 1318.11
   }
   const findingBase = {
    Won: 0.00076
   }
   function swap (){
    const mon1 = currencytwo;
    setCurrencytwo(currency)
    setCurrency(mon1)
    console.log(currency + " " + currencytwo)
   }
   function inputCurrency (){
   }
    const value = (e) => {
     e.preventDefault();
     let result = 0;
     const converting = e.target.input.value
     const namemon = currency 
     result = (converting * (convertionTable.Won))
     if(currency !== "USD"){
    let Math1 = findingBase[currency]
    console.log(currency) 
    console.log(Math1)
    result = (converting * Math1)
     }
     setMoney(result);
    }

 return (
    <section>
     <form onSubmit={value}>
     <h2>{currency} to {currencytwo}</h2>  
        <input type="text" name="input" />
       <input type="text" name="input" />
       <input type="submit" value="convert" />
       <button onClick={swap}>:arrows_counterclockwise:</button>
       <p>{money} {currencytwo}</p>
     </form>
 </section>

    )
}