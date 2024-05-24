const clock=document.getElementById('clock')

// let date=new Date();
// date.toLocaleTimeString();   used to take current time-----------
// console.log(date.toLocaleTimeString())  try it 

// setInterval(function(){})     take like this


setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)


