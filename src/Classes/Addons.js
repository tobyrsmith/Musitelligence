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
export function frequent(array){
    let counts = {}, 
        compare = 0,
        mostFrequent
    for(var i = 0, len = array.length; i < len; i++){
        var member = array[i];
        
        if(counts[member] === undefined){
            counts[member] = 1;
        }else{
            counts[member] = counts[member] + 1;
        }
        if(counts[member] > compare){
              compare = counts[member];
              mostFrequent = array[i];
        }
     }
   return mostFrequent;
}