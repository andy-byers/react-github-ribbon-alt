(this["webpackJsonpreact-github-ribbon-alt-example"]=this["webpackJsonpreact-github-ribbon-alt-example"]||[]).push([[0],{1:function(e,t,n){},4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);n(1);var r=n(0),o=n.n(r),a=n(3),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=["href","className","orientation","primary","secondary","outline","onClick","onMouseOver","onMouseOut","onFocus","onBlur","hoverFilter"],s=Object.freeze({"top-left":{polygonPoints:"165,0 110,0 0,110 0,165",groupTransform:"translate(66,66) rotate(-45)"},"top-right":{polygonPoints:"15,0 70,0 180,110 180,165",groupTransform:"translate(110,66) rotate(45)"},"bottom-left":{polygonPoints:"0,15 0,70 110,180 165,180",groupTransform:"translate(66,110) rotate(45)"},"bottom-right":{polygonPoints:"15,180 70,180 180,70 180,15",groupTransform:"translate(110,110) rotate(-45)"}});function u(e,t,n,r){var o=function(){e(n),t(r)},a=r.relatedTarget;if(r.stopPropagation(),r.preventDefault(),a){var i=a.parentElement;i&&i.classList.contains("rgr-alt")&&o()}else o()}function f(e){var t=e.href,n=void 0===t?"/":t,a=e.className,i=void 0===a?"":a,f=e.orientation,m=void 0===f?"top-right":f,d=e.primary,p=void 0===d?"#ffffff":d,b=e.secondary,g=void 0===b?"#000000":b,h=e.outline,v=void 0===h?"#58a6ff":h,y=e.onClick,E=void 0===y?function(){}:y,w=e.onMouseOver,O=void 0===w?function(){}:w,k=e.onMouseOut,j=void 0===k?function(){}:k,C=e.onFocus,M=void 0===C?function(){}:C,x=e.onBlur,N=void 0===x?function(){}:x,z=e.hoverFilter,P=void 0===z?"brightness(0.95)":z,T=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,l),B=s[m],F=B.polygonPoints,L=B.groupTransform,D=Object(r.useState)(!1),S=D[0],H=D[1],I=Object(r.useState)(!1),J=I[0],A=I[1];return Object(r.useEffect)((function(){function e(e){S&&"Enter"===e.code&&(window.location.href=n)}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n,S]),o.a.createElement("div",{className:"rgr-alt "+i,dataHref:n,role:"link",tabIndex:"0",onFocus:function(e){H(!0),M(e)},onBlur:function(e){H(!1),N(e)},style:{outline:"none"}},o.a.createElement("svg",c({version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 180"},T),o.a.createElement("defs",null,o.a.createElement("filter",{id:"rgr-alt-shadow"},o.a.createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"3"}))),o.a.createElement("a",{href:n,onClick:E,onMouseOver:u.bind(null,A,O,!0),onMouseOut:u.bind(null,A,j,!1)},o.a.createElement("g",{style:{filter:J?P:"none"}},o.a.createElement("polygon",{fill:g,points:F,filter:"url(#rgr-alt-shadow)"}),o.a.createElement("g",{transform:L},o.a.createElement("path",{fill:v,opacity:.5*+S,pointerEvents:"none",d:"M45.1,45.1C20.2,70-20.2,70-45.1,45.1s-24.9-65.3,0-90.2s65.3-24.9,90.2,0C70.1-20.3,70,20.2,45.1,45.1z"}),o.a.createElement("circle",{fill:g,filter:"url(#rgr-alt-shadow)",cx:"0",cy:"0",r:"43"}),o.a.createElement("circle",{fill:"none",stroke:p,strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"1.003,4.0119",cx:"0",cy:"0",r:"39.1"}),o.a.createElement("path",{fill:p,d:"M10.9,4.2c3.1-0.1,4.4,4,4.5,6.6c0,2.5-1.3,6.6-4.5,6.6c-3.1,0.1-4.5-4.2-4.5-6.6C6.5,8.4,7.8,4.2,10.9,4.2z M-29.2,4.8c0.1-5.2,1.5-10,4.7-14c-0.6-1.8-0.9-3.8-0.9-5.8c0-2.6,0.6-4,1.8-6.3c5.4,0,9.1,1,13.2,4.2c3.3-0.7,6.4-1,9.8-1 c3.6-0.1,7.2,0.3,10.8,1.1c4.1-3.2,7.7-4.3,13.2-4.3c1.3,2.3,1.8,3.6,1.8,6.3c0,2-0.3,4.1-0.9,5.9c3.4,4,5,8.9,5,13.8 c0,3.9-0.6,8.1-2.4,11.5c-4.8,9.4-18.3,9-27.4,9s-21.7,0.3-26.3-9C-28.8,12.8-29.2,8.7-29.2,4.8L-29.2,4.8z M-3.1,23.2h5.8 C11.2,23.1,21,21.5,21,10.9c0-5.4-3.3-10.1-8.9-10.1c-2.3,0-4.5,0.3-6.8,0.7C3.5,1.9,1.6,2-0.2,2C-2,1.9-3.9,1.9-5.6,1.5 c-2.3-0.3-4.6-0.7-6.8-0.7c-5.7,0.1-8.9,4.7-8.9,10.1C-21.3,21.4-11.6,23.1-3.1,23.2z M-15.8,10.9c0,2.5,1.3,6.6,4.5,6.6 c3.1,0.1,4.4-4,4.5-6.6c0-2.5-1.3-6.6-4.5-6.6S-15.7,8.4-15.8,10.9z"}))))))}var m=Object.freeze({href:"/",width:200,height:200}),d=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,Object.assign({className:"ribbon-top-left",primary:"white",secondary:"hotpink",orientation:"top-left"},m)),o.a.createElement(f,Object.assign({className:"ribbon-top-right",primary:"white",secondary:"orange",orientation:"top-right"},m)),o.a.createElement(f,Object.assign({className:"ribbon-bottom-left",primary:"white",secondary:"black",orientation:"bottom-left"},m)),o.a.createElement(f,Object.assign({className:"ribbon-bottom-right",primary:"white",secondary:"limegreen",orientation:"bottom-right"},m)),o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"react-github-ribbon-alt"),o.a.createElement("p",null,"An alternate GitHub ribbon style for React")),o.a.createElement("a",{href:"/"},"real live link"))};i.a.render(o.a.createElement(d,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.a0368c56.chunk.js.map