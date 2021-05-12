var input ="Why";
let lower = input.toLowerCase()
const letters = ['a', 'e', 'i', 'o', 'u'];
let counter = 0;

//looping through user input
for(y of lower){
    //looping through letter array
    for(x in letters ){
        //console.log(`${x}`)
        if(y == letters[x]) counter++;
    }
}

console.log(counter)