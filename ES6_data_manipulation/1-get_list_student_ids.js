export default function getListStudentIds(arr){

    if (!Array.isArray(arr)){
        return [];
    }
    
    const nArr = arr.map(elm => elm.id)
    return nArr
}
