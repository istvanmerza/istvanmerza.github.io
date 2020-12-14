if('serviceWorker'in navigator){navigator.serviceWorker.register('/app/sw.js').then(function(){console.log("Service Worker Registered!");});};function SysAdmDay(t){let lD=new Date(t,6,31);switch(lD.getDay()){case 6:lD.setDate(lD.getDate()-1);break;case 5:break;default:lD.setDate(lD.getDate()-7);while(lD.getDay()<5)lD.setDate(lD.getDate()+1);break;}
return lD;}
function initSysAdm(){var sysadm=document.getElementById('sysadm');if(sysadm==null){var node=document.createElement("SPAN");var textnode=document.createTextNode("SysAdminDay is on the last Friday of July");node.setAttribute("id","sysadm");node.appendChild(textnode);document.getElementsByTagName("main")[0].appendChild(node);}
var n=new Date();var td=SysAdmDay(n.getFullYear());var nh=n.getHours();if(n.getTime()>td.getTime()){td=SysAdmDay(n.getFullYear()+1)}
var remain=Math.ceil((td.getTime()-n.getTime())/86400000);var sd=td.getDate();an=td.getFullYear()-1999;if(remain>206)
document.getElementById('sysadm').innerHTML='SysAdminDay #'+an+' is on '+sd+(sd==31?"st":"th")+' July '+td.getFullYear()+' (in '+remain+' day'+(remain>1?"s":"")+')!';else if(remain>1)
document.getElementById('sysadm').innerHTML=''+remain+' day'+(remain>1?"s":"")+' left until SysAdmin Day!';else if(remain==1)
document.getElementById('sysadm').innerHTML='Tomorrow is SysAdmin Day!';else
document.getElementById('sysadm').innerHTML="Today is SysAdmin Day. Don't forget to show your appreciation!🍺";}
window.addEventListener("load",initSysAdm,true);;function setTheme(){if((typeof(localStorage)!=="undefined"))
switch(localStorage.getItem('theme')){default:case 'dark':document.documentElement.setAttribute('data-theme','dark');document.getElementById('dark').innerHTML='Switch to the ☀️ bright site';break;case 'light':document.documentElement.setAttribute('data-theme','light');document.getElementById('dark').innerHTML='Switch to the 🌘 dark site';break;}}
function switchTheme(){if((typeof(localStorage)!=="undefined"))
switch(localStorage.getItem('theme')){default:case 'dark':localStorage.setItem('theme','light');break;case 'light':localStorage.setItem('theme','dark');break;}
setTheme();}
function initTheme(){var theme=document.getElementById('dark');if(theme==null){var node=document.createElement("SPAN");var textnode=document.createTextNode("Switch to the 🌘 dark site");node.setAttribute("id","dark");node.setAttribute("title","Switch theme");node.appendChild(textnode);document.getElementsByTagName("main")[0].appendChild(node);}
setTheme();document.getElementById('dark').addEventListener('click',switchTheme)}
window.addEventListener("load",initTheme,true);