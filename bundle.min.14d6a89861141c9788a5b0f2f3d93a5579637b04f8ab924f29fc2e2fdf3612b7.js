async function getBOFH(){var bofh=document.getElementById('bofh');if(bofh!=null){const url="/posts/bofh/excuses";try{const response=await fetch(url);if(!response.ok){throw new Error(`Response status: ${response.status}`);}
const body=await response.text();var lines=body.split('\n');var line=lines[Math.floor(Math.random()*lines.length)];if(typeof TypeIt!="undefined"){new TypeIt("#bofh",{strings:line,speed:50,waitUntilVisible:true,loop:false,lifelike:true,breakLines:true,cursor:false,}).go();}else{bofh.innerHTML=line;}}catch(error){console.error(error.message);}}}
window.addEventListener("load",getBOFH,true);;;const prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)");var remark_config={host:"https://remark42.merza.is",site_id:"remark",components:["embed"],max_shown_comments:20,show_email_subscription:false,simple_view:true,no_footer:true,theme:(prefersDarkScheme.matches)?"dark":"light"};function initRemark42(){var remarkEmbed=document.getElementById('remark42');if(remarkEmbed!=null){!function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);}}
window.addEventListener("load",initRemark42,true);;function TowelDay(t){let lD=new Date(t,4,25);return lD;}
function SysAdmDay(t){let lD=new Date(t,6,31);switch(lD.getDay()){case 6:lD.setDate(lD.getDate()-1);break;case 5:break;default:lD.setDate(lD.getDate()-7);while(lD.getDay()<5)lD.setDate(lD.getDate()+1);break;}
return lD;}
function initDayCounters(){var n=new Date();var nh=n.getHours();var sysadm=document.getElementById('sysadm');if(sysadm!=null){var td=SysAdmDay(n.getFullYear());if(n.getTime()>td.getTime()){td=SysAdmDay(n.getFullYear()+1)}
var remain=Math.ceil((td.getTime()-n.getTime())/86400000);var sd=td.getDate();an=td.getFullYear()-1999;if(remain>206)
document.getElementById('sysadm').innerHTML='SysAdmin Day #'+an+' is on '+sd+(sd==31?"st":"th")+' July '+td.getFullYear()+' (in '+remain+' day'+(remain>1?"s":"")+')!';else if(remain>1)
document.getElementById('sysadm').innerHTML=''+remain+' day'+(remain>1?"s":"")+' left until SysAdmin Day!';else if(remain==1)
document.getElementById('sysadm').innerHTML='Tomorrow is SysAdmin Day!';else
document.getElementById('sysadm').innerHTML='Happy SysAdmin Day! Don\'t forget to show your appreciation!🍺';}
var towelday=document.getElementById('towelday');if(towelday!=null){var td=TowelDay(n.getFullYear());if(n.getTime()>td.getTime()){td=TowelDay(n.getFullYear()+1)}
var remain=Math.ceil((td.getTime()-n.getTime())/86400000);if(remain>1)
document.getElementById('towelday').innerHTML=''+remain+' day'+(remain>1?"s":"")+' left until Towel Day!';else if(remain==1)
document.getElementById('towelday').innerHTML='Tomorrow is Towel Day!';else
document.getElementById('towelday').innerHTML='Today is Towel Day. Don\'t forget your towel!👍';}}
window.addEventListener("load",initDayCounters,true);;async function getYourIP(){var checkip=document.getElementById('checkip');if(checkip!=null){const url="https://checkip.merza.is";try{const response=await fetch(url);if(!response.ok){throw new Error(`Response status: ${response.status}`);}
const body=await response.text();checkip.innerHTML=body;}catch(error){console.error(error.message);}}}
window.addEventListener("load",getYourIP,true);