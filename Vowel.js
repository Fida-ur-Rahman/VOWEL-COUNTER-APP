// CREATE A FUNCTION USING THE FUCNCTION KEYWORD THAT TAKES A STRING AS AN ARGUMENT
// AND RETURN THE NUMBER OF VOWLEL IN STRING.

function vowelcount(str){
    let count = 0;
    for (const char of str){
        if (char==="a" || char==="e" || char==="i" || char==="o" ||  char==="u")
            count++;
    }
    return count;
}
vowelcount("Fida ur Rahman");

// CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK.
const countvowl = (str)=>{
        let count = 0;
    for (const char of str){
        if (char==="a" || char==="e" || char==="i" || char==="o" ||  char==="u")
            count++;
    }
    return count;
}
