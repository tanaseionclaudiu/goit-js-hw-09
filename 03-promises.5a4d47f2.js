const e=document.querySelector("button"),t=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');e.addEventListener("click",(function(e){e.preventDefault(),setTimeout((()=>{const e=o.value;for(let o=1;o<=e;o+=1){const e=n.value*(o-1);setTimeout((()=>{console.log(`Create Promise ${o} with ${parseInt(t.value)+e}ms delay`),u(o,parseInt(t.value)+e)}),e)}}),t.value)}));const u=(e,t)=>new Promise(((n,o)=>{const u=Math.random()>.3,a={position:e,delay:t};u?n(a):o(a)}));
//# sourceMappingURL=03-promises.5a4d47f2.js.map
