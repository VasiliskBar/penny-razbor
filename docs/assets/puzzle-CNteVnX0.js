import"./modulepreload-polyfill-wMinxHhO.js";var e=`/penny-razbor/assets/puzzle-image-5sT3BiRD.png`,t=document.querySelector(`#app`),n=4,r=5,i=n*r,a=8,o=i-a;t.innerHTML=`
  <div class="puzzle-page">
    <header class="puzzle-header">
      <a class="puzzle-back" href="/penny-razbor/">Вернуться на лендинг</a>
      <div class="puzzle-title-wrap">
        <p class="puzzle-eyebrow">Морская игра для детей</p>
        <h1>Мозайка моряка</h1>
        <p class="puzzle-lead">
          Перетаскивайте детали на свои места, собирайте картинку и ловите
          праздничное поздравление в красно-сине-белом морском стиле.
        </p>
      </div>
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
    </header>

    <main class="puzzle-main">
      <section class="puzzle-layout" aria-label="Игровое поле">
        <aside class="puzzle-tray puzzle-tray-left" data-tray-left>
          <div class="puzzle-tray-heading">
            <h2>Левая каюта</h2>
            <p>Здесь лежит первая часть деталей.</p>
          </div>
          <div class="puzzle-tray-grid puzzle-tray-grid-left" data-left-grid></div>
        </aside>

        <section class="puzzle-stage">
          <div class="puzzle-board-shell">
            <div class="puzzle-board-water"></div>
            <div class="puzzle-board" data-board>
              <div class="puzzle-board-grid" data-board-grid></div>
              <div class="puzzle-start-overlay" data-start-overlay>
                <div class="puzzle-start-card">
                  <p class="puzzle-start-label">Поднять паруса</p>
                  <h2>Пора собирать пазл!</h2>
                  <p>
                    Нажмите «Старт», а потом перетаскивайте детали в правильные
                    клеточки. Если забыли картинку, откройте подсказку.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="puzzle-touch-tip">
            На телефоне тяните деталь пальцем и отпускайте рядом с её местом.
          </p>
        </section>
      </section>

      <section class="puzzle-tray puzzle-tray-bottom" data-tray-bottom>
        <div class="puzzle-tray-heading">
          <h2>Нижняя палуба</h2>
          <p>Остальные детали ждут здесь.</p>
        </div>
        <div class="puzzle-tray-grid puzzle-tray-grid-bottom" data-bottom-grid></div>
      </section>
    </main>

    <div class="puzzle-modal" data-hint-modal hidden>
      <div class="puzzle-modal-backdrop" data-hint-close></div>
      <div class="puzzle-modal-card" role="dialog" aria-labelledby="puzzleHintTitle">
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
      <div class="puzzle-modal-card puzzle-win-card" role="dialog" aria-labelledby="puzzleWinTitle">
        <div class="puzzle-confetti" data-confetti></div>
        <p class="puzzle-modal-label">Ура!</p>
        <h2 id="puzzleWinTitle">Ты собрал всю мозайку!</h2>
        <p>
          Морская команда гордится тобой. Картинка собрана правильно, можно
          запускать ещё один весёлый раунд.
        </p>
        <button class="puzzle-button puzzle-button-primary" type="button" data-win-restart>
          Сыграть ещё раз
        </button>
      </div>
    </div>
  </div>
`;var s=document.querySelector(`[data-start-button]`),c=document.querySelector(`[data-restart-button]`),l=document.querySelector(`[data-hint-button]`),u=document.querySelector(`[data-hint-modal]`),d=document.querySelectorAll(`[data-hint-close]`),f=document.querySelector(`[data-win-modal]`),p=document.querySelectorAll(`[data-win-restart]`),m=document.querySelector(`[data-status-text]`),h=document.querySelector(`[data-progress-text]`),g=document.querySelector(`[data-board-grid]`),_=document.querySelector(`[data-left-grid]`),v=document.querySelector(`[data-bottom-grid]`),y=document.querySelector(`[data-start-overlay]`),b=document.querySelector(`[data-confetti]`),x=document.querySelector(`.puzzle-page`),S=[],C=[],w=!1,T=!1,E=null;function D(e){let t=[...e];for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function O(e){m instanceof HTMLElement&&(m.textContent=e)}function k(){let e=S.filter(e=>e.placed).length;h instanceof HTMLElement&&(h.textContent=`Собрано ${e} из ${i}`)}function A(e){u instanceof HTMLElement&&(u.hidden=!e,u.classList.toggle(`is-visible`,e))}function j(e){f instanceof HTMLElement&&(f.hidden=!e,f.classList.toggle(`is-visible`,e))}function M(){if(!(b instanceof HTMLElement))return;b.innerHTML=``;let e=[`#e13535`,`#0b63ce`,`#ffffff`,`#ffd34d`];for(let t=0;t<28;t+=1){let n=document.createElement(`span`);n.className=`puzzle-confetti-piece`,n.style.left=`${t/28*100}%`,n.style.background=e[t%e.length],n.style.animationDelay=`${t%7*70}ms`,n.style.transform=`rotate(${t*19}deg)`,b.append(n)}}function N(){if(g instanceof HTMLElement){g.innerHTML=``,C=[];for(let e=0;e<n;e+=1)for(let t=0;t<r;t+=1){let n=e*r+t,i=document.createElement(`div`);i.className=`puzzle-board-cell`,i.dataset.slotIndex=String(n),i.innerHTML=`
        <span class="puzzle-slot-wave"></span>
        <span class="puzzle-slot-dot"></span>
      `,g.append(i),C.push(i)}}}function P(e,t,n){if(e instanceof HTMLElement){e.innerHTML=``;for(let r=0;r<t;r+=1){let t=document.createElement(`div`);t.className=`puzzle-tray-slot`,t.dataset.trayName=n,t.dataset.traySlot=String(r),e.append(t)}}}function F(e,t){let n=`[data-tray-name="${e}"][data-tray-slot="${t}"]`;return document.querySelector(n)}function I(e){e.element.classList.remove(`is-dragging`,`is-placed`),e.element.style.position=``,e.element.style.left=``,e.element.style.top=``,e.element.style.width=``,e.element.style.height=``,e.element.style.transform=``,e.element.style.pointerEvents=``,e.element.style.zIndex=``}function L(e){let t=F(e.homeZone,e.homeSlot);e.placed=!1,t instanceof HTMLElement&&t.append(e.element),I(e)}function R(e){let t=C[e.correctIndex];t instanceof HTMLElement&&(e.placed=!0,t.innerHTML=``,t.append(e.element),I(e),e.element.classList.add(`is-placed`))}function z(){S.every(e=>e.placed)&&(T=!0,O(`Браво! Все детали на месте, картинка собрана.`),M(),j(!0))}function B(){let e=!w;c instanceof HTMLButtonElement&&(c.disabled=e),l instanceof HTMLButtonElement&&(l.disabled=e)}function V(){D(S.map(e=>e.id)).forEach((e,t)=>{let n=S.find(t=>t.id===e);n&&(t<a?(n.homeZone=`left`,n.homeSlot=t):(n.homeZone=`bottom`,n.homeSlot=t-a))})}function H(){C.forEach(e=>{e.innerHTML=`
      <span class="puzzle-slot-wave"></span>
      <span class="puzzle-slot-dot"></span>
    `})}function U(){w=!0,T=!1,j(!1),A(!1),V(),H(),S.forEach(e=>{L(e)}),k(),B(),y instanceof HTMLElement&&(y.hidden=!0),O(`Игра началась. Тяните детали в правильные клеточки.`)}function W(){U(),O(`Начинаем сначала. Новое морское приключение уже готово.`)}function G(){w&&A(!0)}function K(e,t,n){let r=C[e.correctIndex];if(!(r instanceof HTMLElement)){L(e);return}let i=r.getBoundingClientRect(),a=i.left+i.width/2,o=i.top+i.height/2,s=t-a,c=n-o,l=Math.max(i.width,i.height)*.7;Math.hypot(s,c)<=l?(R(e),k(),O(`Отлично! Деталь встала на своё место.`),z()):(L(e),O(`Почти! Попробуйте отпустить деталь ближе к её месту.`))}function q(e,t){if(!E)return;let{piece:n}=E;E=null,document.body.classList.remove(`puzzle-no-select`),K(n,e,t)}function J(e,t){if(!w||T||t.placed)return;e.preventDefault();let n=t.element.getBoundingClientRect();E={piece:t,pointerOffsetX:e.clientX-n.left,pointerOffsetY:e.clientY-n.top},t.element.classList.add(`is-dragging`),t.element.style.position=`fixed`,t.element.style.left=`${n.left}px`,t.element.style.top=`${n.top}px`,t.element.style.width=`${n.width}px`,t.element.style.height=`${n.height}px`,t.element.style.pointerEvents=`none`,t.element.style.zIndex=`1000`,document.body.append(t.element),document.body.classList.add(`puzzle-no-select`)}function Y(e){e.element.addEventListener(`pointerdown`,t=>{J(t,e)})}function X(e,t,i){let a=document.createElement(`canvas`),o=Math.floor(e.naturalWidth/r),s=Math.floor(e.naturalHeight/n);a.width=o,a.height=s;let c=a.getContext(`2d`);return c?(c.drawImage(e,i*o,t*s,o,s,0,0,o,s),a.toDataURL(`image/png`)):``}function Z(e){S=[];for(let t=0;t<n;t+=1)for(let n=0;n<r;n+=1){let i=t*r+n,o=document.createElement(`button`);o.className=`puzzle-piece`,o.type=`button`,o.setAttribute(`aria-label`,`Деталь ${i+1}`);let s=document.createElement(`img`);s.src=X(e,t,n),s.alt=``,s.draggable=!1,o.append(s);let c={id:i,correctIndex:i,homeZone:i<a?`left`:`bottom`,homeSlot:i<a?i:i-a,placed:!1,element:o};Y(c),S.push(c)}}function Q(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}async function $(){N(),P(_,a,`left`),P(v,o,`bottom`),B(),s instanceof HTMLButtonElement&&(s.disabled=!0);try{Z(await Q(e))}catch{O(`Не удалось загрузить картинку для пазла.`);return}s instanceof HTMLButtonElement&&(s.disabled=!1),y instanceof HTMLElement&&(y.hidden=!1)}s?.addEventListener(`click`,()=>{U()}),c?.addEventListener(`click`,()=>{W()}),l?.addEventListener(`click`,()=>{G()}),d.forEach(e=>{e.addEventListener(`click`,()=>{A(!1)})}),p.forEach(e=>{e.addEventListener(`click`,()=>{W()})}),document.addEventListener(`pointermove`,e=>{if(!E)return;e.preventDefault();let{piece:t,pointerOffsetX:n,pointerOffsetY:r}=E;t.element.style.left=`${e.clientX-n}px`,t.element.style.top=`${e.clientY-r}px`}),document.addEventListener(`pointerup`,e=>{E&&q(e.clientX,e.clientY)}),document.addEventListener(`pointercancel`,()=>{E&&(L(E.piece),E=null,document.body.classList.remove(`puzzle-no-select`))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(A(!1),j(!1))}),x instanceof HTMLElement&&x.addEventListener(`touchmove`,e=>{E&&e.preventDefault()},{passive:!1}),$();