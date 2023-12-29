const resume = {
    name : "Balasivam",
    profession : "IT",
    address : "no 4 Turaba street Turkey",
    city : "Turkey",
    Mobile: "+90 9843123300",
    Hobbies: "Writing Story"
}
const data = JSON.stringify(resume)
// console.log(data);
const array1 = Object.values(resume)
const array2 = ["name","profession","address","city","Mobile","Hobbies"]
// For Loop
console.log("For Loop");
for(let ind = 0; ind < array1.length; ind++) {
        console.log(
             Object.keys(resume)[ind],":",array1[ind]
        )
    
}
// For in 
console.log("For in");
for(const key in resume){
     console.log(`${key}:`,resume[key])
}
// For of
console.log("For of");
for(const key of array2){
    console.log(`${key}:`,resume[key])
}
// For Each
console.log("For Each");
Object.entries(resume).forEach(([data, value]) => {
    console.log(`${data}: ${value}`);
});