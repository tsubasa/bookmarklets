javascript:(function(){'use strict';let n={};const p=(a)=>{const b=document.createElement("textarea");b.value=a;b.setAttribute("readonly","");b.style.position="absolute";b.style.left="-9999px";document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)};
class q{constructor(){this.b=new r;this.o=new t(".tableBody .dateRow");var a=this.o.getAll(!0),b=this.U();const d=[],k=[this.getYear(),this.getMonth()].join("-");a.forEach((a)=>{const b=[k,this.D(a[0])].join("-"),m=this.g(a[1]);let c=this.g(a[4]);c=b===this.V()&&null===c&&null!==m?this.T():c;this.K(b)&&(this.I(a[5])?d.push(this.b.Y(c)):this.J(a[5])?d.push(this.b.Z(m)):this.H(a[5])?d.push(this.b.X()):d.push(this.b.i(m,c)))});a=this.o.getAll();const l=[];a.forEach((a)=>{l.push([this.H(a[5])?"*":null,
this.I(a[5])?"*":null,this.g(a[1]),this.g(a[4]),this.J(a[5])?"*":null].join("\t"))});const f=document.createElement("button");f.innerText="\u30bf\u30a4\u30e0\u30ab\u30fc\u30c9\u3092\u52e4\u6020\u8868\u5f62\u5f0f\u3067\u30b3\u30d4\u30fc\u3059\u308b";f.style.marginBottom="5px";f.addEventListener("click",()=>{p(l.join("\n"));const a=document.createElement("span");a.innerHTML=" (\u30b3\u30d4\u30fc\u5b8c\u4e86\uff01\u52e4\u6020\u8868\u30a8\u30af\u30bb\u30eb\u306e\x3cb\x3eG5\u30bb\u30eb\x3c/b\x3e\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044)";
a.style.color="#f00";f.parentNode.insertBefore(a,f.nextElementSibling);setTimeout(()=>{a.parentNode.removeChild(a)},8E3)});const c=document.createElement("div"),h="\u30b3\u30a2 \u30b3\u30a2\u5916 \u65e5\u8a08 \u30da\u30ca\u30eb\u30c6\u30a3 \u6b8b\u696d \u6b20\u52e4 \u6709\u4f11".split(" "),e=[0,0,0,0,0,0,0],g=this.b.S();a=this.b.s;const u=b-d.length;d.forEach((a)=>{e[0]+=a[0]+a[1];e[1]+=a[2];e[2]+=a[3];e[3]+=a[4];e[4]+=a[5];e[5]+=a[4]===g&&0===a[2]?1:0;e[6]+=a[6]});c.innerHTML="[\u4eca\u6708\u306e\u60f3\u5b9a] ";
[g*b,(a-g)*b,a*b].forEach((a,b)=>{b&&(c.innerHTML+=", ");c.innerHTML+=`${h[b]}: ${a}`});c.innerHTML+=`, \u55b6\u696d\u65e5\u6570: ${b}\u65e5, \u6b8b\u308a: ${u}\u65e5`;b=d.length;c.innerHTML+="\x3cbr\x3e[\u672c\u65e5\u307e\u3067\u306e\u60f3\u5b9a] ";[g*b,(a-g)*b,a*b].forEach((a,b)=>{b&&(c.innerHTML+=", ");c.innerHTML+=`${h[b]}: ${a}`});c.innerHTML+="\x3cbr\x3e[\u73fe\u5728\u307e\u3067\u306e\u5b9f\u7e3e] ";e.forEach((a,b)=>{a=Math.round(100*a)/100;b&&(c.innerHTML+=", ");c.innerHTML+=`\x3cspan class\x3d"js${b}"\x3e${h[b]}: ${a}\x3c/span\x3e`});
g*b>Math.round(100*e[0])/100&&(c.querySelector(".js0").style.color="red");(a-g)*b>Math.round(100*e[1])/100&&(c.querySelector(".js1").style.color="red");a=document.createElement("div");a.style.clear="both";a.style.padding="5px 10px";a.appendChild(f);a.appendChild(c);document.querySelector(".timeCardHeader").appendChild(a);b=document.querySelector(".tableBodyWrapper");a=a.offsetHeight;b.style.top=b.style.top?`${parseInt(b.style.top.replace("px",""))+a}px`:"auto";b.style.height=b.style.height?`${parseInt(b.style.height.replace("px",
""))-a}px`:"auto"}U(){const a=this.o.getAll(),b=[this.getYear(),this.getMonth()].join("-");let d=0;a.forEach((a)=>{a=[b,this.D(a[0])].join("-");this.K(a)&&(d+=1)});return d}getYear(){return document.querySelector('input[type\x3d"hidden"][name\x3d"year"]').value}getMonth(){return`0${document.querySelector('input[type\x3d"hidden"][name\x3d"month"]').value}`.slice(-2)}G(){const a=new Date;return(new Date(a.getTime()-6E4*a.getTimezoneOffset())).toISOString()}V(){return this.G().slice(0,10)}T(){return this.G().slice(11,
16)}K(a){return/[1-5]/.test((new Date(a)).getDay())&&!n.hasOwnProperty(a)}H(a){return/\u4f11\u6687|\u6709\u7d66|\u6709\u4f11|\u5168\u4f11/.test(a)}I(a){return/[\u524d|AM|\uff21\uff2d]\u534a?\u4f11/i.test(a)}J(a){return/[\u5f8c|PM|\uff30\uff2d]\u534a?\u4f11/i.test(a)}D(a){return(a=a.match(/[0-1]?[0-9][/|-]([0-3]?[0-9])/))?`0${a[1]}`.slice(-2):null}g(a){return(a=a.match(/[0-2]?[0-9]:[0-5][0-9]/))?`0${a[0]}`.slice(-5):null}}
class t{constructor(a){this.v=document.querySelectorAll(a);this.length=this.v.length;if(!this.length)throw Error("\u30c6\u30fc\u30d6\u30eb\u30ec\u30b3\u30fc\u30c9\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093");this.R=new v("td")}getAll(a=!1){const b=[];Array.from(this.v).some((d)=>{b.push(this.R.getAll(d));if(a&&d.classList.contains("today"))return!0});return b}}
class v{constructor(a="td"){this.$=a}getAll(a){return Array.from(this.F(a)).map((a)=>this.C(a.innerText))}getDate(a){return this.C(this.F(a)[0].innerText)}F(a){a=a.querySelectorAll(this.$);return a.length?a:[]}C(a){return"string"===typeof a?a.replace(/[\r\n]+/g,"").replace(" ","").trim():null}}
((a,b)=>{const d=new XMLHttpRequest;d.open(a,b,!0);d.onload=()=>{try{if(200<=d.status&&300>d.status){const a=JSON.parse(d.responseText);n=a.HOLIDAY;"1.0.0"!==a.VERSION&&alert("\u30d6\u30c3\u30af\u30de\u30fc\u30af\u30ec\u30c3\u30c8\u306b\u66f4\u65b0\u304c\u3042\u308a\u307e\u3059\u3002\u6700\u65b0\u7248\u306b\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002");new q}else alert("\u4f11\u6687\u30c7\u30fc\u30bf\u306e\u8aad\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")}catch(k){console.error(k)}};
d.send()})("GET","https://gist.githubusercontent.com/tsubasa/e4950c89550fade82e91c5b9cbc5cd31/raw");
class r{constructor(){this.s=8;this.m=this.l=2;this.A="09:30";this.w="18:30";this.N="11:00";this.M="13:00";this.P="14:00";this.O="16:00"}W(){this.f=0;this.h=this.l;this.j=this.m;this.u=this.l+this.m;this.L=0}X(){return this.i(this.A,this.w,1)}Y(a){return this.i(this.A,a,.5)}Z(a){return this.i(a,this.w,.5)}i(a,b,d=0){this.W();const k=this.N,l=this.M,f=this.P,c=this.O;let h=0,e=0;a=a?a:l;b=b?b:f;if(0>=this.a(b,f)){h=this.a(b,a);var g=this.a(b,l);0<g&&0<h&&(h-=g)}else 0>=this.a(l,a)?(e=this.a(b,a),g=
this.a(f,a),0<g&&0<e&&(e-=g)):0<this.a(l,a)&&0<this.a(b,f)&&(h=this.a(l,a),e=this.a(b,f));this.f=this.c((h+e)/60);this.h=h&&0<this.a(b,k)?this.B(a,b,k,l):0;this.j=e&&0<this.a(c,a)?this.B(a,b,f,c):0;this.u=this.c(this.u-(this.h+this.j));this.L=0<this.f-this.s?this.c(this.f-this.s):0;return[this.h,this.j,this.c(this.f-(this.h+this.j)),this.f,this.u,this.L,d]}B(a,b,d,k){return this.c(this.a(0<this.a(b,k)?k:b,0<this.a(d,a)?d:a)/60)}S(){return this.l+this.m}a(a,b){a=(new Date(2E3,1,1,a.split(":")[0],a.split(":")[1],
0)).getTime()-(new Date(2E3,1,1,b.split(":")[0],b.split(":")[1],0)).getTime();return 0!==a?a/1E3/60:0}c(a){return Math.round(100*a)/100}};})();