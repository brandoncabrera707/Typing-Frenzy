window.addEventListener("load",(async function(){let e,t;try{const n=await fetch("https://typing-frenzy.onrender.com/db/random");if(!n.ok)throw new Error("Error getting data");const o=await n.json();e=o.passage,t=o.author;const l=document.getElementById("textPassage");e.split("").forEach((e=>{const t=document.createElement("span");t.textContent=e,l.appendChild(t)})),document.getElementById("authorBox").textContent=`By: ${t}`;const r=l.textContent.split(" "),a=l.textContent.split(""),s=document.getElementById("typingBox");let c=0,i=[],d=!1,y=.7*a.length,u=0,p=0,g=0,k=!0,m=0,f=0,h=!0;const C=document.getElementById("timerDisplay"),b=document.getElementById("wpmDisplay");s.addEventListener("input",(function(e){document.querySelectorAll("span"),i.length===r.length&&i.join(" ")===r.join(" ")&&(s.style.backgroundColor="transparent",s.disabled=!0,y=0,s.remove())})),s.addEventListener("keydown",(function(e){if("Shift"!=e.key&&"CapsLock"!=e.key&&1==k){"Backspace"!=e.key&&g++;let t,n=0;d||(d=!0,TimeInterval=setInterval((function(){if(y>0){y--;let e=Math.floor(y/60),t=y-60*e;C.innerHTML=t<10?`${e}:0${t.toFixed(0)}`:`${e}:${t.toFixed(0)}`}else clearInterval(TimeInterval),clearInterval(t),C.innerHTML="Time's up!",s.disabled=!0}),1e3),t=setInterval((function(){let e=.7*a.length;n=e-y;let t=u/5/(n/60);t>=0&&(b.innerHTML=`WPM: ${t.toFixed(0)}`)}),2500)),function(e){s.value;const t=document.querySelectorAll("span");if(console.log(t.length),"Backspace"===e.key||" "===e.key||!e.repeat)if("Backspace"===e.key&&c>f&&""!==s.value)!function(e){h=!0,e[c].style.color="black",e[c].style.backgroundColor="transparent",s.style.backgroundColor="transparent",c--;for(let t=c;t<e.length;t++)e[t].style.color="black",e[t].style.backgroundColor="transparent",s.style.backgroundColor="transparent"}(t);else if(h&&e.key===a[c]&&""!==e.repeat){c++,u++;for(let e=1;e<=c;e++)t[e-1].style.color="#A8DADC",s.style.backgroundColor="transparent";m=0,h=!0}else"Backspace"!=e.key&&""!==e.repeat&&(c<t.length&&(t[c].style.color="black",t[c].style.backgroundColor="#F4A5AE",s.style.backgroundColor="transparent"),h=!1,c++)}(e),function(e){if(" "===e.key&&k){const e=s.value.trim().split(" ");e[e.length-1]===r[p]&&(i.push(e[e.length-1]),s.value="",p++,f=c)}}(e)}}))}catch(e){throw new Error(e)}}));