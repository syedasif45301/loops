/*Use for loop to iterate from 0 to 100 and print
only even numbers. */

console.log("Printing only even numbers from 0 to 100:");
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

/*Use for loop to iterate from 0 to 100 and print
only odd numbers */

console.log("Printing only odd numbers from 0 to 100:");
for(let i=1;i<=100;i=i+2){
    if(i%2!=0){
        console.log(i);
    }
}


/* Use for loop to iterate from 0 to 100 and print the
sum of all numbers*/

console.log("sum of all numbers from 0 to 100:");
let sum=0;
for(let i=0;i<=100;i++){
    sum=sum+i;
    
}
console.log(sum);


/*Use for loop to iterate from 0 to 100 and print the
sum of all evens and the sum of all odds. */

console.log("sum of all evens and the sum of all odds from 0 to 100:");
let sum1=0;
let sum2=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        sum1=sum1+i;
    }

    else{
        sum2=sum2+i;
    }
}
console.log("sum of even numbers:",sum1);
console.log("sum of odd numbers:",sum2);


console.log("sum of all evens and all odds in an array:")
let arr=[sum1,sum2];
console.log(arr);



let countries=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"];
let countrieslength=[];
var empty="";
var countrylength=[];
for(let i=0;i<countries.length;i++){
countrieslength.push(countries[i].length);
console.log(countries[i].length);

if(empty.length<countries[i].length){
    empty=countries[i];
}


if(countries[i].length==5){
    countrylength.push(countries[i]);
}

}
console.log(countrieslength);
console.log(empty);
console.log(countrylength);


for(let i=countries.length-1;i>=0;i--){
    console.log(countries[i]);
}


