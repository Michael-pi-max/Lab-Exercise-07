  const hr = document.querySelector('.hr');
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');
  setInterval(()=>{
      let today= new Date();
      let hours = today.getHours()*30;
      let mins = today.getMinutes()*6;
      let secs = today.getSeconds()*6;

      hr.style.transform = `rotateZ(${hours+(mins/12)}deg)`;
      min.style.transform = `rotateZ(${mins}deg)`;
      sec.style.transform = `rotateZ(${secs}deg)`;
  })
