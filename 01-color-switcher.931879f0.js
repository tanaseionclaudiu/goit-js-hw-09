const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let a=0;function r(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(()=>{r(),a=setInterval(r,1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.931879f0.js.map
