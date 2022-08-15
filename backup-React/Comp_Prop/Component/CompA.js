import CompB from "./CompB"
let CompA=(props)=>{
let msg="I am Sushmitha N Gowda"
let Get_Detailss={
    id:32,
    Role:"Developer",
    Salary:70000,
}
    return(
        <div>
            <h1>Component A </h1>
            
            <hr/>
            <CompB Massege={msg} Details={Get_Detailss}/>
        </div>
    )
}
export default CompA