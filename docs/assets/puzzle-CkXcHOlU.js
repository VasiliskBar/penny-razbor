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
            <div class="puzzle-tray-actions">
              <p class="puzzle-tray-meta">Все детали лежат в одну строку.</p>
              <div class="puzzle-tray-arrows" aria-label="Прокрутка ленты деталей">
                <button class="puzzle-tray-arrow" type="button" data-tray-prev aria-label="Прокрутить влево">
                  ←
                </button>
                <button class="puzzle-tray-arrow" type="button" data-tray-next aria-label="Прокрутить вправо">
                  →
                </button>
              </div>
            </div>
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
`;var a=document.querySelector(`[data-start-button]`),o=document.querySelector(`[data-restart-button]`),s=document.querySelector(`[data-hint-button]`),c=document.querySelector(`[data-hint-modal]`),l=document.querySelectorAll(`[data-hint-close]`),u=document.querySelector(`[data-win-modal]`),d=document.querySelectorAll(`[data-win-restart]`),f=document.querySelector(`[data-status-text]`),p=document.querySelector(`[data-progress-text]`),m=document.querySelector(`[data-board-grid]`),h=document.querySelector(`[data-tray-row]`),g=document.querySelector(`[data-tray-scroller]`),_=document.querySelector(`[data-tray-prev]`),v=document.querySelector(`[data-tray-next]`),y=document.querySelector(`[data-start-overlay]`),b=document.querySelector(`[data-confetti]`),x=document.querySelector(`.puzzle-page`),S=[],C=[],w=!1,T=!1,E=null;function D(e){let t=[...e];for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function O(e){f instanceof HTMLElement&&(f.textContent=e)}function k(){let e=S.filter(e=>e.placed).length;p instanceof HTMLElement&&(p.textContent=`Собрано ${e} из ${i}`)}function A(e){c instanceof HTMLElement&&(c.hidden=!e)}function j(e){u instanceof HTMLElement&&(u.hidden=!e)}function M(e){y instanceof HTMLElement&&(y.hidden=!e)}function N(){if(!(b instanceof HTMLElement))return;b.innerHTML=``;let e=[`#e13535`,`#0b63ce`,`#ffffff`,`#ffd34d`];for(let t=0;t<28;t+=1){let n=document.createElement(`span`);n.className=`puzzle-confetti-piece`,n.style.left=`${t/28*100}%`,n.style.background=e[t%e.length],n.style.animationDelay=`${t%7*70}ms`,n.style.transform=`rotate(${t*19}deg)`,b.append(n)}}function P(){if(m instanceof HTMLElement){m.innerHTML=``,C=[];for(let e=0;e<n;e+=1)for(let t=0;t<r;t+=1){let n=e*r+t,i=document.createElement(`div`);i.className=`puzzle-board-cell`,i.dataset.slotIndex=String(n),i.innerHTML=`
        <span class="puzzle-slot-wave"></span>
        <span class="puzzle-slot-dot"></span>
      `,m.append(i),C.push(i)}}}function F(){if(h instanceof HTMLElement){h.innerHTML=``;for(let e=0;e<i;e+=1){let t=document.createElement(`div`);t.className=`puzzle-tray-slot`,t.dataset.traySlot=String(e),h.append(t)}}}function I(e){return document.querySelector(`[data-tray-slot="${e}"]`)}function L(e){e.element.classList.remove(`is-dragging`,`is-placed`),e.element.style.position=``,e.element.style.left=``,e.element.style.top=``,e.element.style.width=``,e.element.style.height=``,e.element.style.transform=``,e.element.style.pointerEvents=``,e.element.style.zIndex=``}function R(e){let t=I(e.homeSlot);e.placed=!1,t instanceof HTMLElement&&t.append(e.element),L(e)}function z(e){let t=C[e.correctIndex];t instanceof HTMLElement&&(e.placed=!0,t.innerHTML=``,t.append(e.element),L(e),e.element.classList.add(`is-placed`))}function B(){S.every(e=>e.placed)&&(T=!0,O(`Браво! Все детали на месте, картинка собрана.`),N(),j(!0))}function V(){let e=!w;o instanceof HTMLButtonElement&&(o.disabled=e),s instanceof HTMLButtonElement&&(s.disabled=e)}function H(){D(S.map(e=>e.id)).forEach((e,t)=>{let n=S.find(t=>t.id===e);n&&(n.homeSlot=t)})}function U(){C.forEach(e=>{e.innerHTML=`
      <span class="puzzle-slot-wave"></span>
      <span class="puzzle-slot-dot"></span>
    `})}function W(){w=!0,T=!1,j(!1),A(!1),M(!1),H(),U(),S.forEach(e=>{R(e)}),k(),V(),O(`Игра началась. Тяните детали в правильные клеточки.`)}function G(){W(),O(`Начинаем сначала. Новое морское приключение уже готово.`)}function K(){w&&A(!0)}function q(e,t,n){let r=C[e.correctIndex];if(!(r instanceof HTMLElement)){R(e);return}let i=r.getBoundingClientRect(),a=i.left+i.width/2,o=i.top+i.height/2,s=t-a,c=n-o,l=Math.max(i.width,i.height)*.72;Math.hypot(s,c)<=l?(z(e),k(),O(`Отлично! Деталь встала на своё место.`),B()):(R(e),O(`Почти! Отпустите деталь чуть ближе к её месту.`))}function J(e,t){if(!E)return;let{piece:n}=E;E=null,document.body.classList.remove(`puzzle-no-select`),q(n,e,t)}function Y(e,t){if(!w||T||t.placed)return;e.preventDefault();let n=t.element.getBoundingClientRect();E={piece:t,pointerOffsetX:e.clientX-n.left,pointerOffsetY:e.clientY-n.top},t.element.classList.add(`is-dragging`),t.element.style.position=`fixed`,t.element.style.left=`${n.left}px`,t.element.style.top=`${n.top}px`,t.element.style.width=`${n.width}px`,t.element.style.height=`${n.height}px`,t.element.style.pointerEvents=`none`,t.element.style.zIndex=`1000`,document.body.append(t.element),document.body.classList.add(`puzzle-no-select`)}function X(e){e.element.addEventListener(`pointerdown`,t=>{Y(t,e)})}function Z(e,t,i){let a=document.createElement(`canvas`),o=Math.round(i*e.naturalWidth/r),s=Math.round(t*e.naturalHeight/n),c=Math.round((i+1)*e.naturalWidth/r),l=Math.round((t+1)*e.naturalHeight/n),u=c-o,d=l-s;a.width=u,a.height=d;let f=a.getContext(`2d`);return f?(f.drawImage(e,o,s,u,d,0,0,u,d),a.toDataURL(`image/png`)):``}function Q(e){if(!(x instanceof HTMLElement))return;let t=`${e.naturalWidth} / ${e.naturalHeight}`,i=e.naturalWidth*n/(e.naturalHeight*r);x.style.setProperty(`--board-aspect`,t),x.style.setProperty(`--piece-ratio`,`${i}`)}function $(e){if(!(g instanceof HTMLElement))return;let t=Math.max(g.clientWidth*.7,260);g.scrollBy({left:e*t,behavior:`smooth`})}function ee(e){S=[];for(let t=0;t<n;t+=1)for(let n=0;n<r;n+=1){let i=t*r+n,a=document.createElement(`button`);a.className=`puzzle-piece`,a.type=`button`,a.setAttribute(`aria-label`,`Деталь ${i+1}`);let o=document.createElement(`img`);o.src=Z(e,t,n),o.alt=``,o.draggable=!1,a.append(o);let s={id:i,correctIndex:i,homeSlot:i,placed:!1,element:a};X(s),S.push(s)}}function te(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}async function ne(){P(),F(),V(),M(!0),a instanceof HTMLButtonElement&&(a.disabled=!0);try{let t=await te(e);Q(t),ee(t)}catch{O(`Не удалось загрузить картинку для пазла.`);return}a instanceof HTMLButtonElement&&(a.disabled=!1)}a?.addEventListener(`click`,W),o?.addEventListener(`click`,G),s?.addEventListener(`click`,K),_?.addEventListener(`click`,()=>$(-1)),v?.addEventListener(`click`,()=>$(1)),l.forEach(e=>{e.addEventListener(`click`,()=>{A(!1)})}),d.forEach(e=>{e.addEventListener(`click`,G)}),document.addEventListener(`pointermove`,e=>{if(!E)return;e.preventDefault();let{piece:t,pointerOffsetX:n,pointerOffsetY:r}=E;t.element.style.left=`${e.clientX-n}px`,t.element.style.top=`${e.clientY-r}px`}),document.addEventListener(`pointerup`,e=>{E&&J(e.clientX,e.clientY)}),document.addEventListener(`pointercancel`,()=>{E&&(R(E.piece),E=null,document.body.classList.remove(`puzzle-no-select`))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(A(!1),j(!1))}),x instanceof HTMLElement&&x.addEventListener(`touchmove`,e=>{E&&e.preventDefault()},{passive:!1}),ne();