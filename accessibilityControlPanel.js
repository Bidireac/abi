const getTheBody = document.getElementsByTagName('body');
const getTheHtml = document.getElementsByTagName('html');
const hookOnBody = getTheBody[0];
const hookOnHtml = getTheHtml[0];

function createTheAccessibilityElements() {
  // Create the elements for the panel functionality
  const hookTheAccessibility = document.createElement('div');
  const accessibilityPanel = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const accessUIPanel = document.createElement('a');
  const ulContainer = document.createElement('div');
  const userUIPanel = document.createElement('ul');

  accessUIPanel.innerHTML = `Accesibilitate
  <i class="fab fa-accessible-icon accessibilityIcon"></i>`;

  userUIPanel.innerHTML = `
      <li class="listItemOfAccessibilityPanel" id="increaseTheFontSize">
        <a role="button">
          <i class="fas fa-search-plus listIconOfAccessibilityPanel"></i>
          Mareste Font
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="decreaseTheFontSize">
        <a role="button">
          <i class="fas fa-search-minus listIconOfAccessibilityPanel"></i>
          Micsoreaza Font
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="changeDisplayToBlackAndWhite">
        <a role="button">
          <i class="fas fa-adjust listIconOfAccessibilityPanel"></i>
          Alb Negru
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="changeDisplayToInvertedColors">
        <a role="button">
          <i class="fas fa-sun listIconOfAccessibilityPanel"></i>
          Inversare culori
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="changeDisplayToSepia">
        <a role="button">
          <i class="far fa-sun listIconOfAccessibilityPanel"></i>
          Sepia
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="underlineTheLinksFromThePage">
        <a role="button">
          <i class="fas fa-underline listIconOfAccessibilityPanel"></i>
          Subliniaza link
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="setTheFontToNormalOnThePage">
        <a role="button">
          <i class="fas fa-font listIconOfAccessibilityPanel"></i>
          Font normal
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="playTheAudioFilesOnThePage">
        <a role="button">
          <i class="fas fa-play listIconOfAccessibilityPanel"></i>
          Redare text
        </a>
      </li>
      <li class="listItemOfAccessibilityPanel" id="resetEverythingOnThePage">
        <a role="button">
          <i class="fas fa-history listIconOfAccessibilityPanel"></i>
          Reseteaza
        </a>
      </li>
  `;

  // Link the elements one to another
  buttonContainer.appendChild(accessUIPanel);
  ulContainer.appendChild(userUIPanel);

  accessibilityPanel.appendChild(buttonContainer);
  accessibilityPanel.appendChild(ulContainer);

  hookTheAccessibility.appendChild(accessibilityPanel);

  // Add the accessibility panel to the window
  document.body.appendChild(hookTheAccessibility);

  addFontAwesomeCdnToTheHead();
  styleTheAccessibilityElements(
    hookTheAccessibility,
    accessibilityPanel,
    ulContainer,
    buttonContainer,
    userUIPanel,
    accessUIPanel
  );
  addAccessibilityToTheOptions();
}

function styleTheAccessibilityElements(
  hookTheAccessibility,
  accessibilityPanel,
  ulContainer,
  buttonContainer,
  userUIPanel,
  accessUIPanel
) {
  hookTheAccessibility.style.position = 'absolute';

  accessibilityPanel.style.cssText = `
    height: 350px;
    width: 250px;
    position: fixed;
    top: 20%;
    right: -250px; 
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.8s ease;
  `;

  ulContainer.style.cssText = `
    width: 100%;
    height: 100%;
  `;

  buttonContainer.style.cssText = `
    width: 0%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  `;

  userUIPanel.style.cssText = `
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #fff;
    border: 1px #063d8d solid;
    font-size: 18px;
    font-weight: 200;
    padding: 0;
  `;

  accessUIPanel.style.cssText = `
    width: 200px;
    color: #fff;
    background-color: #063d8d;
    cursor: pointer;
    text-decoration: none;
    line-height: 20px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    transform-origin: top right;
    margin-top: 200px;
    padding: 15px;
    font-size: 18px;
    font-weight: 200;
  `;

  accessUIPanel.addEventListener('click', () => {
    if (!accessUIPanel.classList.contains('toggleAccessibilityPanel')) {
      accessUIPanel.classList.add('toggleAccessibilityPanel');
      accessibilityPanel.style.transform = 'translateX(-250px)';
    } else {
      accessUIPanel.classList.remove('toggleAccessibilityPanel');
      accessibilityPanel.style.transform = 'translateX(0)';
    }
  });

  const accessibilityIcon = buttonContainer.querySelector('.accessibilityIcon');
  accessibilityIcon.style.cssText = `
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    font-size: 24px;
    margin-left: 15px;
  `;

  const listItems = userUIPanel.querySelectorAll(
    '.listItemOfAccessibilityPanel'
  );
  listItems.forEach((item) => {
    item.style.cssText = `
      width: 100%;
      padding: 5px;
    `;

    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#dae9ff';
      item.style.cursor = 'pointer';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = '#fff';
    });

    // Style the icons inside the list items
    const listIcon = item.querySelector('.listIconOfAccessibilityPanel');
    listIcon.style.cssText = `
      color: #052d69;
      padding: 5px;
    `;
  });
}

function addAccessibilityToTheOptions() {
  // We get the elements from the panel
  const increaseFont = document.getElementById('increaseTheFontSize');
  const decreaseFont = document.getElementById('decreaseTheFontSize');
  const grayscaleColor = document.getElementById(
    'changeDisplayToBlackAndWhite'
  );
  const inverseColor = document.getElementById('changeDisplayToInvertedColors');
  const sepiaColor = document.getElementById('changeDisplayToSepia');
  const underlineLinks = document.getElementById(
    'underlineTheLinksFromThePage'
  );
  const normalFont = document.getElementById('setTheFontToNormalOnThePage');
  const audioText = document.getElementById('playTheAudioFilesOnThePage');
  const reset = document.getElementById('resetEverythingOnThePage');

  // Then we add the onClick functionality to them
  increaseFont.addEventListener('click', () => {
    const pageFontSize = window
      .getComputedStyle(hookOnBody, null)
      .getPropertyValue('font-size');
    const increaseFont = parseFloat(pageFontSize);
    hookOnHtml.style.fontSize = increaseFont + 1 + 'px';
  });

  decreaseFont.addEventListener('click', () => {
    const pageFontSize = window
      .getComputedStyle(hookOnBody, null)
      .getPropertyValue('font-size');
    const decreaseFont = parseFloat(pageFontSize);
    hookOnHtml.style.fontSize = decreaseFont - 1 + 'px';
  });

  grayscaleColor.addEventListener('click', () => {
    hookOnHtml.style.filter = 'grayscale(1)';
  });

  inverseColor.addEventListener('click', () => {
    hookOnHtml.style.filter = 'invert(1)';
  });

  sepiaColor.addEventListener('click', () => {
    hookOnHtml.style.filter = 'sepia(1)';
  });

  underlineLinks.addEventListener('click', () => {
    const links = hookOnBody.getElementsByTagName('a');
    if (!hookOnBody.classList.contains('activeAccessibilityLinks')) {
      hookOnBody.classList.add('activeAccessibilityLinks');

      for (let link of links) {
        link.style.textDecoration = 'underline';
      }
    } else {
      hookOnBody.classList.remove('activeAccessibilityLinks');
      for (let link of links) {
        link.style.textDecoration = 'none';
      }
    }
  });

  normalFont.addEventListener('click', () => {
    hookOnBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
  });

  audioText.addEventListener('click', () => {
    let audioIcon = audioText.getElementsByTagName('i')[0];

    if (!audioText.classList.contains('playingTheAudioAccessibilityText')) {
      audioText.classList.add('playingTheAudioAccessibilityText');
      audioIcon.className = '';
      audioIcon.className = 'fas fa-pause';
    } else {
      audioText.classList.remove('playingTheAudioAccessibilityText');
      audioIcon.className = '';
      audioIcon.className = 'fas fa-play';
    }
  });

  reset.addEventListener('click', () => {
    location.reload();
  });
}

function addFontAwesomeCdnToTheHead() {
  const header = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = 'https://use.fontawesome.com/releases/v5.15.3/css/all.css';

  header.appendChild(link);
}

document.body.onload = createTheAccessibilityElements;
