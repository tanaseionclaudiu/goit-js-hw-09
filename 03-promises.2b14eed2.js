const e=document.querySelector("button"),t=document.querySelector("input[name = 'delay']"),n=document.querySelector("input[name = 'step']"),o=document.querySelector("input[name = 'amount']");function i(e,t){const n=Math.random()>.3;return new Promise(n?(n,o)=>{setTimeout((()=>{n({position:e,delay:t})}),t)}:(n,o)=>{setTimeout((()=>{o({position:e,delay:t})}),t)})}e.addEventListener("click",(function(e){e.preventDefault();const l=parseInt(t.value),u=parseInt(n.value),s=parseInt(o.value);let a=l;for(let e=0;e<s;e++)i(e,a).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e+1} in ${t} ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e+1} in ${t} ms`)})),a+=u}));
//# sourceMappingURL=03-promises.2b14eed2.js.map