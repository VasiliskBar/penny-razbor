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
          width="720"
          height="176"
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
            <span class="snake-hint">Стрелки и свайпы для движения</span>
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
    const pixelSize = 4;
    const sceneWidth = headerPixelCanvas.width / pixelSize;
    const sceneHeight = headerPixelCanvas.height / pixelSize;
    const signGlyphs = {
      B: [
        "11110",
        "10001",
        "11110",
        "10001",
        "10001",
        "11110",
      ],
      A: [
        "01110",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
      ],
      R: [
        "11110",
        "10001",
        "10001",
        "11110",
        "10100",
        "10010",
      ],
    };
    const patrons = [
      {
        x: 34,
        skin: "#f1c08c",
        hair: "#26130b",
        shirt: "#8b461f",
        shirtShade: "#5f2b12",
        beard: true,
        moustache: false,
        cap: false,
        mouthOffsetX: 0,
        mouthOffsetY: 0,
        drinkWindow: [0.04, 0.09, 0.13, 0.18],
        toastOneTarget: { x: 70, y: 18 },
        toastTwoTarget: null,
        blinkOffset: 0,
        idleOffset: 0.4,
        tapOffset: 0.2,
      },
      {
        x: 90,
        skin: "#edbc92",
        hair: "#6a3916",
        shirt: "#496b38",
        shirtShade: "#2f4524",
        beard: false,
        moustache: true,
        cap: false,
        mouthOffsetX: 1,
        mouthOffsetY: -1,
        drinkWindow: [0.22, 0.27, 0.31, 0.37],
        toastOneTarget: { x: 78, y: 17 },
        toastTwoTarget: { x: 104, y: 17 },
        blinkOffset: 0.9,
        idleOffset: 1.2,
        tapOffset: 1.1,
      },
      {
        x: 146,
        skin: "#efc198",
        hair: "#20324d",
        shirt: "#3a5f93",
        shirtShade: "#243d5c",
        beard: false,
        moustache: false,
        cap: true,
        mouthOffsetX: 1,
        mouthOffsetY: -1,
        drinkWindow: [0.41, 0.46, 0.5, 0.56],
        toastOneTarget: null,
        toastTwoTarget: { x: 112, y: 18 },
        blinkOffset: 1.6,
        idleOffset: 2.1,
        tapOffset: 1.7,
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

    function segment(progress, start, peakStart, peakEnd, finish) {
      if (progress <= start || progress >= finish) {
        return 0;
      }

      if (progress < peakStart) {
        return easeInOut((progress - start) / (peakStart - start));
      }

      if (progress <= peakEnd) {
        return 1;
      }

      return 1 - easeInOut((progress - peakEnd) / (finish - peakEnd));
    }

    function px(x, y, width, height, color) {
      headerContext.fillStyle = color;
      headerContext.fillRect(
        Math.round(x * pixelSize),
        Math.round(y * pixelSize),
        Math.round(width * pixelSize),
        Math.round(height * pixelSize),
      );
    }

    function line(x1, y1, x2, y2, color, size = 1) {
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
        px(currentX, currentY, size, size, color);

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

    function drawGlyph(letter, startX, startY, color) {
      const glyph = signGlyphs[letter];

      if (!glyph) {
        return;
      }

      glyph.forEach((row, rowIndex) => {
        [...row].forEach((cell, cellIndex) => {
          if (cell === "1") {
            px(startX + cellIndex, startY + rowIndex, 1, 1, color);
          }
        });
      });
    }

    function drawSign(time) {
      const signX = 61;
      const signY = 3;
      const signWidth = 58;
      const signHeight = 10;
      const bulbs = [];
      const bulbPhase = prefersReducedMotion.matches
        ? 0
        : Math.floor(time / 110) % 18;
      const neonGlow = prefersReducedMotion.matches
        ? "#ffd972"
        : Math.sin(time / 180) > 0.15
          ? "#ffe89a"
          : "#ffbf41";

      px(signX, signY, signWidth, signHeight, "#2d1209");
      px(signX + 1, signY + 1, signWidth - 2, signHeight - 2, "#412014");

      for (let x = signX + 3; x <= signX + signWidth - 4; x += 4) {
        bulbs.push({ x, y: signY + 1 });
        bulbs.push({ x, y: signY + signHeight - 2 });
      }

      for (let y = signY + 3; y <= signY + signHeight - 4; y += 3) {
        bulbs.push({ x: signX + 1, y });
        bulbs.push({ x: signX + signWidth - 2, y });
      }

      bulbs.forEach((bulb, index) => {
        const isLit = index % 18 === bulbPhase || (index + 5) % 18 === bulbPhase;
        px(bulb.x, bulb.y, 1, 1, isLit ? "#ffe08e" : "#8a4822");
      });

      drawGlyph("B", signX + 15, signY + 2, neonGlow);
      drawGlyph("A", signX + 23, signY + 2, neonGlow);
      drawGlyph("R", signX + 31, signY + 2, neonGlow);

      const arrowOffset = prefersReducedMotion.matches
        ? 0
        : Math.floor((time / 120) % 4);

      px(signX + 44, signY + 4, 1, 1, "#ffcf66");
      px(signX + 45, signY + 4, 1, 1, "#ffcf66");
      px(signX + 46, signY + 4, 1, 1, "#ffcf66");
      px(signX + 47, signY + 3 + arrowOffset % 2, 1, 1, "#ffcf66");
      px(signX + 47, signY + 4, 1, 1, "#ffcf66");
      px(signX + 47, signY + 5 - (arrowOffset % 2), 1, 1, "#ffcf66");
    }

    function drawBackWall(time) {
      px(0, 0, sceneWidth, sceneHeight, "#170904");
      px(0, 0, sceneWidth, 11, "#1f0d06");
      px(0, 11, sceneWidth, 8, "#271108");
      px(0, 19, sceneWidth, 8, "#1f0d06");

      px(10, 12, 38, 1, "#6d3313");
      px(132, 12, 38, 1, "#6d3313");
      px(18, 8, 4, 4, "#9cc6a1");
      px(26, 7, 5, 5, "#b87038");
      px(36, 8, 4, 4, "#7ea7da");
      px(138, 7, 4, 5, "#ba7a35");
      px(146, 8, 5, 4, "#6db5ba");
      px(156, 7, 4, 5, "#c46f68");

      drawSign(time);

      for (let x = 0; x < sceneWidth; x += 10) {
        px(x, 24, 4, 1, "rgba(255, 216, 142, 0.03)");
      }
    }

    function drawBarForeground() {
      px(0, 28, sceneWidth, 2, "#ffca5c");
      px(0, 30, sceneWidth, 2, "#8f4215");
      px(0, 32, sceneWidth, 10, "#6b2b0e");
      px(0, 42, sceneWidth, 2, "#451909");

      for (let x = 9; x < sceneWidth; x += 26) {
        px(x, 33, 12, 1, "rgba(255, 220, 150, 0.12)");
        px(x + 6, 32, 1, 8, "rgba(59, 22, 8, 0.26)");
      }

      px(12, 39, sceneWidth - 24, 1, "#c3812d");
    }

    function drawStool(centerX) {
      px(centerX - 6, 38, 12, 2, "#4b220e");
      px(centerX - 4, 40, 2, 4, "#32150a");
      px(centerX + 2, 40, 2, 4, "#32150a");
    }

    function drawBeerMug(x, y, time, sparkle = 0) {
      const foamBob = prefersReducedMotion.matches
        ? 0
        : Math.round(Math.sin(time / 150) * 1);

      px(x, y, 6, 7, "#ffbf36");
      px(x + 1, y + 1, 4, 5, "#ffd970");
      px(x, y - 2, 6, 2, "#fff7da");
      px(x + 6, y + 1, 1, 4, "#f2e1ab");
      px(x + 7, y + 2, 1, 2, "#f2e1ab");
      px(x + 1, y - 3 + foamBob, 1, 1, "#fffdf3");
      px(x + 4, y - 4 - foamBob, 1, 1, "#fffdf3");

      if (sparkle > 0.88) {
        px(x + 2, y - 5, 1, 1, "#fffef2");
      }
    }

    function getSceneProgress(time) {
      if (prefersReducedMotion.matches) {
        return 0.12;
      }

      return ((time % 14000) + 14000) % 14000 / 14000;
    }

    function getPatronAction(index, progress, patron) {
      const rest = {
        x: patron.x + 7,
        y: 22,
      };
      const mouth = {
        x: patron.x + patron.mouthOffsetX,
        y: 15 + patron.mouthOffsetY,
      };
      const drinkLift = segment(progress, ...patron.drinkWindow);
      let mugX = lerp(rest.x, mouth.x, drinkLift);
      let mugY = lerp(rest.y, mouth.y, drinkLift);
      let lean = drinkLift;
      let clink = 0;

      const toastOne = patron.toastOneTarget
        ? segment(progress, 0.58, 0.64, 0.68, 0.75)
        : 0;
      const toastTwo = patron.toastTwoTarget
        ? segment(progress, 0.79, 0.85, 0.89, 0.96)
        : 0;

      if (toastOne > 0) {
        mugX = lerp(rest.x, patron.toastOneTarget.x, toastOne);
        mugY = lerp(rest.y, patron.toastOneTarget.y, toastOne);
        lean = Math.max(lean, toastOne);
        clink = toastOne;
      }

      if (toastTwo > 0) {
        mugX = lerp(rest.x, patron.toastTwoTarget.x, toastTwo);
        mugY = lerp(rest.y, patron.toastTwoTarget.y, toastTwo);
        lean = Math.max(lean, toastTwo);
        clink = toastTwo;
      }

      return {
        mugX,
        mugY,
        lean,
        clink,
      };
    }

    function drawPatron(patron, index, time, progress) {
      const action = getPatronAction(index, progress, patron);
      const idleBob = prefersReducedMotion.matches
        ? 0
        : Math.sin(time / 310 + patron.idleOffset) * 0.7;
      const tap = prefersReducedMotion.matches
        ? 0
        : Math.max(0, Math.sin(time / 230 + patron.tapOffset)) * 1.6;
      const blinkPhase = prefersReducedMotion.matches
        ? 0
        : ((time / 1000 + patron.blinkOffset) % 3.8) / 3.8;
      const blinking = blinkPhase > 0.49 && blinkPhase < 0.56;
      const headShiftY = Math.round(idleBob - action.lean * 1.4);
      const headX = patron.x - 5;
      const headY = 12 + headShiftY;
      const torsoY = 20 + headShiftY;
      const shoulderX = patron.x + 4;
      const shoulderY = torsoY + 3;
      const handY = 28 + Math.round(tap);

      drawStool(patron.x);

      px(headX, headY, 10, 7, patron.skin);

      if (patron.cap) {
        px(headX - 1, headY, 12, 2, patron.hair);
        px(headX + 1, headY + 2, 9, 1, patron.hair);
      } else {
        px(headX, headY, 10, 2, patron.hair);
        px(headX, headY + 2, 2, 3, patron.hair);
        px(headX + 8, headY + 2, 2, 3, patron.hair);
      }

      if (patron.beard) {
        px(headX + 2, headY + 5, 6, 2, "#7b4a2c");
      }

      if (patron.moustache) {
        px(headX + 3, headY + 5, 4, 1, "#75411a");
      }

      if (!blinking) {
        px(headX + 2, headY + 3, 1, 1, "#241108");
        px(headX + 7, headY + 3, 1, 1, "#241108");
      } else {
        px(headX + 2, headY + 4, 1, 1, "#7f4d2e");
        px(headX + 7, headY + 4, 1, 1, "#7f4d2e");
      }

      px(headX + 4, headY + 4, 1, 1, "#cd8150");

      px(patron.x - 6, torsoY, 12, 6, patron.shirt);
      px(patron.x - 6, torsoY + 5, 12, 2, patron.shirtShade);
      px(patron.x - 2, torsoY + 1, 4, 1, "rgba(255, 255, 255, 0.08)");

      line(patron.x - 2, torsoY + 3, patron.x - 11, handY, patron.shirtShade, 1);
      px(patron.x - 12, handY, 2, 2, patron.skin);

      line(shoulderX, shoulderY, action.mugX + 1, action.mugY + 4, patron.shirtShade, 1);
      px(action.mugX + 1, action.mugY + 4, 2, 2, patron.skin);

      drawBeerMug(action.mugX, action.mugY, time + index * 120, action.clink);
    }

    function drawSpark(centerX, centerY, time) {
      const sparkleColor = prefersReducedMotion.matches
        ? "#fff0a5"
        : Math.sin(time / 120) > 0
          ? "#fff8d1"
          : "#ffd861";

      px(centerX, centerY, 1, 1, sparkleColor);
      px(centerX - 1, centerY, 1, 1, sparkleColor);
      px(centerX + 1, centerY, 1, 1, sparkleColor);
      px(centerX, centerY - 1, 1, 1, sparkleColor);
      px(centerX, centerY + 1, 1, 1, sparkleColor);
    }

    function drawHeaderScene(time) {
      const progress = getSceneProgress(time);
      const firstClink = segment(progress, 0.58, 0.64, 0.68, 0.75);
      const secondClink = segment(progress, 0.79, 0.85, 0.89, 0.96);

      drawBackWall(time);
      patrons.forEach((patron, index) => drawPatron(patron, index, time, progress));

      if (firstClink > 0.86) {
        drawSpark(75, 17, time);
      }

      if (secondClink > 0.86) {
        drawSpark(108, 17, time);
      }

      drawBarForeground();
    }

    function animateHeaderScene(time) {
      drawHeaderScene(time);
      headerAnimationFrame = window.requestAnimationFrame(animateHeaderScene);
    }

    drawHeaderScene(0);

    if (!prefersReducedMotion.matches) {
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
const snakeBoard = snakeCanvas?.closest(".snake-board");

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
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwipeTracking = false;
    let isSwipeHandled = false;
    const swipeThreshold = 24;

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

    function queueDirection(key) {
      if (!(key in directions)) {
        return false;
      }

      const proposedDirection = directions[key];

      if (
        proposedDirection.x === -nextDirection.x &&
        proposedDirection.y === -nextDirection.y
      ) {
        return false;
      }

      nextDirection = proposedDirection;
      snakeCanvas.focus();
      return true;
    }

    function resetSwipeTracking() {
      isSwipeTracking = false;
      isSwipeHandled = false;
    }

    function handleSwipeDirection(deltaX, deltaY) {
      if (
        Math.abs(deltaX) < swipeThreshold &&
        Math.abs(deltaY) < swipeThreshold
      ) {
        return false;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        return queueDirection(deltaX > 0 ? "ArrowRight" : "ArrowLeft");
      }

      return queueDirection(deltaY > 0 ? "ArrowDown" : "ArrowUp");
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

    if (snakeBoard instanceof HTMLElement) {
      snakeBoard.addEventListener("touchstart", (event) => {
        if (isEditableTarget(event.target) || isPromoVisible) {
          return;
        }

        const [touch] = event.changedTouches;

        if (!touch) {
          return;
        }

        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        isSwipeTracking = true;
        isSwipeHandled = false;
        snakeCanvas.focus();
      });

      snakeBoard.addEventListener(
        "touchmove",
        (event) => {
          if (!isSwipeTracking || isPromoVisible) {
            return;
          }

          const [touch] = event.changedTouches;

          if (!touch) {
            return;
          }

          const deltaX = touch.clientX - touchStartX;
          const deltaY = touch.clientY - touchStartY;

          if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
            event.preventDefault();
          }

          if (isSwipeHandled) {
            return;
          }

          if (handleSwipeDirection(deltaX, deltaY)) {
            isSwipeHandled = true;
          }
        },
        { passive: false },
      );

      snakeBoard.addEventListener("touchend", (event) => {
        if (!isSwipeTracking || isPromoVisible) {
          resetSwipeTracking();
          return;
        }

        const [touch] = event.changedTouches;

        if (touch && !isSwipeHandled) {
          handleSwipeDirection(
            touch.clientX - touchStartX,
            touch.clientY - touchStartY,
          );
        }

        resetSwipeTracking();
      });

      snakeBoard.addEventListener("touchcancel", () => {
        resetSwipeTracking();
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

      event.preventDefault();
      queueDirection(event.key);
    });

    resetGame("Нажмите стрелки и начните новый бокал.");
    gameLoopId = window.setInterval(step, 130);

    window.addEventListener("beforeunload", () => {
      window.clearInterval(gameLoopId);
    });
  }
}
