const menu = document.querySelector('#icon');
const navbar = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});
navbar.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'UL') { navbar.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});

const cards = [
  {
    // image: './Images/SnapshootPortfoliodesktop1.png',
    image: './Images/Desktopversioncapstone1.png',
    title: 'SKATING CONFERENCE 2022',
    datas: ['CANOPY', 'Back End Dev', '2015'],
    description: 'The purpose of this project was to demonstrate mastery of HTML and CSS fundamentals.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: './Images/ToDoList.png',
    title: 'TO DO LIST',
    datas: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: './Images/SnapshootPortfoliodesktop3.png',
    title: 'Facebook 360',
    datas: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: './Images/SnapshootPortfoliodesktop4.png',
    title: 'Uber Navigation',
    datas: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    skills: ['html', 'css', 'javascript'],
  },
];

const cardWorks = document.querySelector('#Portfolio');
function cardsBuilder(card, index) {
  const {
    image, title, datas, description, skills,
  } = card;
  const datasHtml = datas.map(
    (i) => `<li class = "CANOPY">${i}</li>
    ${
  i === datas[datas.length - 1]
    ? ''
    : '<li><img src="./Images/Counter.png" alt="counter" /></li>'
}`,
  ).join('');
  const skillsHtml = skills.map(
    (s) => `<li class = "tag html-tag">${s}</li>`,
  ).join('');
  cardWorks.innerHTML += `
  <div class = "card card-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
        <a href = "#">
          <img src = "${image}" alt="SnapshootPortfolioDesktop1" class="snapshot" /></a>
        <div class="${(index === 0 || index % 2 === 0) ? 'right' : 'left'}-cont">
          <h3 class = "tonic flex0">${title}</h3>
          <ul class = "ul-frame1 flex0">
            ${datasHtml}
          </ul>
          <p class = "description2 flex0">
            ${description}
          </p>
          <ul class = "grid flex0">
            ${skillsHtml}
          </ul>
          <button class = "works-button normal-button1 flex0 btns"> See Project </button>
        </div>
      </div>
  `;
}

cards.forEach((card, index) => {
  cardsBuilder(card, index);
});

const popupCards = [
  {
    title: 'SKATING CONFERENCE 2022',
    datas: ['CANOPY', 'Back End Dev', '2015'],
    description: 'I built this website with a mobile-first approach, applying fluid design principles -- It is fully-responsive across all breakpoints, from 320px up in all screens.',
    skills: ['html', 'css', 'javascript'],
    // image: './Images/SnapshootPortfoliodesktop1.png',
    image: './Images/Desktopversioncapstone1.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Multi-Post Stories',
    datas: ['TO DO LIST', 'Full Stack Dev', '2015'],
    description: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    skills: ['html', 'css', 'javascript'],
    image: './Images/ToDoList.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Facebook 360',
    datas: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    skills: ['html', 'css', 'javascript'],
    image: './Images/SnapshootPortfoliodesktop2.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Uber Navigation',
    datas: ['Uber', 'Lead Developer', '2018'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    skills: ['html', 'css', 'javascript', 'ruby', 'github', 'Bootstraps'],
    image: './Images/SnapshootPortfoliodesktop2.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
];

const btns = document.querySelectorAll('.works-button');
const bgModal = document.querySelector('.bg-modal');

function popUp(index) {
  const {
    title, datas, description, skills, image,
  } = popupCards[index];

  const datasHtml = datas.map(
    (i) => `<li class = "CANOPY">${i}</li>
    ${
  i === datas[datas.length - 1]
    ? ''
    : '<li><img src="./Images/Counter.png" alt="counter" /> </li>'
}
    `,
  ).join('');

  const skillsHtml = skills.map((s) => `<li class="tag html-tag">${s}</li>`).join('');

  bgModal.innerHTML = `
  <div class = "modal-content">
        <div class="modal-header">
          <h3 class="tonic">${title}</h3>
          <span class="close-button">+</span>
        </div>
        <ul class="ul-frame1 flex0">
          ${datasHtml}
        </ul>
        <a href="#">
          <img src="${image}" alt ="SnapshootPortfolioDesktop1" class="snapshot"/>
        </a>
        <div class = "flex-99">
          <div class = "flex-98">
            <p class="description2 flex0">
            ${description}
            </p>
          </div>
          <div>
            <ul class="grid flex0">
              ${skillsHtml}
            </ul>
            <hr class="solid-1">
            <div class="buttons">
              <button type ="button" class="live-btn"> See Live <i class="fas fa-external-link-alt"></i></button>
              <a href = "https://github.com/peterboro/Microverse-Capstone-Project1" class="live-btn"> See Source <i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
  </div>
  `;
  bgModal.style.display = 'flex';
  bgModal.addEventListener('click', (event) => {
    const { target: { classList } } = event;
    if (classList.contains('bg-modal')) {
      document.querySelector('.bg-modal').style.display = 'none';
    }
  });

  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popUp(index);
  });
});

const [form] = document.getElementsByClassName('contactform');
const error = document.querySelector('.error');
const validEmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', (e) => {
  const { email } = form.elements;
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('email field has to be in lower case');
  } else if (validEmailRegExp.test(email.value)) {
    e.preventDefault();
    message.push('email provided should be valid');
  }
  if (message.length > 0) { error.innerText = message.join(', '); } else {
    form.submit();
  }
});
