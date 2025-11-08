export default function updateUniqueItems (dict){
    if (!(dict instanceof Map)){
        throw new Error('Cannot process')
    }
    for (const [key,value] of dict) {
        if (value === 1){
            dict.set(key,100)
        }
    }
}
