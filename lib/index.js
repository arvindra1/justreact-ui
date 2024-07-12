import{css as r,jsx as e}from"@emotion/react";import o,{useState as t}from"react";
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
***************************************************************************** */const a=r`
  width: 100%;
  height:100%;
  background:white;
  color:dimgray;
`,n=r`
  height:100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`,s=e=>e&&r`border-radius: 10px;`,i=e=>e&&r`cursor:pointer;`,l=e=>{return r`${o=e,JSON.stringify(o).replace(/"/g,"").replace(/((:{))/g,"{").replace(/,/g,";").slice(1,-1)}`;var o},d=r=>{switch(r){case"up":return b;case"down":return g;case"left":return h;case"right":return u;case"zoom":return x}},p=(e,o)=>e&&r`
  background: ${`rgba( 255, 255, 255, ${(null==o?void 0:o.transparency)||.2})`};
  backdrop-filter: ${`blur( ${(null==o?void 0:o.blur)||4}px )`};
  -webkit-backdrop-filter: ${`blur( ${(null==o?void 0:o.blur)||4}px )`};
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`,c=r`transition: background 150ms ease-out, transform 150ms ease-out;`,b=r`
  ${c}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, -4px, 0);
  }
`,g=r`
  ${c}

  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, 4px, 0);
  }
`,h=r`
  ${c}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(-4px, 0, 0);
  }
`,u=r`
  ${c}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(4px, 0, 0);
  }
`,x=r`
  ${c}
  :hover{
    z-index:10;
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: scale(1.1);
  }
`,f=o=>{var{children:t,background:c,outlined:b=!0,bordered:g=!1,style:h={},hoverType:u,glass:x=!1,glassOption:f={}}=o,v=function(r,e){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(o[t[a]]=r[t[a]])}return o}(o,["children","background","outlined","bordered","style","hoverType","glass","glassOption"]);const m=[a,(w=b,w&&r`border: 1px solid #00000010;`),s(g),(y=c,r`background:${y||"#f5f5f5"};`),i(!!(null==v?void 0:v.onClick)),d(u),l(h),p(x,f)];var y,w;return e("div",Object.assign({css:m},v),e("div",{css:[n]},t))},v=({src:r,alt:e,width:a=600,height:n=600})=>{const[s,i]=t(!1),[l,d]=t({x:0,y:0});return o.createElement("div",{style:{position:"relative"}},o.createElement("img",{src:r,alt:e,style:{width:`${a}px`,height:`${n}px`},onMouseEnter:()=>i(!0),onMouseMove:r=>{const{left:e,top:o,width:t,height:a}=r.target.getBoundingClientRect(),n=(r.pageX-e)/t*100,s=(r.pageY-o)/a*100;d({x:n,y:s})},onMouseLeave:()=>i(!1)}),s&&o.createElement("div",{style:{position:"absolute",left:`${a+20}px`,top:0,width:`${a}px`,height:`${n}px`,overflow:"hidden",border:"1px solid black"}},o.createElement("img",{src:r,alt:e,style:{width:2*a+"px",height:2*n+"px",transform:`translate(-${l.x}%, -${l.y}%)`,transformOrigin:"0 0"}})))};export{f as Card,v as ImageMag};
