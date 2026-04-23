import"./modulepreload-polyfill-wMinxHhO.js";var e=`/penny-razbor/assets/puzzle-image-Cnr0P3bH.jpg`,t=document.querySelector(`#app`),n=4,r=5,i=n*r;t.innerHTML=`
  <div class="puzzle-page">
    <main class="puzzle-shell">
      <aside class="puzzle-sidebar" aria-label="Панель игры">
        <a class="puzzle-back" href="/penny-razbor/">Вернуться на лендинг</a>
        <p class="puzzle-eyebrow">Морская игра для детей</p>
        <h1>Мозайка моряка</h1>
        <p class="puzzle-lead">
          Собирайте картинку по кусочкам. Кнопки и подсказки всегда под рукой слева.
        </p>

        <div class="puzzle-controls" aria-label="Управление игрой">
          <button class="puzzle-button puzzle-button-primary" type="button" data-start-button>
            Старт
          </button>
          <button class="puzzle-button puzzle-button-secondary" type="button" data-restart-button>
            Начать сначала
          </button>
          <button class="puzzle-button puzzle-button-ghost" type="button" data-hint-button>
            Подсказка
          </button>
        </div>

        <div class="puzzle-status-panel">
          <p class="puzzle-status" data-status-text>Нажмите «Старт», чтобы начать морское приключение.</p>
          <p class="puzzle-progress" data-progress-text>Собрано 0 из ${i}</p>
        </div>

        <p class="puzzle-touch-tip">
          На телефоне тяните деталь пальцем и отпускайте рядом с её местом.
        </p>
      </aside>

      <section class="puzzle-stage" aria-label="Зона сборки пазла">
        <div class="puzzle-board-shell">
          <div class="puzzle-board-water"></div>
          <div class="puzzle-board" data-board>
            <div class="puzzle-board-grid" data-board-grid></div>
            <div class="puzzle-start-overlay" data-start-overlay>
              <div class="puzzle-start-card">
                <p class="puzzle-start-label">Поднять паруса</p>
                <h2>Пора собирать пазл!</h2>
                <p>
                  Нажмите «Старт», а потом перетаскивайте детали в правильные клеточки.
                  Если забыли картинку, откройте подсказку.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section class="puzzle-tray" aria-label="Выбор деталей">
          <div class="puzzle-tray-head">
            <div>
              <p class="puzzle-tray-label">Лента деталей</p>
              <h2>Прокручивайте и выбирайте кусочки</h2>
            </div>
            <p class="puzzle-tray-meta">Все детали лежат в одну строку.</p>
          </div>
          <div class="puzzle-tray-scroller" data-tray-scroller>
            <div class="puzzle-tray-row" data-tray-row></div>
          </div>
        </section>
      </section>
    </main>

    <div class="puzzle-modal" data-hint-modal hidden>
      <div class="puzzle-modal-backdrop" data-hint-close></div>
      <div class="puzzle-modal-card" role="dialog" aria-labelledby="puzzleHintTitle" aria-modal="true">
        <p class="puzzle-modal-label">Подсказка капитана</p>
        <h2 id="puzzleHintTitle">Вот как выглядит картинка</h2>
        <img src="${e}" alt="Образец картинки для пазла" />
        <button class="puzzle-button puzzle-button-primary" type="button" data-hint-close>
          Вернуться к игре
        </button>
      </div>
    </div>

    <div class="puzzle-modal" data-win-modal hidden>
      <div class="puzzle-modal-backdrop" data-win-restart></div>
      <div class="puzzle-modal-card puzzle-win-card" role="dialog" aria-labelledby="puzzleWinTitle" aria-modal="true">
        <div class="puzzle-confetti" data-confetti></div>
        <p class="puzzle-modal-label">Ура!</p>
        <h2 id="puzzleWinTitle">Ты собрал всю мозайку!</h2>
        <p>
          Морская команда гордится тобой. Картинка собрана правильно, можно запускать
          ещё один весёлый раунд.
        </p>
        <button class="puzzle-button puzzle-button-primary" type="button" data-win-restart>
          Сыграть ещё раз
        </button>
      </div>
    </div>
  </div>
`;var a=document.querySelector(`[data-start-button]`),o=document.querySelector(`[data-restart-button]`),s=document.querySelector(`[data-hint-button]`),c=document.querySelector(`[data-hint-modal]`),l=document.querySelectorAll(`[data-hint-close]`),u=document.querySelector(`[data-win-modal]`),d=document.querySelectorAll(`[data-win-restart]`),f=document.querySelector(`[data-status-text]`),p=document.querySelector(`[data-progress-text]`),m=document.querySelector(`[data-board-grid]`),h=document.querySelector(`[data-tray-row]`),g=document.querySelector(`[data-tray-scroller]`),_=document.querySelector(`[data-start-overlay]`),v=document.querySelector(`[data-confetti]`),y=document.querySelector(`.puzzle-page`),b=[],x=[],S=!1,C=!1,w=null,T=null;function E(e){let t=[...e];for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function D(e){f instanceof HTMLElement&&(f.textContent=e)}function O(){let e=b.filter(e=>e.placed).length;p instanceof HTMLElement&&(p.textContent=`Собрано ${e} из ${i}`)}function k(e){c instanceof HTMLElement&&(c.hidden=!e)}function A(e){u instanceof HTMLElement&&(u.hidden=!e)}function j(e){_ instanceof HTMLElement&&(_.hidden=!e)}function M(){if(!(v instanceof HTMLElement))return;v.innerHTML=``;let e=[`#e13535`,`#0b63ce`,`#ffffff`,`#ffd34d`];for(let t=0;t<28;t+=1){let n=document.createElement(`span`);n.className=`puzzle-confetti-piece`,n.style.left=`${t/28*100}%`,n.style.background=e[t%e.length],n.style.animationDelay=`${t%7*70}ms`,n.style.transform=`rotate(${t*19}deg)`,v.append(n)}}function N(){if(m instanceof HTMLElement){m.innerHTML=``,x=[];for(let e=0;e<n;e+=1)for(let t=0;t<r;t+=1){let n=e*r+t,i=document.createElement(`div`);i.className=`puzzle-board-cell`,i.dataset.slotIndex=String(n),i.innerHTML=`
        <span class="puzzle-slot-wave"></span>
        <span class="puzzle-slot-dot"></span>
      `,m.append(i),x.push(i)}}}function P(){if(h instanceof HTMLElement){h.innerHTML=``;for(let e=0;e<i;e+=1){let t=document.createElement(`div`);t.className=`puzzle-tray-slot`,t.dataset.traySlot=String(e),h.append(t)}}}function F(e){return document.querySelector(`[data-tray-slot="${e}"]`)}function I(e){e.element.classList.remove(`is-dragging`,`is-placed`),e.element.style.position=``,e.element.style.left=``,e.element.style.top=``,e.element.style.width=``,e.element.style.height=``,e.element.style.transform=``,e.element.style.pointerEvents=``,e.element.style.zIndex=``}function L(e){let t=F(e.homeSlot);e.placed=!1,t instanceof HTMLElement&&t.append(e.element),I(e)}function R(e){let t=x[e.correctIndex];t instanceof HTMLElement&&(e.placed=!0,t.innerHTML=``,t.append(e.element),I(e),e.element.classList.add(`is-placed`))}function z(){b.every(e=>e.placed)&&(C=!0,D(`Браво! Все детали на месте, картинка собрана.`),M(),A(!0))}function B(){let e=!S;o instanceof HTMLButtonElement&&(o.disabled=e),s instanceof HTMLButtonElement&&(s.disabled=e)}function V(){E(b.map(e=>e.id)).forEach((e,t)=>{let n=b.find(t=>t.id===e);n&&(n.homeSlot=t)})}function H(){x.forEach(e=>{e.innerHTML=`
      <span class="puzzle-slot-wave"></span>
      <span class="puzzle-slot-dot"></span>
    `})}function U(){S=!0,C=!1,A(!1),k(!1),j(!1),V(),H(),b.forEach(e=>{L(e)}),O(),B(),D(`Игра началась. Тяните детали в правильные клеточки.`)}function W(){U(),D(`Начинаем сначала. Новое морское приключение уже готово.`)}function G(){S&&k(!0)}function K(e,t,n){let r=x[e.correctIndex];if(!(r instanceof HTMLElement)){L(e);return}let i=r.getBoundingClientRect(),a=i.left+i.width/2,o=i.top+i.height/2,s=t-a,c=n-o,l=Math.max(i.width,i.height)*.72;Math.hypot(s,c)<=l?(R(e),O(),D(`Отлично! Деталь встала на своё место.`),z()):(L(e),D(`Почти! Отпустите деталь чуть ближе к её месту.`))}function q(e,t){if(!w)return;let{piece:n}=w;w=null,document.body.classList.remove(`puzzle-no-select`),K(n,e,t)}function J(e,t){if(!S||C||t.placed)return;e.preventDefault();let n=t.element.getBoundingClientRect();w={piece:t,pointerOffsetX:e.clientX-n.left,pointerOffsetY:e.clientY-n.top},t.element.classList.add(`is-dragging`),t.element.style.position=`fixed`,t.element.style.left=`${n.left}px`,t.element.style.top=`${n.top}px`,t.element.style.width=`${n.width}px`,t.element.style.height=`${n.height}px`,t.element.style.pointerEvents=`none`,t.element.style.zIndex=`1000`,document.body.append(t.element),document.body.classList.add(`puzzle-no-select`)}function Y(e){e.element.addEventListener(`pointerdown`,t=>{J(t,e)})}function X(e,t,i){let a=document.createElement(`canvas`),o=Math.round(i*e.naturalWidth/r),s=Math.round(t*e.naturalHeight/n),c=Math.round((i+1)*e.naturalWidth/r),l=Math.round((t+1)*e.naturalHeight/n),u=c-o,d=l-s;a.width=u,a.height=d;let f=a.getContext(`2d`);return f?(f.drawImage(e,o,s,u,d,0,0,u,d),a.toDataURL(`image/png`)):``}function Z(e){if(!(y instanceof HTMLElement))return;let t=`${e.naturalWidth} / ${e.naturalHeight}`,i=e.naturalWidth*n/(e.naturalHeight*r);y.style.setProperty(`--board-aspect`,t),y.style.setProperty(`--piece-ratio`,`${i}`)}function Q(){if(!(g instanceof HTMLElement))return;g.addEventListener(`pointerdown`,e=>{e.target instanceof Element&&e.target.closest(`.puzzle-piece`)||(T={startX:e.clientX,startScrollLeft:g.scrollLeft,pointerId:e.pointerId},g.classList.add(`is-dragging`),g.setPointerCapture(e.pointerId))}),g.addEventListener(`pointermove`,e=>{T&&(e.preventDefault(),g.scrollLeft=T.startScrollLeft-(e.clientX-T.startX))});let e=()=>{T&&=(g.classList.remove(`is-dragging`),null)};g.addEventListener(`pointerup`,e),g.addEventListener(`pointercancel`,e),g.addEventListener(`lostpointercapture`,e)}function $(e){b=[];for(let t=0;t<n;t+=1)for(let n=0;n<r;n+=1){let i=t*r+n,a=document.createElement(`button`);a.className=`puzzle-piece`,a.type=`button`,a.setAttribute(`aria-label`,`Деталь ${i+1}`);let o=document.createElement(`img`);o.src=X(e,t,n),o.alt=``,o.draggable=!1,a.append(o);let s={id:i,correctIndex:i,homeSlot:i,placed:!1,element:a};Y(s),b.push(s)}}function ee(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}async function te(){N(),P(),B(),j(!0),a instanceof HTMLButtonElement&&(a.disabled=!0);try{let t=await ee(e);Z(t),$(t)}catch{D(`Не удалось загрузить картинку для пазла.`);return}a instanceof HTMLButtonElement&&(a.disabled=!1)}Q(),a?.addEventListener(`click`,U),o?.addEventListener(`click`,W),s?.addEventListener(`click`,G),l.forEach(e=>{e.addEventListener(`click`,()=>{k(!1)})}),d.forEach(e=>{e.addEventListener(`click`,W)}),document.addEventListener(`pointermove`,e=>{if(!w)return;e.preventDefault();let{piece:t,pointerOffsetX:n,pointerOffsetY:r}=w;t.element.style.left=`${e.clientX-n}px`,t.element.style.top=`${e.clientY-r}px`}),document.addEventListener(`pointerup`,e=>{w&&q(e.clientX,e.clientY)}),document.addEventListener(`pointercancel`,()=>{w&&(L(w.piece),w=null,document.body.classList.remove(`puzzle-no-select`))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(k(!1),A(!1))}),y instanceof HTMLElement&&y.addEventListener(`touchmove`,e=>{w&&e.preventDefault()},{passive:!1}),te();