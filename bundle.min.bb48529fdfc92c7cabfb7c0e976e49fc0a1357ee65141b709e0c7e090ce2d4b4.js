;function initRedirect(){if(location.hostname.search("www.merza.is")!=0){var path;if(location.pathname.lastIndexOf("/",0)===0){path=location.pathname;}else{path="/"+location.pathname;}
location.href="https://www.merza.is"+path+location.search+location.hash;}}
window.addEventListener("load",initRedirect,true);;function SysAdmDay(t){let lD=new Date(t,6,31);switch(lD.getDay()){case 6:lD.setDate(lD.getDate()-1);break;case 5:break;default:lD.setDate(lD.getDate()-7);while(lD.getDay()<5)lD.setDate(lD.getDate()+1);break;}
return lD;}
function initSysAdm(){var sysadm=document.getElementById('sysadm');if(sysadm==null){var node=document.createElement("SPAN");var textnode=document.createTextNode("SysAdminDay is on the last Friday of July");node.setAttribute("id","sysadm");node.appendChild(textnode);document.getElementsByTagName("main")[0].appendChild(node);}
var n=new Date();var td=SysAdmDay(n.getFullYear());var nh=n.getHours();if(n.getTime()>td.getTime()){td=SysAdmDay(n.getFullYear()+1)}
var remain=Math.ceil((td.getTime()-n.getTime())/86400000);var sd=td.getDate();an=td.getFullYear()-1999;if(remain>206)
document.getElementById('sysadm').innerHTML='<a href="https://sysadminday.com/" target="_blank">SysAdmin Day</a> #'+an+' is on '+sd+(sd==31?"st":"th")+' July '+td.getFullYear()+' (in '+remain+' day'+(remain>1?"s":"")+')!';else if(remain>1)
document.getElementById('sysadm').innerHTML=''+remain+' day'+(remain>1?"s":"")+' left until <a href="https://sysadminday.com/" target="_blank">SysAdmin Day</a>!';else if(remain==1)
document.getElementById('sysadm').innerHTML='Tomorrow is <a href="https://sysadminday.com/" target="_blank">SysAdmin Day</a>!';else
document.getElementById('sysadm').innerHTML='Happy <a href="https://sysadminday.com/" target="_blank">SysAdmin Day</a>! Don\'t forget to show your appreciation!🍺';}
window.addEventListener("load",initSysAdm,true);