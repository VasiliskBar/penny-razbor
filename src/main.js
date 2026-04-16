import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
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
`;

const headerPixelCanvas = document.querySelector("#headerPixelCanvas");
const form = document.querySelector("[data-request-form]");
const status = document.querySelector("[data-form-status]");

if (headerPixelCanvas instanceof HTMLCanvasElement) {
  const headerContext = headerPixelCanvas.getContext("2d");

  if (headerContext) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const patrons = [
      {
        x: 40,
        shirt: "#7a3b17",
        shirtShade: "#4f220d",
        skin: "#f1c08d",
        hair: "#2a150b",
        mugTargetX: 3,
        mugTargetY: 28,
        cycle: 2500,
        offset: 0,
        blinkCycle: 2600,
        blinkOffset: 180,
        headLift: 2,
        tapCycle: 2100,
      },
      {
        x: 96,
        shirt: "#486835",
        shirtShade: "#2d4321",
        skin: "#edbe90",
        hair: "#5e3413",
        mugTargetX: 6,
        mugTargetY: 27,
        cycle: 2900,
        offset: 760,
        blinkCycle: 3100,
        blinkOffset: 420,
        headLift: 3,
        tapCycle: 1700,
      },
      {
        x: 152,
        shirt: "#35588a",
        shirtShade: "#213a5c",
        skin: "#efbf95",
        hair: "#1a2a3d",
        mugTargetX: 5,
        mugTargetY: 26,
        cycle: 3300,
        offset: 1460,
        blinkCycle: 2800,
        blinkOffset: 920,
        headLift: 2,
        tapCycle: 2400,
      },
    ];

    let headerAnimationFrame = 0;

    headerContext.imageSmoothingEnabled = false;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function lerp(start, end, progress) {
      return start + (end - start) * progress;
    }

    function easeInOut(progress) {
      const value = clamp(progress, 0, 1);
      return value * value * (3 - 2 * value);
    }

    function drawPixelRect(x, y, width, height, color) {
      headerContext.fillStyle = color;
      headerContext.fillRect(Math.round(x), Math.round(y), width, height);
    }

    function drawPixelLine(x1, y1, x2, y2, color, size = 1) {
      let currentX = Math.round(x1);
      let currentY = Math.round(y1);
      const targetX = Math.round(x2);
      const targetY = Math.round(y2);
      const deltaX = Math.abs(targetX - currentX);
      const deltaY = Math.abs(targetY - currentY);
      const stepX = currentX < targetX ? 1 : -1;
      const stepY = currentY < targetY ? 1 : -1;
      let error = deltaX - deltaY;

      while (true) {
        drawPixelRect(currentX, currentY, size, size, color);

        if (currentX === targetX && currentY === targetY) {
          break;
        }

        const errorStep = error * 2;

        if (errorStep > -deltaY) {
          error -= deltaY;
          currentX += stepX;
        }

        if (errorStep < deltaX) {
          error += deltaX;
          currentY += stepY;
        }
      }
    }

    function getLift(progress) {
      if (progress < 0.16 || progress > 0.9) {
        return 0;
      }

      if (progress < 0.34) {
        return easeInOut((progress - 0.16) / 0.18);
      }

      if (progress < 0.54) {
        return 1;
      }

      return 1 - easeInOut((progress - 0.54) / 0.36);
    }

    function drawBackdrop(time) {
      const width = headerPixelCanvas.width;
      const height = headerPixelCanvas.height;

      drawPixelRect(0, 0, width, height, "#1b0c06");
      drawPixelRect(0, 6, width, 20, "#2c1208");
      drawPixelRect(0, 26, width, 18, "#241008");

      const neonShift = prefersReducedMotion.matches
        ? 0
        : Math.round(Math.sin(time / 320) * 2);

      drawPixelRect(16, 12, 44, 2, "#5f2d12");
      drawPixelRect(16, 14, 44, 1, "#ffd978");
      drawPixelRect(136, 12, 40, 2, "#5f2d12");
      drawPixelRect(136, 14, 40, 1, "#ffb54a");

      drawPixelRect(20, 18 + neonShift, 4, 8, "#7dc59f");
      drawPixelRect(28, 16, 5, 10, "#b96f39");
      drawPixelRect(38, 19 - neonShift, 4, 7, "#84a4d8");
      drawPixelRect(142, 17, 4, 9, "#cf8f41");
      drawPixelRect(150, 19 + neonShift, 5, 7, "#6db0b6");
      drawPixelRect(160, 16, 4, 10, "#be655e");

      drawPixelRect(0, 44, width, 8, "#8a3d12");
      drawPixelRect(0, 52, width, 4, "#ffcb63");
      drawPixelRect(0, 56, width, 24, "#6d2d0f");
      drawPixelRect(0, 80, width, 8, "#4a1b0a");

      drawPixelRect(0, 56, width, 1, "rgba(255, 245, 210, 0.35)");
      drawPixelRect(0, 68, width, 1, "rgba(255, 180, 82, 0.12)");

      for (let index = 0; index < width; index += 12) {
        drawPixelRect(index, 82, 6, 1, "rgba(255, 212, 140, 0.08)");
      }
    }

    function drawBeerMug(x, y, tiltSeed) {
      const foamShift = prefersReducedMotion.matches
        ? 0
        : Math.round(Math.sin(tiltSeed / 140) * 1);

      drawPixelRect(x, y, 6, 7, "#ffbf3c");
      drawPixelRect(x + 1, y + 1, 4, 5, "#ffd56e");
      drawPixelRect(x, y - 2, 6, 2, "#fff7d6");
      drawPixelRect(x + 6, y + 1, 1, 4, "#f8e0a3");
      drawPixelRect(x + 7, y + 2, 1, 2, "#f8e0a3");
      drawPixelRect(x + 1, y - 3 + foamShift, 1, 1, "#fffdf1");
      drawPixelRect(x + 4, y - 4 - foamShift, 1, 1, "#fffdf1");
    }

    function drawPatron(patron, time) {
      const cycleProgress = prefersReducedMotion.matches
        ? 0.24
        : ((time + patron.offset) % patron.cycle) / patron.cycle;
      const blinkProgress = prefersReducedMotion.matches
        ? 0
        : ((time + patron.blinkOffset) % patron.blinkCycle) / patron.blinkCycle;
      const lift = getLift(cycleProgress);
      const easedLift = easeInOut(lift);
      const idleBob = prefersReducedMotion.matches
        ? 0
        : Math.sin((time + patron.offset) / 320) * 0.7;
      const headOffsetY = Math.round(idleBob - patron.headLift * easedLift);
      const tapping = prefersReducedMotion.matches
        ? 0
        : Math.round(
            Math.max(0, Math.sin((time + patron.offset) / patron.tapCycle)) * 2,
          );
      const blinking = blinkProgress > 0.48 && blinkProgress < 0.56;

      const headX = patron.x - 6;
      const headY = 26 + headOffsetY;
      const torsoY = 36 + headOffsetY;
      const mugRestX = patron.x + 10;
      const mugRestY = 46;
      const mugTargetX = patron.x + patron.mugTargetX;
      const mugTargetY = patron.mugTargetY + headOffsetY;
      const mugX = Math.round(lerp(mugRestX, mugTargetX, easedLift));
      const mugY = Math.round(lerp(mugRestY, mugTargetY, easedLift));
      const shoulderX = patron.x + 3;
      const shoulderY = torsoY + 2;

      drawPixelRect(patron.x - 7, 74, 14, 2, "#452010");
      drawPixelRect(patron.x - 5, 76, 2, 8, "#2e140a");
      drawPixelRect(patron.x + 3, 76, 2, 8, "#2e140a");

      drawPixelRect(headX, headY, 12, 10, patron.skin);
      drawPixelRect(headX, headY, 12, 2, patron.hair);
      drawPixelRect(headX, headY + 2, 2, 4, patron.hair);
      drawPixelRect(headX + 10, headY + 2, 2, 4, patron.hair);
      drawPixelRect(headX + 3, headY + 7, 6, 1, "rgba(133, 76, 43, 0.55)");

      if (!blinking) {
        drawPixelRect(headX + 3, headY + 4, 1, 1, "#2b1208");
        drawPixelRect(headX + 8, headY + 4, 1, 1, "#2b1208");
      } else {
        drawPixelRect(headX + 3, headY + 5, 1, 1, "#7d4d30");
        drawPixelRect(headX + 8, headY + 5, 1, 1, "#7d4d30");
      }

      drawPixelRect(headX + 5, headY + 5, 1, 1, "#c57b4b");

      drawPixelRect(patron.x - 8, torsoY, 16, 10, patron.shirt);
      drawPixelRect(patron.x - 8, torsoY + 8, 16, 2, patron.shirtShade);
      drawPixelRect(patron.x - 4, torsoY + 1, 8, 2, "rgba(255, 255, 255, 0.08)");

      drawPixelLine(patron.x - 2, torsoY + 2, patron.x - 13, 49 + tapping, patron.shirtShade, 2);
      drawPixelRect(patron.x - 14, 48 + tapping, 3, 3, patron.skin);

      drawPixelLine(shoulderX, shoulderY, mugX + 1, mugY + 4, patron.shirtShade, 2);
      drawPixelRect(mugX, mugY + 4, 3, 3, patron.skin);

      drawBeerMug(mugX, mugY, time + patron.offset);

      drawPixelRect(patron.x - 6, 46, 2, 1, "#ffdc88");
      drawPixelRect(patron.x + 6, 46, 2, 1, "#ffdc88");
    }

    function drawHeaderScene(time) {
      drawBackdrop(time);
      patrons.forEach((patron) => drawPatron(patron, time));
    }

    function animateHeaderScene(time) {
      drawHeaderScene(time);
      headerAnimationFrame = window.requestAnimationFrame(animateHeaderScene);
    }

    drawHeaderScene(0);

    if (prefersReducedMotion.matches) {
      drawHeaderScene(0);
    } else {
      headerAnimationFrame = window.requestAnimationFrame(animateHeaderScene);
    }

    window.addEventListener("beforeunload", () => {
      window.cancelAnimationFrame(headerAnimationFrame);
    });
  }
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name")?.toString().trim();

  status.textContent = name
    ? `${name}, спасибо. Пока страница работает без бэкенда, поэтому лучший способ связаться прямо сейчас: +7 983 324 19 22.`
    : "Спасибо. Пока страница работает без бэкенда, поэтому лучший способ связаться прямо сейчас: +7 983 324 19 22.";
  status.hidden = false;

  form.reset();
});

const snakeCanvas = document.querySelector("#snakeCanvas");
const snakeStatus = document.querySelector("[data-snake-status]");
const snakeToggle = document.querySelector("[data-snake-toggle]");
const snakePromo = document.querySelector("[data-snake-promo]");
const snakePromoClose = document.querySelector("[data-snake-promo-close]");

if (snakeCanvas instanceof HTMLCanvasElement && snakeStatus instanceof HTMLElement) {
  const context = snakeCanvas.getContext("2d");

  if (context) {
    const cellCount = 20;
    const cellSize = snakeCanvas.width / cellCount;
    const foodEdgeOffset = Math.max(1, Math.ceil(20 / cellSize));
    const directions = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
    };

    const ambientBubbles = Array.from({ length: 18 }, (_, index) => ({
      x: 28 + (index % 6) * 62 + ((index * 17) % 14),
      y: 48 + Math.floor(index / 6) * 112 + ((index * 13) % 32),
      radius: 5 + (index % 3) * 3,
      alpha: 0.08 + (index % 4) * 0.03,
    }));

    let snake = [];
    let direction = directions.ArrowRight;
    let nextDirection = direction;
    let food = { x: 0, y: 0 };
    let score = 0;
    let note = "Нажмите стрелки и начните новый бокал.";
    let isPaused = false;
    let isPromoVisible = false;
    let promoUnlocked = false;
    let gameLoopId = 0;

    function renderSnakeStatus(overrideMessage) {
      const message = overrideMessage ?? note;
      snakeStatus.textContent = `${message} Счет: ${score}.`;
    }

    function updateSnakeStatus(message = note) {
      note = message;
      renderSnakeStatus();
    }

    function syncPauseState() {
      if (snakeToggle instanceof HTMLButtonElement) {
        snakeToggle.textContent = isPaused ? "Продолжить" : "Пауза";
        snakeToggle.setAttribute("aria-pressed", String(isPaused));
      }

      if (isPromoVisible) {
        return;
      }

      if (isPaused) {
        renderSnakeStatus("Игра на паузе. Нажмите кнопку или пробел, чтобы продолжить.");
      } else {
        renderSnakeStatus();
      }
    }

    function setPaused(value) {
      isPaused = value;
      syncPauseState();
    }

    function randomCell() {
      const minCell = foodEdgeOffset;
      const maxCell = cellCount - foodEdgeOffset - 1;

      return {
        x: minCell + Math.floor(Math.random() * (maxCell - minCell + 1)),
        y: minCell + Math.floor(Math.random() * (maxCell - minCell + 1)),
      };
    }

    function isOnSnake(point, body = snake) {
      return body.some((segment) => segment.x === point.x && segment.y === point.y);
    }

    function placeFood() {
      let nextFood = randomCell();

      while (isOnSnake(nextFood)) {
        nextFood = randomCell();
      }

      food = nextFood;
    }

    function hidePromo() {
      if (!(snakePromo instanceof HTMLElement)) {
        return;
      }

      isPromoVisible = false;
      snakePromo.hidden = true;
      snakePromo.setAttribute("aria-hidden", "true");
      snakePromo.classList.remove("is-visible");
      setPaused(false);
      updateSnakeStatus("Промокод сохранен. Можно продолжать игру.");
      snakeCanvas.focus();
    }

    function showPromo() {
      if (promoUnlocked || !(snakePromo instanceof HTMLElement)) {
        return;
      }

      promoUnlocked = true;
      isPromoVisible = true;
      isPaused = true;
      snakePromo.hidden = false;
      snakePromo.setAttribute("aria-hidden", "false");
      snakePromo.classList.add("is-visible");
      syncPauseState();
      renderSnakeStatus("Открыт промокод на бесплатную кружку. Заберите бонус и продолжайте.");
    }

    function resetGame(message) {
      snake = [
        { x: 6, y: 10 },
        { x: 5, y: 10 },
        { x: 4, y: 10 },
      ];
      direction = directions.ArrowRight;
      nextDirection = directions.ArrowRight;
      score = 0;
      isPaused = false;
      isPromoVisible = false;
      if (snakePromo instanceof HTMLElement) {
        snakePromo.hidden = true;
        snakePromo.setAttribute("aria-hidden", "true");
        snakePromo.classList.remove("is-visible");
      }
      placeFood();
      drawScene();
      updateSnakeStatus(message);
      syncPauseState();
    }

    function drawAmbientBubble(x, y, radius, alpha) {
      context.save();
      context.strokeStyle = `rgba(255, 247, 220, ${alpha})`;
      context.lineWidth = 1.5;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.stroke();

      context.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
      context.beginPath();
      context.arc(x - radius * 0.35, y - radius * 0.35, radius * 0.24, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    function drawBubble(x, y, radius, colors) {
      const gradient = context.createRadialGradient(
        x - radius * 0.35,
        y - radius * 0.4,
        radius * 0.18,
        x,
        y,
        radius,
      );

      gradient.addColorStop(0, colors.inner);
      gradient.addColorStop(0.55, colors.middle);
      gradient.addColorStop(1, colors.outer);

      context.save();
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = colors.stroke;
      context.lineWidth = 2;
      context.stroke();

      context.fillStyle = colors.highlight;
      context.beginPath();
      context.arc(x - radius * 0.35, y - radius * 0.35, radius * 0.24, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    function drawScene() {
      context.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

      for (const bubble of ambientBubbles) {
        drawAmbientBubble(bubble.x, bubble.y, bubble.radius, bubble.alpha);
      }

      for (let row = 0; row < cellCount; row += 1) {
        for (let column = 0; column < cellCount; column += 1) {
          if ((row + column) % 2 !== 0) {
            continue;
          }

          context.fillStyle = "rgba(255, 255, 255, 0.025)";
          context.fillRect(
            column * cellSize,
            row * cellSize,
            cellSize,
            cellSize,
          );
        }
      }

      const foodX = food.x * cellSize + cellSize / 2;
      const foodY = food.y * cellSize + cellSize / 2;

      drawBubble(foodX, foodY, cellSize * 0.28, {
        inner: "rgba(255, 252, 220, 0.98)",
        middle: "rgba(255, 225, 145, 0.95)",
        outer: "rgba(239, 149, 39, 0.92)",
        stroke: "rgba(255, 248, 225, 0.9)",
        highlight: "rgba(255, 255, 255, 0.85)",
      });

      snake.forEach((segment, index) => {
        const x = segment.x * cellSize + cellSize / 2;
        const y = segment.y * cellSize + cellSize / 2;
        const isHead = index === 0;

        drawBubble(x, y, isHead ? cellSize * 0.45 : cellSize * 0.38, {
          inner: isHead ? "#fff7b9" : "#ffe085",
          middle: isHead ? "#ffc551" : "#ffba39",
          outer: isHead ? "#d07110" : "#bb5c0b",
          stroke: isHead ? "rgba(255, 245, 200, 0.92)" : "rgba(255, 231, 165, 0.76)",
          highlight: "rgba(255, 255, 255, 0.86)",
        });
      });
    }

    function step() {
      if (isPaused || isPromoVisible) {
        return;
      }

      direction = nextDirection;

      const nextHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };

      const eatsFood = nextHead.x === food.x && nextHead.y === food.y;
      const bodyToCheck = eatsFood ? snake : snake.slice(0, -1);
      const hitsWall =
        nextHead.x < 0 ||
        nextHead.x >= cellCount ||
        nextHead.y < 0 ||
        nextHead.y >= cellCount;
      const hitsSelf = isOnSnake(nextHead, bodyToCheck);

      if (hitsWall || hitsSelf) {
        resetGame("Столкновение. Кружка переполнена, начинаем заново.");
        return;
      }

      snake.unshift(nextHead);

      if (eatsFood) {
        score += 1;
        placeFood();
        updateSnakeStatus("Отлично. Пузырек пойман, змейка растет.");

        if (score >= 10) {
          showPromo();
        }
      } else {
        snake.pop();
      }

      drawScene();
    }

    function isEditableTarget(target) {
      if (!(target instanceof HTMLElement)) {
        return false;
      }

      return (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      );
    }

    function togglePause() {
      if (isPromoVisible) {
        return;
      }

      setPaused(!isPaused);

      if (!isPaused) {
        snakeCanvas.focus();
      }
    }

    if (snakeToggle instanceof HTMLButtonElement) {
      snakeToggle.addEventListener("click", () => {
        togglePause();
      });
    }

    if (snakePromoClose instanceof HTMLButtonElement) {
      snakePromoClose.addEventListener("click", () => {
        hidePromo();
      });
    }

    window.addEventListener("keydown", (event) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        togglePause();
        return;
      }

      if (event.key === "Escape" && isPromoVisible) {
        event.preventDefault();
        hidePromo();
        return;
      }

      if (!(event.key in directions)) {
        return;
      }

      const proposedDirection = directions[event.key];

      if (
        proposedDirection.x === -nextDirection.x &&
        proposedDirection.y === -nextDirection.y
      ) {
        return;
      }

      event.preventDefault();
      nextDirection = proposedDirection;
      snakeCanvas.focus();
    });

    resetGame("Нажмите стрелки и начните новый бокал.");
    gameLoopId = window.setInterval(step, 130);

    window.addEventListener("beforeunload", () => {
      window.clearInterval(gameLoopId);
    });
  }
}
