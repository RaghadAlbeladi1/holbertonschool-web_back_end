export default function cleanSet (set,startString){
    if (typeof startString !== 'string' || startString.length < 1){
        return ''
    }
    return Array.from(set)
    .filter(elm => elm.startsWith(startString))
    .map(elm => elm.slice(startString.length))
    .join("-")
}
