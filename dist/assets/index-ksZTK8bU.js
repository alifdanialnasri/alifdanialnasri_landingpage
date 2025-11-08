(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="container">
    <div class="content">
      <h1 class="name fade-in">Alif Danial Nasri</h1>
      <p class="message fade-in-delay">This website is under development.<br>Stay tuned — future updates coming soon!</p>
      <div class="loading-dots fade-in-delay-2">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <footer class="footer fade-in-delay-3">
      <p>&copy; 2025 Alif Danial Nasri. All rights reserved.</p>
    </footer>
  </div>
`,e();function e(){let e=document.querySelector(`.container`);for(let t=0;t<20;t++){let t=document.createElement(`div`);t.className=`particle`,t.style.left=`${Math.random()*100}%`,t.style.top=`${Math.random()*100}%`,t.style.animationDelay=`${Math.random()*5}s`,t.style.animationDuration=`${15+Math.random()*10}s`,e.appendChild(t)}}