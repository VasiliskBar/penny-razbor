(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`);e.innerHTML=`
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#top">
        <span class="brand-mark">18+</span>
        <span class="brand-text">
          <strong>Пенный Разбор</strong>
          <span>Информационная страница для ценителей пенного</span>
        </span>
      </a>

      <div
        class="header-scene"
        role="img"
        aria-label="Егор, Вася и Саня сидят за барной стойкой и по очереди поднимают кружки пива"
      >
        <canvas
          id="headerPixelCanvas"
          class="header-pixel-canvas"
          width="192"
          height="88"
        ></canvas>
        <div class="header-scene-labels" aria-hidden="true">
          <span>Егор</span>
          <span>Вася</span>
          <span>Саня</span>
        </div>
      </div>

      <nav class="site-nav" aria-label="Основная навигация">
        <a href="#styles">Стили</a>
        <a href="#guide">Подбор</a>
        <a href="#pairings">Сочетания</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Дегустации, стили и честный разговор о вкусе</p>
          <h1>Просто пей пиво. Я помогу выбрать сорт со вкусом и без суеты.</h1>
          <p class="hero-lead">
            Рассказываю о стилях пива, подсказываю, что взять под настроение,
            и объясняю, с чем лучше сочетается каждый бокал.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Оставить заявку</a>
            <a class="button button-secondary" href="#styles">Посмотреть стили</a>
          </div>

          <ul class="hero-points" aria-label="Преимущества">
            <li>Разберем популярные стили от лагеров до плотных темных сортов</li>
            <li>Подберем пиво под еду, вечер и компанию</li>
            <li>Подскажем, что взять, если не хочется ошибиться с выбором</li>
          </ul>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-glass">
            <div class="foam foam-left"></div>
            <div class="foam foam-center"></div>
            <div class="foam foam-right"></div>
            <div class="glass-shine"></div>
          </div>

          <div class="flavor-card flavor-card-top">
            <span>Пилснер</span>
            <strong>Легкая горчинка, свежесть и чистый вкус</strong>
          </div>
          <div class="flavor-card flavor-card-middle">
            <span>Пшеничное</span>
            <strong>Мягкая текстура и освежающий характер</strong>
          </div>
          <div class="flavor-card flavor-card-bottom">
            <span>Портер</span>
            <strong>Плотность, карамель и темный солод</strong>
          </div>
        </div>
      </section>

      <section class="feature-ribbon" aria-label="Что есть на странице">
        <article>
          <span class="feature-label">Стили</span>
          <p>Покажу разницу между лагером, IPA, пшеничным и портером.</p>
        </article>
        <article>
          <span class="feature-label">Подбор</span>
          <p>Помогу понять, какой сорт лучше подойдет именно вам.</p>
        </article>
        <article>
          <span class="feature-label">Сочетания</span>
          <p>Подскажу пары к мясу, рыбе, закускам и долгому разговору.</p>
        </article>
      </section>

      <section class="section" id="styles">
        <div class="section-heading">
          <p class="eyebrow">Основные направления</p>
          <h2>Стили пива, с которых удобно начать выбор</h2>
          <p>
            Без снобизма и сложных терминов: коротко о том, как каждый стиль
            ощущается в бокале и для какого настроения подходит.
          </p>
        </div>

        <div class="style-grid">
          <article class="style-card">
            <span class="style-index">01</span>
            <h3>Пилснер</h3>
            <p>
              Для тех, кто любит чистый солодовый вкус, легкую горчинку и
              освежающий финиш без лишней тяжести.
            </p>
          </article>
          <article class="style-card">
            <span class="style-index">02</span>
            <h3>Пшеничное</h3>
            <p>
              Мягкое, чуть более округлое во вкусе, хорошо подходит для теплого
              вечера и спокойного темпа.
            </p>
          </article>
          <article class="style-card">
            <span class="style-index">03</span>
            <h3>IPA</h3>
            <p>
              Для тех, кому хочется больше хмеля, аромата и выразительного
              характера в каждом глотке.
            </p>
          </article>
          <article class="style-card">
            <span class="style-index">04</span>
            <h3>Портер</h3>
            <p>
              Темный, насыщенный и основательный стиль с нотами карамели,
              тоста и жареного солода.
            </p>
          </article>
        </div>
      </section>

      <section class="section guide-section" id="guide">
        <div class="section-heading">
          <p class="eyebrow">Как выбираем</p>
          <h2>Помогу подобрать сорт под настроение, еду и формат вечера</h2>
        </div>

        <div class="guide-grid">
          <article class="guide-card">
            <span class="guide-tag">После работы</span>
            <h3>Нужна легкость</h3>
            <p>
              Обычно советую пилснер или светлый лагер: они не перегружают вкус
              и хорошо заходят в спокойном ритме.
            </p>
          </article>
          <article class="guide-card">
            <span class="guide-tag">Под мясо</span>
            <h3>Нужна насыщенность</h3>
            <p>
              Здесь уже интереснее смотреть в сторону IPA, янтарных элей или
              более плотных темных сортов.
            </p>
          </article>
          <article class="guide-card">
            <span class="guide-tag">Для разговора</span>
            <h3>Нужен характер</h3>
            <p>
              Если хочется сидеть долго и обсуждать вкус, беру стили, у которых
              есть заметный аромат, плотность и послевкусие.
            </p>
          </article>
        </div>
      </section>

      <section class="section pairings-section" id="pairings">
        <div class="section-heading">
          <p class="eyebrow">Гастропары</p>
          <h2>Что с чем сочетается</h2>
        </div>

        <div class="pairing-list">
          <article class="pairing-item">
            <h3>Пилснер + жареные закуски</h3>
            <p>Хруст, соль и легкая горчинка отлично работают вместе.</p>
          </article>
          <article class="pairing-item">
            <h3>Пшеничное + рыба</h3>
            <p>Свежесть и мягкость не спорят с деликатным вкусом блюда.</p>
          </article>
          <article class="pairing-item">
            <h3>IPA + бургер</h3>
            <p>Хмель уверенно держит жирность и делает вкус ярче.</p>
          </article>
          <article class="pairing-item">
            <h3>Портер + мясо на гриле</h3>
            <p>Темный солод красиво подчеркивает карамелизацию и дымок.</p>
          </article>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="contact-copy">
          <p class="eyebrow">Совместное распитие</p>
          <h2>Оставьте заявку, а пока все работает в ручном режиме</h2>
          <p>
            Бэкенд пока не подключен, поэтому после заявки я просто покажу
            подтверждение и предложу связаться по телефону.
          </p>

          <div class="contact-panel">
            <span>Телефон для связи</span>
            <a href="tel:+79833241922">+7 983 324 19 22</a>
          </div>
        </div>

        <form class="contact-form" data-request-form>
          <label>
            Имя
            <input type="text" name="name" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Что любите
            <input
              type="text"
              name="favorite"
              placeholder="Например: лагер, IPA, темные сорта"
            />
          </label>
          <label>
            Комментарий
            <textarea
              name="message"
              rows="4"
              placeholder="Во сколько удобнее созвониться или что хотите попробовать"
            ></textarea>
          </label>
          <button class="button button-primary" type="submit">
            Оставить заявку на дегустацию
          </button>
          <p class="form-status" data-form-status hidden></p>
        </form>
      </section>

      <section class="section snake-section" id="snake-section">
        <div class="snake-copy">
          <div class="section-heading">
            <p class="eyebrow">Пенная игра</p>
            <h2>Пенная Змейка</h2>
            <p>
              Пока выбираете сорт, можно размяться в классической змейке.
              Поле выглядит как большая кружка пива, а сама змейка собрана из
              пузырьков, которые гоняются за новой каплей.
            </p>
          </div>

          <div class="snake-hints" aria-label="Подсказки по игре">
            <span class="snake-hint">Стрелки для движения</span>
            <span class="snake-hint">Поймал каплю - вырос</span>
            <span class="snake-hint">Столкновение - рестарт</span>
          </div>

          <div class="snake-controls">
            <button class="button button-secondary snake-toggle" type="button" data-snake-toggle>
              Пауза
            </button>
            <span class="snake-caption">Пробел или кнопка ставят игру на паузу</span>
          </div>

          <p class="snake-status" data-snake-status>
            Нажмите стрелки и начните новый бокал.
          </p>
        </div>

        <div class="snake-board">
          <canvas
            id="snakeCanvas"
            width="420"
            height="420"
            tabindex="0"
            aria-label="Классическая игра Змейка в пивной кружке"
          ></canvas>

          <div class="snake-promo" data-snake-promo hidden aria-hidden="true">
            <div class="snake-promo-card" role="dialog" aria-labelledby="snakePromoTitle">
              <p class="snake-promo-label">Акция для ценителей</p>
              <h3 id="snakePromoTitle">Бесплатная кружка пива</h3>
              <p>
                Вы добрались до 10 очков и открыли бонус. Покажите этот промокод,
                когда придете за пенным.
              </p>
              <p class="snake-promo-code">Пивозавр</p>
              <button
                class="button button-primary"
                type="button"
                data-snake-promo-close
              >
                Забрать промокод и продолжить
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Информационная страница о пиве для совершеннолетних посетителей.</p>
      <p>18+ Пожалуйста, относитесь к алкоголю ответственно.</p>
    </footer>
  </div>
`;var t=document.querySelector(`#headerPixelCanvas`),n=document.querySelector(`[data-request-form]`),r=document.querySelector(`[data-form-status]`);if(t instanceof HTMLCanvasElement){let e=t.getContext(`2d`);if(e){let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=[{x:40,shirt:`#7a3b17`,shirtShade:`#4f220d`,skin:`#f1c08d`,hair:`#2a150b`,mugTargetX:3,mugTargetY:28,cycle:2500,offset:0,blinkCycle:2600,blinkOffset:180,headLift:2,tapCycle:2100},{x:96,shirt:`#486835`,shirtShade:`#2d4321`,skin:`#edbe90`,hair:`#5e3413`,mugTargetX:6,mugTargetY:27,cycle:2900,offset:760,blinkCycle:3100,blinkOffset:420,headLift:3,tapCycle:1700},{x:152,shirt:`#35588a`,shirtShade:`#213a5c`,skin:`#efbf95`,hair:`#1a2a3d`,mugTargetX:5,mugTargetY:26,cycle:3300,offset:1460,blinkCycle:2800,blinkOffset:920,headLift:2,tapCycle:2400}],i=0;e.imageSmoothingEnabled=!1;function a(e,t,n){return Math.min(Math.max(e,t),n)}function o(e,t,n){return e+(t-e)*n}function s(e){let t=a(e,0,1);return t*t*(3-2*t)}function c(t,n,r,i,a){e.fillStyle=a,e.fillRect(Math.round(t),Math.round(n),r,i)}function l(e,t,n,r,i,a=1){let o=Math.round(e),s=Math.round(t),l=Math.round(n),u=Math.round(r),d=Math.abs(l-o),f=Math.abs(u-s),p=o<l?1:-1,m=s<u?1:-1,h=d-f;for(;c(o,s,a,a,i),!(o===l&&s===u);){let e=h*2;e>-f&&(h-=f,o+=p),e<d&&(h+=d,s+=m)}}function u(e){return e<.16||e>.9?0:e<.34?s((e-.16)/.18):e<.54?1:1-s((e-.54)/.36)}function d(e){let r=t.width,i=t.height;c(0,0,r,i,`#1b0c06`),c(0,6,r,20,`#2c1208`),c(0,26,r,18,`#241008`);let a=n.matches?0:Math.round(Math.sin(e/320)*2);c(16,12,44,2,`#5f2d12`),c(16,14,44,1,`#ffd978`),c(136,12,40,2,`#5f2d12`),c(136,14,40,1,`#ffb54a`),c(20,18+a,4,8,`#7dc59f`),c(28,16,5,10,`#b96f39`),c(38,19-a,4,7,`#84a4d8`),c(142,17,4,9,`#cf8f41`),c(150,19+a,5,7,`#6db0b6`),c(160,16,4,10,`#be655e`),c(0,44,r,8,`#8a3d12`),c(0,52,r,4,`#ffcb63`),c(0,56,r,24,`#6d2d0f`),c(0,80,r,8,`#4a1b0a`),c(0,56,r,1,`rgba(255, 245, 210, 0.35)`),c(0,68,r,1,`rgba(255, 180, 82, 0.12)`);for(let e=0;e<r;e+=12)c(e,82,6,1,`rgba(255, 212, 140, 0.08)`)}function f(e,t,r){let i=n.matches?0:Math.round(Math.sin(r/140)*1);c(e,t,6,7,`#ffbf3c`),c(e+1,t+1,4,5,`#ffd56e`),c(e,t-2,6,2,`#fff7d6`),c(e+6,t+1,1,4,`#f8e0a3`),c(e+7,t+2,1,2,`#f8e0a3`),c(e+1,t-3+i,1,1,`#fffdf1`),c(e+4,t-4-i,1,1,`#fffdf1`)}function p(e,t){let r=n.matches?.24:(t+e.offset)%e.cycle/e.cycle,i=n.matches?0:(t+e.blinkOffset)%e.blinkCycle/e.blinkCycle,a=s(u(r)),d=n.matches?0:Math.sin((t+e.offset)/320)*.7,p=Math.round(d-e.headLift*a),m=n.matches?0:Math.round(Math.max(0,Math.sin((t+e.offset)/e.tapCycle))*2),h=i>.48&&i<.56,g=e.x-6,_=26+p,v=36+p,y=e.x+10,b=e.x+e.mugTargetX,x=e.mugTargetY+p,S=Math.round(o(y,b,a)),C=Math.round(o(46,x,a)),w=e.x+3,T=v+2;c(e.x-7,74,14,2,`#452010`),c(e.x-5,76,2,8,`#2e140a`),c(e.x+3,76,2,8,`#2e140a`),c(g,_,12,10,e.skin),c(g,_,12,2,e.hair),c(g,_+2,2,4,e.hair),c(g+10,_+2,2,4,e.hair),c(g+3,_+7,6,1,`rgba(133, 76, 43, 0.55)`),h?(c(g+3,_+5,1,1,`#7d4d30`),c(g+8,_+5,1,1,`#7d4d30`)):(c(g+3,_+4,1,1,`#2b1208`),c(g+8,_+4,1,1,`#2b1208`)),c(g+5,_+5,1,1,`#c57b4b`),c(e.x-8,v,16,10,e.shirt),c(e.x-8,v+8,16,2,e.shirtShade),c(e.x-4,v+1,8,2,`rgba(255, 255, 255, 0.08)`),l(e.x-2,v+2,e.x-13,49+m,e.shirtShade,2),c(e.x-14,48+m,3,3,e.skin),l(w,T,S+1,C+4,e.shirtShade,2),c(S,C+4,3,3,e.skin),f(S,C,t+e.offset),c(e.x-6,46,2,1,`#ffdc88`),c(e.x+6,46,2,1,`#ffdc88`)}function m(e){d(e),r.forEach(t=>p(t,e))}function h(e){m(e),i=window.requestAnimationFrame(h)}m(0),n.matches?m(0):i=window.requestAnimationFrame(h),window.addEventListener(`beforeunload`,()=>{window.cancelAnimationFrame(i)})}}n?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(n).get(`name`)?.toString().trim();r.textContent=t?`${t}, спасибо. Пока страница работает без бэкенда, поэтому лучший способ связаться прямо сейчас: +7 983 324 19 22.`:`Спасибо. Пока страница работает без бэкенда, поэтому лучший способ связаться прямо сейчас: +7 983 324 19 22.`,r.hidden=!1,n.reset()});var i=document.querySelector(`#snakeCanvas`),a=document.querySelector(`[data-snake-status]`),o=document.querySelector(`[data-snake-toggle]`),s=document.querySelector(`[data-snake-promo]`),c=document.querySelector(`[data-snake-promo-close]`);if(i instanceof HTMLCanvasElement&&a instanceof HTMLElement){let e=i.getContext(`2d`);if(e){let t=i.width/20,n=Math.max(1,Math.ceil(20/t)),r={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},l=Array.from({length:18},(e,t)=>({x:28+t%6*62+t*17%14,y:48+Math.floor(t/6)*112+t*13%32,radius:5+t%3*3,alpha:.08+t%4*.03})),u=[],d=r.ArrowRight,f=d,p={x:0,y:0},m=0,h=`Нажмите стрелки и начните новый бокал.`,g=!1,_=!1,v=!1,y=0;function b(e){a.textContent=`${e??h} Счет: ${m}.`}function x(e=h){h=e,b()}function S(){o instanceof HTMLButtonElement&&(o.textContent=g?`Продолжить`:`Пауза`,o.setAttribute(`aria-pressed`,String(g))),!_&&(g?b(`Игра на паузе. Нажмите кнопку или пробел, чтобы продолжить.`):b())}function C(e){g=e,S()}function w(){let e=n,t=20-n-1;return{x:e+Math.floor(Math.random()*(t-e+1)),y:e+Math.floor(Math.random()*(t-e+1))}}function T(e,t=u){return t.some(t=>t.x===e.x&&t.y===e.y)}function E(){let e=w();for(;T(e);)e=w();p=e}function D(){s instanceof HTMLElement&&(_=!1,s.hidden=!0,s.setAttribute(`aria-hidden`,`true`),s.classList.remove(`is-visible`),C(!1),x(`Промокод сохранен. Можно продолжать игру.`),i.focus())}function O(){v||!(s instanceof HTMLElement)||(v=!0,_=!0,g=!0,s.hidden=!1,s.setAttribute(`aria-hidden`,`false`),s.classList.add(`is-visible`),S(),b(`Открыт промокод на бесплатную кружку. Заберите бонус и продолжайте.`))}function k(e){u=[{x:6,y:10},{x:5,y:10},{x:4,y:10}],d=r.ArrowRight,f=r.ArrowRight,m=0,g=!1,_=!1,s instanceof HTMLElement&&(s.hidden=!0,s.setAttribute(`aria-hidden`,`true`),s.classList.remove(`is-visible`)),E(),M(),x(e),S()}function A(t,n,r,i){e.save(),e.strokeStyle=`rgba(255, 247, 220, ${i})`,e.lineWidth=1.5,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke(),e.fillStyle=`rgba(255, 255, 255, ${i*.85})`,e.beginPath(),e.arc(t-r*.35,n-r*.35,r*.24,0,Math.PI*2),e.fill(),e.restore()}function j(t,n,r,i){let a=e.createRadialGradient(t-r*.35,n-r*.4,r*.18,t,n,r);a.addColorStop(0,i.inner),a.addColorStop(.55,i.middle),a.addColorStop(1,i.outer),e.save(),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.strokeStyle=i.stroke,e.lineWidth=2,e.stroke(),e.fillStyle=i.highlight,e.beginPath(),e.arc(t-r*.35,n-r*.35,r*.24,0,Math.PI*2),e.fill(),e.restore()}function M(){e.clearRect(0,0,i.width,i.height);for(let e of l)A(e.x,e.y,e.radius,e.alpha);for(let n=0;n<20;n+=1)for(let r=0;r<20;r+=1)(n+r)%2==0&&(e.fillStyle=`rgba(255, 255, 255, 0.025)`,e.fillRect(r*t,n*t,t,t));j(p.x*t+t/2,p.y*t+t/2,t*.28,{inner:`rgba(255, 252, 220, 0.98)`,middle:`rgba(255, 225, 145, 0.95)`,outer:`rgba(239, 149, 39, 0.92)`,stroke:`rgba(255, 248, 225, 0.9)`,highlight:`rgba(255, 255, 255, 0.85)`}),u.forEach((e,n)=>{let r=e.x*t+t/2,i=e.y*t+t/2,a=n===0;j(r,i,a?t*.45:t*.38,{inner:a?`#fff7b9`:`#ffe085`,middle:a?`#ffc551`:`#ffba39`,outer:a?`#d07110`:`#bb5c0b`,stroke:a?`rgba(255, 245, 200, 0.92)`:`rgba(255, 231, 165, 0.76)`,highlight:`rgba(255, 255, 255, 0.86)`})})}function N(){if(g||_)return;d=f;let e={x:u[0].x+d.x,y:u[0].y+d.y},t=e.x===p.x&&e.y===p.y,n=t?u:u.slice(0,-1),r=e.x<0||e.x>=20||e.y<0||e.y>=20,i=T(e,n);if(r||i){k(`Столкновение. Кружка переполнена, начинаем заново.`);return}u.unshift(e),t?(m+=1,E(),x(`Отлично. Пузырек пойман, змейка растет.`),m>=10&&O()):u.pop(),M()}function P(e){return e instanceof HTMLElement?e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.isContentEditable:!1}function F(){_||(C(!g),g||i.focus())}o instanceof HTMLButtonElement&&o.addEventListener(`click`,()=>{F()}),c instanceof HTMLButtonElement&&c.addEventListener(`click`,()=>{D()}),window.addEventListener(`keydown`,e=>{if(P(e.target))return;if(e.code===`Space`){e.preventDefault(),F();return}if(e.key===`Escape`&&_){e.preventDefault(),D();return}if(!(e.key in r))return;let t=r[e.key];t.x===-f.x&&t.y===-f.y||(e.preventDefault(),f=t,i.focus())}),k(`Нажмите стрелки и начните новый бокал.`),y=window.setInterval(N,130),window.addEventListener(`beforeunload`,()=>{window.clearInterval(y)})}}