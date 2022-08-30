const CHANGE="CHANGE"
const UPDATE='UPDATE'

let changeAction=()=>{
   return {type:CHANGE}
   //console.log("hello test 1")
}
let updateAction=()=>{
    return {type:UPDATE}
}
export {CHANGE,UPDATE,changeAction,updateAction}