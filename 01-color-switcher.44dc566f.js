const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let d=null;t.addEventListener("click",(()=>{d=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.44dc566f.js.map