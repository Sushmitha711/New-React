let INCRS="INCRS"
let DECRS="DECRS"

let incr_Action=()=>{
    return {type:INCRS}
}
let decr_Action=()=>{
    return {type:DECRS}
}
export {INCRS,DECRS,incr_Action,decr_Action}