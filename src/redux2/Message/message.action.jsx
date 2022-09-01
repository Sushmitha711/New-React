
const GM = 'GM'
const GN = 'GN'
//actions
let gmAction = () => {
       return { type: GM }
}
let gnAction = () => {
    return {
        type: GN
    }
}
export { GN, GM, gmAction, gnAction }