export function firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function notesCopy(arr){
    let notes = new Array()
    for(let i of arr){
        console.log(i)
        notes.push(arr[i])
    }
    return notes
}