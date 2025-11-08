export default function getStudentIdsSum (arr){
    const summ = arr.reduce((sum,elm)=>sum += elm.id,0)
    return summ
}
