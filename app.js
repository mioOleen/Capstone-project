const menu = document.querySelector('#mobileMenu');
const menuBarTag = document.querySelector('#menuBar');
const cross = document.querySelector('#cross');

function open() {
  menuBarTag.style.display = 'block';
  menu.style.display = 'none';
  cross.style.display = 'block';
}

function close() {
  menuBarTag.style.display = 'none';
  menu.style.display = 'block';
  cross.style.display = 'none';
}

menu.addEventListener('click', open);
cross.addEventListener('click', close);

// Speakers

const bgImg = './img/background.jpg';
const featuredSpeakersData = [{
  profile: './img/speaker1.jpg',
  speakerName: 'Aleena Vargas',
  title: 'Chief data officer (CDO)',
  about: 'Analyzing data can provide useful insight for departments hnology options for outside.',
},
{
  profile: './img/speaker5.jpg',
  speakerName: 'Camryn Barton',
  title: 'Chief technology officer (CTO)',
  about: 'A CTO is a C-suite technology executive who specializes in providing technology options.',
},
{
  profile: './img/speaker3.jpg',
  speakerName: 'Jaycee Duarte',
  title: 'Chief security officer (CSO)',
  about: 'The CSO manages the protection of important data and information throughout an organization.',
},
{
  profile: './img/speaker4.jpg',
  speakerName: 'Adelynn Sloan',
  title: 'Chief operating officer (COO)',
  about: 'The COO is the senior executive tasked with overseeing the day-to-day operations. ',
},
{
  profile: './img/speaker5.jpg',
  speakerName: 'Jake Landry',
  title: 'Chief marketing officer (CMO)',
  about: " A CMO is the highest-ranking official within a company's marketing department.",
},
{
  profile: './img/speaker6.jpg',
  speakerName: 'Emmalyn Cameron',
  title: 'Chief information officer (CIO)',
  about: 'Technology plays a crucial role in most modern companies, leading to the rise.',
},
];

const featuredSpeakersContainer = document.getElementById('featuredSpeakers');

function createSpeakerCard(speaker) {
  const speakerCard = document.createElement('div');
  speakerCard.className = 'speaker-card';

  const divImg = document.createElement('div');
  divImg.className = 'img-group';

  const bgimage = document.createElement('img');
  bgimage.src = bgImg;
  bgimage.className = 'bgroundImage';
  divImg.append(bgimage);

  const image = document.createElement('img');
  image.src = speaker.profile;
  image.className = 'speakerImg';
  divImg.append(image);

  const div = document.createElement('div');
  div.className = 'speaker-info';

  const name = document.createElement('h4');
  name.textContent = speaker.speakerName;
  div.append(name);

  const title = document.createElement('i');
  title.textContent = speaker.title;
  div.append(title);

  const hr = document.createElement('hr');
  hr.className = 'line';
  div.append(hr);

  const info = document.createElement('p');
  info.textContent = speaker.about;
  div.append(info);

  speakerCard.appendChild(divImg);
  speakerCard.appendChild(div);

  return speakerCard;
}
function renderMobileSpeakers(visibleMobileSpeakers) {
  featuredSpeakersContainer.innerHTML = '';

  featuredSpeakersData.slice(0, visibleMobileSpeakers).forEach((speaker) => {
    const speakerCard = createSpeakerCard(speaker);
    featuredSpeakersContainer.appendChild(speakerCard);
  });

  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const seeLessBtn = document.getElementById('seeLessBtn');

  if (visibleMobileSpeakers < featuredSpeakersData.length) {
    seeMoreBtn.style.display = 'block';
    seeLessBtn.style.display = 'none';
  } else {
    seeMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'block';
  }
}

function showMoreSpeakers() {
  const initialMobileSpeakersToShow = 2;
  let visibleMobileSpeakers = initialMobileSpeakersToShow;

  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const seeLessBtn = document.getElementById('seeLessBtn');
  seeMoreBtn.addEventListener('click', () => {
    visibleMobileSpeakers = featuredSpeakersData.length;
    renderMobileSpeakers(visibleMobileSpeakers);
  });

  seeLessBtn.addEventListener('click', () => {
    visibleMobileSpeakers = initialMobileSpeakersToShow;
    renderMobileSpeakers(visibleMobileSpeakers);
  });

  renderMobileSpeakers(visibleMobileSpeakers);
}

function renderDesktopSpeakers() {
  const visibleMobileSpeakers = 6;
  featuredSpeakersContainer.innerHTML = '';

  featuredSpeakersData.forEach((speaker) => {
    const speakerCard = createSpeakerCard(speaker);
    featuredSpeakersContainer.appendChild(speakerCard);
  });

  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const seeLessBtn = document.getElementById('seeLessBtn');

  if (visibleMobileSpeakers === featuredSpeakersData.length) {
    seeMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'none';
  }
}

function showMsg() {
  if (window.innerWidth <= 768) {
    showMoreSpeakers();
  } else if (window.innerWidth >= 768) {
    renderDesktopSpeakers();
  }
}

window.addEventListener('resize', showMsg);
showMsg();