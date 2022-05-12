let date= new Date();
console.log(date);

const days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let weekday= days[date.getDay()];
// document.write(weekday);
let hour;
console.log();
if(date.getHours()>12){
    hour= date.getHours() % 12;
}
else{
    hour= date.getHours();
}
// document.write(hour);
// document.write(date.getMinutes());

let phase;
if(date.getHours()>12){
    phase= "PM";
}
else{
    phase="AM";
}
// document.write(phase);
document.getElementById('weekday').innerHTML= weekday;
document.getElementById('hours').innerHTML= hour;
document.getElementById('minutes').innerHTML= date.getMinutes();
document.getElementById('phase').innerHTML= phase;
document.getElementById('seconds').innerHTML= date.getSeconds();
