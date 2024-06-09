const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


const setDate = () => {
    const now = new Date();
    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;

    
    sec.innerHTML = `<h1>${getSecond}</h1>`;
    min.innerHTML = `<h1>${getMinute}</h1>`;
    hr.innerHTML = `<h1>${getHour}</h1>`;
    
    console.log(`${getHour} : ${getMinute} : ${getSecond}`)

}

setInterval(setDate, 1000)