const accountId=2405263;
let accountEmail="anurag@gmail.com";
let accountPassword="12345";
let accountCity1="Bengaluru";
let accountCity2;
console.log("Your account ID is =: "+accountId);
///TABLE FORMAT PRINTING//******/
console.table([accountId,accountPassword,accountEmail,accountCity1,accountCity2]);


let score=33;
let newScore=String(score);
console.log(newScore);
console.log(typeof(newScore));
console.log(typeof(score));
let newBoolean=Boolean(score);
console.log(newBoolean);
let score2;     //check for undefined sine variable is not assigned/initialised to a value
console.log(score2);
let isLoggedIn="YES";
let isLogged=Boolean(isLoggedIn);
console.log(isLogged);
