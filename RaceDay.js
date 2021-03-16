//randomly assign race numbers
let raceNumber = Math.floor(Math.random() * 1000);

//indicates if a runner registered early or not
let earlyReg = false;

//runner's age to determine which cohort they run in
let runnerAge = 18;
//assign premium race number to adults registering early
if (earlyReg === true && runnerAge >18){
  raceNumber = raceNumber + 1000;
};

//assign race start times based on registration status and age
if(earlyReg === true && runnerAge>18){
  console.log(`Your start time is 0930 and your race number is ${raceNumber}.`)
} else if (earlyReg === false && runnerAge>18){
    console.log(`Your start time is 1100 and your race number is ${raceNumber}.`)
} else if(runnerAge<18){
    console.log(`Your Youth Race start time is 1230 and your race number is ${raceNumber}.`)
} else {
    console.log(`Please see the registration desk`)
}
