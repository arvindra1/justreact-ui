import{css as e,jsx as o}from"@emotion/react";import*as r from"react";import a,{useState as n,createContext as t}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function s(e,o){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}const c=e`
  width: 100%;
  height:100%;
  background:white;
  color:dimgray;
`,l=e`
  height:100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`,d=o=>o&&e`border-radius: 10px;`,i=o=>o&&e`cursor:pointer;`,m=o=>{return e`${r=o,JSON.stringify(r).replace(/"/g,"").replace(/((:{))/g,"{").replace(/,/g,";").slice(1,-1)}`;var r},f=e=>{switch(e){case"up":return p;case"down":return h;case"left":return g;case"right":return v;case"zoom":return x}},b=(o,r)=>o&&e`
  background: ${`rgba( 255, 255, 255, ${(null==r?void 0:r.transparency)||.2})`};
  backdrop-filter: ${`blur( ${(null==r?void 0:r.blur)||4}px )`};
  -webkit-backdrop-filter: ${`blur( ${(null==r?void 0:r.blur)||4}px )`};
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`,u=e`transition: background 150ms ease-out, transform 150ms ease-out;`,p=e`
  ${u}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, -4px, 0);
  }
`,h=e`
  ${u}

  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, 4px, 0);
  }
`,g=e`
  ${u}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(-4px, 0, 0);
  }
`,v=e`
  ${u}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(4px, 0, 0);
  }
`,x=e`
  ${u}
  :hover{
    z-index:10;
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: scale(1.1);
  }
`,y=r=>{var{children:a,background:n,outlined:t=!0,bordered:u=!1,style:p={},hoverType:h,glass:g=!1,glassOption:v={}}=r,x=s(r,["children","background","outlined","bordered","style","hoverType","glass","glassOption"]);const y=[c,(E=t,E&&e`border: 1px solid #00000010;`),d(u),(w=n,e`background:${w||"#f5f5f5"};`),i(!!(null==x?void 0:x.onClick)),f(h),m(p),b(g,v)];var w,E;return o("div",Object.assign({css:y},x),o("div",{css:[l]},a))},w=r.forwardRef(((e,o)=>{var{className:a}=e,n=s(e,["className"]);return r.createElement("div",Object.assign({},n,{className:a,ref:o,style:{display:"flex",flexDirection:"row",height:"100vh",width:"100%",margin:0}}))}));w.displayName="Root";const E=r.forwardRef(((e,o)=>{var{className:a}=e,n=s(e,["className"]);return r.createElement("div",Object.assign({ref:o,className:a},n))}));E.displayName="Header";const C=r.forwardRef(((e,o)=>{var{className:a,color:n="gray",width:t="15%"}=e,c=s(e,["className","color","width"]);return r.createElement("div",Object.assign({ref:o,className:a},c,{style:{height:"100vh",width:t,overflowY:"auto",background:n,padding:"20px",boxSizing:"border-box"}}))}));C.displayName="SideBar";const k=r.forwardRef(((e,o)=>{var{className:a}=e,n=s(e,["className"]);return r.createElement("div",Object.assign({ref:o,className:a},n,{style:{padding:"10px",overflowY:"auto",flex:1}}))}));k.displayName="Content";const $={Root:w,Header:E,SideBar:C,Content:k},N=({src:e,alt:o,width:r=600,height:t=600,scale:s=2})=>{const[c,l]=n(!1),[d,i]=n({x:0,y:0});return a.createElement("div",{style:{position:"relative"}},a.createElement("img",{src:e,alt:o,style:{width:`${r}px`,height:`${t}px`},onMouseEnter:()=>l(!0),onMouseMove:e=>{const{left:o,top:r,width:a,height:n}=e.target.getBoundingClientRect(),t=(e.pageX-o)/a*100,s=(e.pageY-r)/n*100;i({x:t,y:s})},onMouseLeave:()=>l(!1)}),c&&a.createElement("div",{style:{position:"absolute",left:`${r+20}px`,top:0,width:`${r}px`,height:`${t}px`,overflow:"hidden",border:"1px solid black"}},a.createElement("img",{src:e,alt:o,style:{width:r*s+"px",height:t*s+"px",transform:`translate(-${d.x}%, -${d.y}%)`,transformOrigin:"0 0"}})))},O=({items:e,onItemClick:o,defaultSelected:r,selectedItem:t,selectbg:s="#e0e0e0"})=>{const[c,l]=n(r);return a.createElement("nav",null,a.createElement("ul",null,e.map((e=>a.createElement("li",{key:e,onClick:()=>(e=>{l(e),o(e)})(e),style:{cursor:"pointer",fontWeight:c===e||t===e?"bold":"normal",backgroundColor:c===e||t===e?s:"transparent"}},e)))))},S=[{name:"Sunset",colors:["#ff7e5f","#feb47b"]},{name:"Ocean Blue",colors:["#00c6ff","#0072ff"]},{name:"Purple Bliss",colors:["#360033","#0b8793"]},{name:"Mojito",colors:["#1d976c","#93f9b9"]},{name:"Aubergine",colors:["#aa076b","#61045f"]},{name:"Bloody Mary",colors:["#ff512f","#dd2476"]},{name:"Mango Pulp",colors:["#f09819","#edde5d"]},{name:"Frozen",colors:["#403b4a","#e7e9bb"]},{name:"Rose Water",colors:["#e55d87","#5fc3e4"]},{name:"Horizon",colors:["#003973","#e5e5be"]},{name:"Peach",colors:["#ed4264","#ffedbc"]},{name:"Turquoise Flow",colors:["#136a8a","#267871"]},{name:"Pink Flavour",colors:["#800080","#ffc0cb"]},{name:"Emerald Water",colors:["#348f50","#56b4d3"]},{name:"Lemon Twist",colors:["#3ca55c","#b5ac49"]},{name:"Green Beach",colors:["#02aab0","#00cdac"]},{name:"Sublime Light",colors:["#fc5c7d","#6a82fb"]},{name:"Celestial",colors:["#c33764","#1d2671"]},{name:"Royal",colors:["#141e30","#243b55"]},{name:"Cherry Blossom",colors:["#ffafbd","#ffc3a0"]},{name:"Deep Space",colors:["#000000","#434343"]},{name:"Dusk",colors:["#2c3e50","#fd746c"]},{name:"Frost",colors:["#000428","#004e92"]},{name:"Candy",colors:["#d3959b","#bfe6ba"]},{name:"Autumn",colors:["#d38312","#a83279"]},{name:"Evening Sunshine",colors:["#b92b27","#1565c0"]},{name:"Cool Blues",colors:["#2193b0","#6dd5ed"]},{name:"Piggy Pink",colors:["#ee9ca7","#ffdde1"]},{name:"Grade Grey",colors:["#bdc3c7","#2c3e50"]},{name:"Timber",colors:["#fc00ff","#00dbde"]},{name:"Between Night and Day",colors:["#2c3e50","#3498db"]},{name:"Sage Persuasion",colors:["#ccccb2","#757519"]},{name:"Lush",colors:["#56ab2f","#a8e063"]},{name:"Kashmir",colors:["#614385","#516395"]},{name:"Green and Blue",colors:["#c2e59c","#64b3f4"]},{name:"Passion",colors:["#e53935","#e35d5b"]},{name:"Clear Sky",colors:["#005c97","#363795"]},{name:"Master Card",colors:["#f46b45","#eea849"]},{name:"Back to Earth",colors:["#00c9ff","#92fe9d"]},{name:"Deep Sea Space",colors:["#2c3e50","#4ca1af"]},{name:"Colorful Peach",colors:["#ed6ea0","#ec8c69"]},{name:"Red Sunset",colors:["#355c7d","#6c5b7b","#c06c84"]},{name:"Shades of Grey",colors:["#bdc3c7","#2c3e50"]},{name:"Moonlit Asteroid",colors:["#0f2027","#203a43","#2c5364"]},{name:"JShine",colors:["#12c2e9","#c471ed","#f64f59"]},{name:"Evening Night",colors:["#005aa7","#fffde4"]},{name:"Blue Skies",colors:["#56ccf2","#2f80ed"]},{name:"Chitty Chitty Bang Bang",colors:["#007991","#78ffd6"]},{name:"Visions of Grandeur",colors:["#000046","#1cb5e0"]},{name:"Crystal Clear",colors:["#159957","#155799"]}],B=t(void 0),P=({children:e})=>{const[o,r]=n(null==S?void 0:S[0]);return a.createElement(B.Provider,{value:{color:o,handleColorChange:()=>{const e=Math.floor(50*Math.random());r(null==S?void 0:S[e])}}},e)};B.Consumer;const M=()=>{const e=a.useContext(B);if(void 0===e)throw new Error("useJustContext must be used within a JustProvider");return e};export{y as Card,P as ColorProvider,N as ImageMag,$ as Layout,O as MenuBar,M as useColor};
