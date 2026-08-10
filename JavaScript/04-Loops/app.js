// for loop => Best when you know how many times you want to iterate.
for(let i = 1; i <= 5; i++){
    console.log(i)
}

// while loop => Best when repetition depends mainly on a condition.
let i = 6;
while( i <= 10){
    console.log(i)
    i++
}

// do...while loop => Runs at least once, even if the condition is initially false.
let n = 2;
do{
    console.log(n);
    n++;
} while (n <= 7)

    //for...of => Very useful for arrays/iterables.
    let names = ["athiya", "nazmin","pradeep","ishant"];
    for(let name of names){
        console.log(names)
    }

    //for...in => Generally used for object properties.
    let user ={
        name:"vivek",
        age:24,
        course:"bca"
    }
    for(let key in user){
        console.log(key, user[key]);
    }