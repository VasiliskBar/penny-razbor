import "./puzzle.css";
import puzzleImage from "./assets/puzzle-image.png";

const app = document.querySelector("#app");

const rows = 4;
const columns = 5;
const totalPieces = rows * columns;
const leftTrayCount = 8;
const bottomTrayCount = totalPieces - leftTrayCount;

app.innerHTML = `
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
        <p class="puzzle-progress" data-progress-text>Собрано 0 из ${totalPieces}</p>
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
        <img src="${puzzleImage}" alt="Образец картинки для пазла" />
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
`;

const startButton = document.querySelector("[data-start-button]");
const restartButton = document.querySelector("[data-restart-button]");
const hintButton = document.querySelector("[data-hint-button]");
const hintModal = document.querySelector("[data-hint-modal]");
const hintCloseButtons = document.querySelectorAll("[data-hint-close]");
const winModal = document.querySelector("[data-win-modal]");
const winRestartButtons = document.querySelectorAll("[data-win-restart]");
const statusText = document.querySelector("[data-status-text]");
const progressText = document.querySelector("[data-progress-text]");
const boardGrid = document.querySelector("[data-board-grid]");
const leftGrid = document.querySelector("[data-left-grid]");
const bottomGrid = document.querySelector("[data-bottom-grid]");
const startOverlay = document.querySelector("[data-start-overlay]");
const confettiRoot = document.querySelector("[data-confetti]");
const page = document.querySelector(".puzzle-page");

let pieces = [];
let slots = [];
let gameStarted = false;
let gameWon = false;
let dragState = null;

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function setStatus(message) {
  if (statusText instanceof HTMLElement) {
    statusText.textContent = message;
  }
}

function updateProgress() {
  const placedCount = pieces.filter((piece) => piece.placed).length;

  if (progressText instanceof HTMLElement) {
    progressText.textContent = `Собрано ${placedCount} из ${totalPieces}`;
  }
}

function toggleHintModal(isVisible) {
  if (!(hintModal instanceof HTMLElement)) {
    return;
  }

  hintModal.hidden = !isVisible;
  hintModal.classList.toggle("is-visible", isVisible);
}

function toggleWinModal(isVisible) {
  if (!(winModal instanceof HTMLElement)) {
    return;
  }

  winModal.hidden = !isVisible;
  winModal.classList.toggle("is-visible", isVisible);
}

function createConfetti() {
  if (!(confettiRoot instanceof HTMLElement)) {
    return;
  }

  confettiRoot.innerHTML = "";

  const colors = ["#e13535", "#0b63ce", "#ffffff", "#ffd34d"];

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    piece.className = "puzzle-confetti-piece";
    piece.style.left = `${(index / 28) * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${(index % 7) * 70}ms`;
    piece.style.transform = `rotate(${index * 19}deg)`;
    confettiRoot.append(piece);
  }
}

function buildBoard() {
  if (!(boardGrid instanceof HTMLElement)) {
    return;
  }

  boardGrid.innerHTML = "";
  slots = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const cell = document.createElement("div");
      cell.className = "puzzle-board-cell";
      cell.dataset.slotIndex = String(index);
      cell.innerHTML = `
        <span class="puzzle-slot-wave"></span>
        <span class="puzzle-slot-dot"></span>
      `;
      boardGrid.append(cell);
      slots.push(cell);
    }
  }
}

function buildTray(container, count, trayName) {
  if (!(container instanceof HTMLElement)) {
    return;
  }

  container.innerHTML = "";

  for (let index = 0; index < count; index += 1) {
    const slot = document.createElement("div");
    slot.className = "puzzle-tray-slot";
    slot.dataset.trayName = trayName;
    slot.dataset.traySlot = String(index);
    container.append(slot);
  }
}

function getTraySlot(zone, slotIndex) {
  const selector = `[data-tray-name="${zone}"][data-tray-slot="${slotIndex}"]`;
  return document.querySelector(selector);
}

function resetPieceElement(piece) {
  piece.element.classList.remove("is-dragging", "is-placed");
  piece.element.style.position = "";
  piece.element.style.left = "";
  piece.element.style.top = "";
  piece.element.style.width = "";
  piece.element.style.height = "";
  piece.element.style.transform = "";
  piece.element.style.pointerEvents = "";
  piece.element.style.zIndex = "";
}

function sendPieceHome(piece) {
  const homeSlot = getTraySlot(piece.homeZone, piece.homeSlot);

  piece.placed = false;

  if (homeSlot instanceof HTMLElement) {
    homeSlot.append(piece.element);
  }

  resetPieceElement(piece);
}

function placePieceOnBoard(piece) {
  const targetCell = slots[piece.correctIndex];

  if (!(targetCell instanceof HTMLElement)) {
    return;
  }

  piece.placed = true;
  targetCell.innerHTML = "";
  targetCell.append(piece.element);
  resetPieceElement(piece);
  piece.element.classList.add("is-placed");
}

function checkWin() {
  if (pieces.every((piece) => piece.placed)) {
    gameWon = true;
    setStatus("Браво! Все детали на месте, картинка собрана.");
    createConfetti();
    toggleWinModal(true);
  }
}

function updateButtons() {
  const disabled = !gameStarted;

  if (restartButton instanceof HTMLButtonElement) {
    restartButton.disabled = disabled;
  }

  if (hintButton instanceof HTMLButtonElement) {
    hintButton.disabled = disabled;
  }
}

function assignHomes() {
  const shuffledIds = shuffle(pieces.map((piece) => piece.id));

  shuffledIds.forEach((pieceId, position) => {
    const piece = pieces.find((item) => item.id === pieceId);

    if (!piece) {
      return;
    }

    if (position < leftTrayCount) {
      piece.homeZone = "left";
      piece.homeSlot = position;
    } else {
      piece.homeZone = "bottom";
      piece.homeSlot = position - leftTrayCount;
    }
  });
}

function resetBoardCells() {
  slots.forEach((cell) => {
    cell.innerHTML = `
      <span class="puzzle-slot-wave"></span>
      <span class="puzzle-slot-dot"></span>
    `;
  });
}

function beginGame() {
  gameStarted = true;
  gameWon = false;
  toggleWinModal(false);
  toggleHintModal(false);
  assignHomes();
  resetBoardCells();

  pieces.forEach((piece) => {
    sendPieceHome(piece);
  });

  updateProgress();
  updateButtons();

  if (startOverlay instanceof HTMLElement) {
    startOverlay.hidden = true;
  }

  setStatus("Игра началась. Тяните детали в правильные клеточки.");
}

function restartGame() {
  beginGame();
  setStatus("Начинаем сначала. Новое морское приключение уже готово.");
}

function showHint() {
  if (!gameStarted) {
    return;
  }

  toggleHintModal(true);
}

function handleDrop(piece, pointerX, pointerY) {
  const correctCell = slots[piece.correctIndex];

  if (!(correctCell instanceof HTMLElement)) {
    sendPieceHome(piece);
    return;
  }

  const rect = correctCell.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = pointerX - centerX;
  const deltaY = pointerY - centerY;
  const threshold = Math.max(rect.width, rect.height) * 0.7;

  if (Math.hypot(deltaX, deltaY) <= threshold) {
    placePieceOnBoard(piece);
    updateProgress();
    setStatus("Отлично! Деталь встала на своё место.");
    checkWin();
  } else {
    sendPieceHome(piece);
    setStatus("Почти! Попробуйте отпустить деталь ближе к её месту.");
  }
}

function stopDragging(pointerX, pointerY) {
  if (!dragState) {
    return;
  }

  const { piece } = dragState;

  dragState = null;
  document.body.classList.remove("puzzle-no-select");

  handleDrop(piece, pointerX, pointerY);
}

function startDragging(event, piece) {
  if (!gameStarted || gameWon || piece.placed) {
    return;
  }

  event.preventDefault();

  const rect = piece.element.getBoundingClientRect();

  dragState = {
    piece,
    pointerOffsetX: event.clientX - rect.left,
    pointerOffsetY: event.clientY - rect.top,
  };

  piece.element.classList.add("is-dragging");
  piece.element.style.position = "fixed";
  piece.element.style.left = `${rect.left}px`;
  piece.element.style.top = `${rect.top}px`;
  piece.element.style.width = `${rect.width}px`;
  piece.element.style.height = `${rect.height}px`;
  piece.element.style.pointerEvents = "none";
  piece.element.style.zIndex = "1000";
  document.body.append(piece.element);
  document.body.classList.add("puzzle-no-select");
}

function attachPieceEvents(piece) {
  piece.element.addEventListener("pointerdown", (event) => {
    startDragging(event, piece);
  });
}

function createPieceImage(image, row, column) {
  const sliceCanvas = document.createElement("canvas");
  const pieceWidth = Math.floor(image.naturalWidth / columns);
  const pieceHeight = Math.floor(image.naturalHeight / rows);

  sliceCanvas.width = pieceWidth;
  sliceCanvas.height = pieceHeight;

  const sliceContext = sliceCanvas.getContext("2d");

  if (!sliceContext) {
    return "";
  }

  sliceContext.drawImage(
    image,
    column * pieceWidth,
    row * pieceHeight,
    pieceWidth,
    pieceHeight,
    0,
    0,
    pieceWidth,
    pieceHeight,
  );

  return sliceCanvas.toDataURL("image/png");
}

function createPieces(image) {
  pieces = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const element = document.createElement("button");
      element.className = "puzzle-piece";
      element.type = "button";
      element.setAttribute("aria-label", `Деталь ${index + 1}`);

      const img = document.createElement("img");
      img.src = createPieceImage(image, row, column);
      img.alt = "";
      img.draggable = false;
      element.append(img);

      const piece = {
        id: index,
        correctIndex: index,
        homeZone: index < leftTrayCount ? "left" : "bottom",
        homeSlot: index < leftTrayCount ? index : index - leftTrayCount,
        placed: false,
        element,
      };

      attachPieceEvents(piece);
      pieces.push(piece);
    }
  }
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function init() {
  buildBoard();
  buildTray(leftGrid, leftTrayCount, "left");
  buildTray(bottomGrid, bottomTrayCount, "bottom");
  updateButtons();

  if (startButton instanceof HTMLButtonElement) {
    startButton.disabled = true;
  }

  try {
    const image = await preloadImage(puzzleImage);
    createPieces(image);
  } catch (error) {
    setStatus("Не удалось загрузить картинку для пазла.");
    return;
  }

  if (startButton instanceof HTMLButtonElement) {
    startButton.disabled = false;
  }

  if (startOverlay instanceof HTMLElement) {
    startOverlay.hidden = false;
  }
}

startButton?.addEventListener("click", () => {
  beginGame();
});

restartButton?.addEventListener("click", () => {
  restartGame();
});

hintButton?.addEventListener("click", () => {
  showHint();
});

hintCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleHintModal(false);
  });
});

winRestartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    restartGame();
  });
});

document.addEventListener("pointermove", (event) => {
  if (!dragState) {
    return;
  }

  event.preventDefault();

  const { piece, pointerOffsetX, pointerOffsetY } = dragState;

  piece.element.style.left = `${event.clientX - pointerOffsetX}px`;
  piece.element.style.top = `${event.clientY - pointerOffsetY}px`;
});

document.addEventListener("pointerup", (event) => {
  if (!dragState) {
    return;
  }

  stopDragging(event.clientX, event.clientY);
});

document.addEventListener("pointercancel", () => {
  if (!dragState) {
    return;
  }

  sendPieceHome(dragState.piece);
  dragState = null;
  document.body.classList.remove("puzzle-no-select");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleHintModal(false);
    toggleWinModal(false);
  }
});

if (page instanceof HTMLElement) {
  page.addEventListener(
    "touchmove",
    (event) => {
      if (dragState) {
        event.preventDefault();
      }
    },
    { passive: false },
  );
}

init();
