function SysAdmDay(t){let lD=new Date(t.getFullYear(),6,31);switch(lD.getDay()){default:lD.setDate(lD.getDate()-7);while(lD.getDay()<5){lD.setDate(lD.getDate()+1);}
return lD;break;case 5:return lD;break;case 6:return lD.setDate(lD.getDate()-1);break;}}
var n=new Date();var td=SysAdmDay(n);var nh=n.getHours();if(n.getTime()>td.getTime()){td=SysAdmDay(new Date(n.getFullYear()+1,6,31))}
var remain=Math.ceil((td.getTime()-n.getTime())/86400000);var sd=td.getDay();an=td.getFullYear()-1999;if(remain>206)
sysadm.innerHTML='SysAdminDay #'+an+' is on '+td.getDate()+(sd=31?"st":"th")+' July '+td.getFullYear()+' (in '+remain+' day'+(remain>1?"s":"")+')!';else if(remain>1)
sysadm.innerHTML=''+remain+' day'+(remain>1?"s":"")+' left until SysAdmin Day!';else if(remain==1)
sysadm.innerHTML='Tomorrow is SysAdmin Day!';else
sysadm.innerHTML="Today is SysAdmin Day. Don't forget to show your appreciation!🍺";function setTheme(){if((typeof(localStorage)!=="undefined"))
switch(localStorage.getItem('theme')){default:case 'dark':document.documentElement.setAttribute('data-theme','dark');dark.innerHTML='Switch to the ☀️bright site';break;case 'light':document.documentElement.setAttribute('data-theme','light');dark.innerHTML='Switch to the 🌘 dark site';break;}}
function switchTheme(){if((typeof(localStorage)!=="undefined"))
switch(localStorage.getItem('theme')){default:case 'dark':localStorage.setItem('theme','light');dark.innerHTML='Switch to the 🌘 dark site';break;case 'light':localStorage.setItem('theme','dark');dark.innerHTML='Switch to the ☀️bright site';break;}
setTheme();}
window.onload=function(){setTheme();dark.addEventListener('click',switchTheme)};if('serviceWorker'in navigator){navigator.serviceWorker.register('/app/sw.js').then(function(){console.log("Service Worker Registered!");});}