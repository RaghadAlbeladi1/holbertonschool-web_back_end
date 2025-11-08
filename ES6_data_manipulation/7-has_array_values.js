export default function hasValuesFromArray (aset,arr){
    
    for (const elm of arr) {
            if (aset.has(elm)) {
                continue;
            }else{
                return false
            }
        }
    return true
}
