var couuntdown = document.getElementById("countdown");
function tick () {

var date = document.getElementById("dateshead");

var time_paragraph = document.getElementById("timeparagraph");


const timer = new Date();
const year = timer.getFullYear();
const month = String(timer.getMonth() + 1).padStart(2, '0');
const day = String(timer.getDate()).padStart(2, '0');

const displaydate = `current day: ${year}-${month}-${day}`;
date.textContent = displaydate;

const hour = String(timer.getHours()).padStart(2, '0');
const minute = String(timer.getMinutes()).padStart(2, '0');
const second = String(timer.getSeconds()).padStart(2, '0');

const displaytime = `${hour}:${minute}:${second}`;
time_paragraph.textContent = displaytime;
console.log(timer);

var date = document.getElementById("dateshead");
var constantdate = document.getElementById("constantdate");
var time_paragraph = document.getElementById("timeparagraph");
var remaindate = document.getElementById("remaindate");

const timerc = new Date("2023-12-15");
const yearc = timerc.getFullYear();
const monthc = String(timerc.getMonth() + 1).padStart(2, '0');
const dayc = String(timerc.getDate()).padStart(2, '0');

const displaydatec = `Constant day: ${yearc}-${monthc}-${dayc}`;
constantdate.textContent = displaydatec;

const difference = timerc.getTime() - timer.getTime();
const tmonth = difference / (1000 * 60 * 60 * 24 * 30);


const daysInMonth = 30;
const hoursInDay = 24;
const minutesInHour = 60;
const secondInmiute = 60;

const totalDays = Math.floor(tmonth * daysInMonth);
const remainingDays = totalDays % daysInMonth;

const totalHours = Math.floor(tmonth * daysInMonth * hoursInDay);
const remainingHours = totalHours % hoursInDay;

const totalMinutes = Math.floor(tmonth * daysInMonth * hoursInDay * minutesInHour);
const remainingMinutes = totalMinutes % minutesInHour;

const totalseconds = Math.floor(tmonth * daysInMonth * hoursInDay * minutesInHour * secondInmiute);
const remainingseconds = totalseconds % secondInmiute;


const displayremain = `between the two years ${Math.floor(tmonth)} months -${remainingDays} days ${remainingHours}:${remainingMinutes}: ${remainingseconds}`;


remaindate.textContent = displayremain;

if(difference < 0)
{
    clearInterval(x);
    remaindate.textContent = "happy New year";

}

couuntdown.appendChild(constantdate);
couuntdown.appendChild(remaindate);



couuntdown.appendChild(date);

couuntdown.appendChild(time_paragraph);

}
setInterval(tick, 1000);


