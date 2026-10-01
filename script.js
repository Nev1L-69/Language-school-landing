'use strict';

// Original school content remains in data.js. This layer contains the new interface copy.
const ui = {
  en: {
    skip: 'Skip to content', school: 'SLOVAK LANGUAGE SCHOOL', start: "Let's talk", explore: 'Find your course', smallGroups: 'Small groups', individual: 'Individual lessons', discover: 'SCROLL TO DISCOVER',
    nav: {about:'The school',courses:'Courses',teachers:'Our people',testimonials:'Testimonials',contact:'Contact'},
    hero:{kicker:'NEW LANGUAGE. NEW POSSIBILITIES.',line1:'Speak Slovak.',line2:'Feel <em>at home.</em>',description:'A new language is a new way to belong. Learn Slovak with people who make every conversation a step forward.',note:'From your first ahoj to your next chapter.',bottom:'A language. A whole new world.'},
    art:{tag:'A LITTLE SLOVAK. A BIG HORIZON.',side:'YOUR NEXT CHAPTER STARTS HERE',caption:'A different point of view.'},
    about:{label:'01 / THE SCHOOL',title:'More than words.<br><em>More connection.</em>',small:'A small accent.<br>A whole new meaning.',lead:'Language brings you closer. To a place, to its people, to the life you want to build.',body:'At Tatra Talk, we teach Slovak in a welcoming, supportive environment. With experienced teachers and space to be yourself, you can find your voice — one conversation at a time.'},
    features:[{title:'People who know the language',text:'Learn with experienced native speakers who care about your progress.'},{title:'A little closer to Slovakia',text:'Discover the culture behind the words and bring Slovak into everyday life.'},{title:'Room for your voice',text:'Individual lessons and small groups, with the attention you need to grow.'}],
    lab:{label:'YOUR FIRST WORDS',hint:'Every conversation starts somewhere. Tap a word.'},
    courses:{label:'02 / FIND YOUR DIRECTION',corner:'ONE LANGUAGE. YOUR OWN PATH.',title:'Every level.<br><em>A new horizon.</em>',intro:'Start with the basics or take the next step.<br>There is a place for you here.',unsure:"Not sure where to start? Let's find your level together.",help:'Help me choose',names:['First words','Keep the conversation going','Find your own voice','Talk business'],subtitles:['Beginner Slovak','Intermediate Slovak','Advanced Slovak','Business Slovak'],enroll:'Join this course',route:'YOUR LEARNING PATH',choices:'Choose your course',panel:'Course details'},
    teachers:{label:'03 / THE PEOPLE BEHIND THE WORDS',corner:'HUMAN TO HUMAN',title:'Good conversations<br>start with <em>good people.</em>',intro:'Different approaches. A shared love of language.<br>Meet the people on your side.',read:'Meet the teacher',role:'Slovak language instructor',experience:'12+ years of experience',summaries:['Creative lessons, original materials and space to explore. Slavka brings a personal approach to individual lessons and groups of up to 12.','Pronunciation, grammar and real conversation. Kristina helps Russian-speaking students immerse themselves in Slovak from the start.','A teacher, author and linguist. Petra combines a cyclical learning method with conversation, drawing on her teaching experience since 2009.'],themes:['CREATIVITY & CONNECTION','CLARITY & CONVERSATION','EXPERIENCE & EXPRESSION']},
    testimonials:{label:'04 / IN THEIR OWN WORDS'},
    contact:{label:'05 / YOUR NEXT CHAPTER',title:'It starts with<br><em>an ahoj.</em>',cta:"LET'S TALK",intro:"A question, a new beginning, a big plan.<br>We'd love to hear it.",write:'SAY HELLO',find:'A LITTLE MORE TATRA TALK'},
    footer:{tagline:'Learn Slovak. Open your world.',top:'Back to top',rights:'All rights reserved.'},
    form:{eyebrow:'ONE SMALL STEP',title:"Let's start<br><em>talking.</em>",note:'Demo form. Your details stay in this window and are not sent anywhere.',name:'Your name',email:'Email address',course:'Your direction',submit:'Try signing up',successTitle:'Your next chapter looks good.',success:'This is a demo — no application has been sent. To join a course, write to us:',again:'Back to the form',unsure:'Help me choose a course',nameError:'Please enter your name.'},
    a11y:{menu:'Open menu',close:'Close',navigation:'Navigation',nextWord:'Show the next Slovak word',words:'Slovak words',rating:'5 out of 5 stars'},
    words:[{meaning:'Hello',pronunciation:'/ ah-hoy /'},{meaning:'Thank you',pronunciation:'/ dya-koo-yem /'},{meaning:'Together',pronunciation:'/ spo-loo /'}]
  },
  ru: {
    skip:'Перейти к содержанию',school:'ШКОЛА СЛОВАЦКОГО ЯЗЫКА',start:'Начнём?',explore:'Выбрать курс',smallGroups:'Маленькие группы',individual:'Индивидуально',discover:'ЛИСТАЙТЕ ДАЛЬШЕ',
    nav:{about:'О школе',courses:'Курсы',teachers:'Преподаватели',testimonials:'Отзывы',contact:'Контакты'},
    hero:{kicker:'НОВЫЙ ЯЗЫК. НОВЫЕ ВОЗМОЖНОСТИ.',line1:'Словацкий язык.',line2:'Чувствуйте себя<br><em>как дома.</em>',description:'Новый язык помогает стать ближе. Изучайте словацкий с людьми, с которыми каждый разговор — шаг навстречу новому.',note:'От первого «ahoj» к новой главе вашей жизни.',bottom:'Один язык. Целый новый мир.'},
    art:{tag:'БОЛЬШЕ СЛОВ. ШИРЕ ГОРИЗОНТЫ.',side:'ВАША НОВАЯ ГЛАВА НАЧИНАЕТСЯ ЗДЕСЬ',caption:'Новый взгляд на мир.'},
    about:{label:'01 / О ШКОЛЕ',title:'Больше, чем слова.<br><em>Ближе друг к другу.</em>',small:'Маленький знак.<br>Совсем другой смысл.',lead:'Язык делает нас ближе. К стране, к людям, к жизни, которую хочется построить.',body:'В Tatra Talk мы учим словацкому в дружелюбной атмосфере. Опытные преподаватели и поддержка помогают найти свой голос — разговор за разговором.'},
    features:[{title:'Люди, которые знают язык',text:'Учитесь у опытных носителей языка, которым важен ваш прогресс.'},{title:'Чуть ближе к Словакии',text:'Узнавайте культуру, которая стоит за словами, и используйте словацкий в повседневной жизни.'},{title:'Место для вашего голоса',text:'Индивидуальные занятия и маленькие группы — с вниманием к вашему темпу и целям.'}],
    lab:{label:'ВАШИ ПЕРВЫЕ СЛОВА',hint:'Любой разговор с чего-то начинается. Нажмите на слово.'},
    courses:{label:'02 / ВЫБЕРИТЕ НАПРАВЛЕНИЕ',corner:'ОДИН ЯЗЫК. ВАШ СОБСТВЕННЫЙ ПУТЬ.',title:'Новый уровень.<br><em>Новые горизонты.</em>',intro:'Начните с основ или сделайте следующий шаг.<br>Здесь есть место для вас.',unsure:'Не знаете, с чего начать? Найдём ваш уровень вместе.',help:'Помогите выбрать',names:['Первые слова','Продолжим разговор','Свой голос в языке','Говорим о деле'],subtitles:['Словацкий для начинающих','Средний уровень','Продвинутый словацкий','Деловой словацкий'],enroll:'Записаться на курс',route:'ВАШ ПУТЬ В ЯЗЫКЕ',choices:'Выберите курс',panel:'Описание курса'},
    teachers:{label:'03 / ЛЮДИ ЗА СЛОВАМИ',corner:'ОТ ЧЕЛОВЕКА К ЧЕЛОВЕКУ',title:'Хорошие разговоры.<br><em>С хорошими людьми.</em>',intro:'Разные подходы. Общая любовь к языку.<br>Знакомьтесь с теми, кто рядом.',read:'Ближе к преподавателю',role:'Преподаватель словацкого языка',experience:'Более 12 лет опыта',summaries:['Творческий подход, авторские материалы и пространство для открытий. Славка ведёт индивидуальные занятия и группы до 12 человек.','Произношение, грамматика и живой разговор. Кристина помогает русскоязычным студентам погрузиться в словацкий с первых занятий.','Преподаватель, автор и лингвист. Петра сочетает циклический метод с разговорной практикой и преподаёт словацкий с 2009 года.'],themes:['ТВОРЧЕСТВО И ОБЩЕНИЕ','ЯСНОСТЬ И ДИАЛОГ','ОПЫТ И СВОБОДА РЕЧИ']},
    testimonials:{label:'04 / СЛОВА НАШИХ СТУДЕНТОВ'},
    contact:{label:'05 / ВАША НОВАЯ ГЛАВА',title:'Всё начинается<br><em>с «ahoj».</em>',cta:'НАЧНЁМ РАЗГОВОР',intro:'Вопрос, новое начало, большая мечта.<br>Расскажите нам.',write:'НАПИШИТЕ НАМ',find:'ЧУТЬ БОЛЬШЕ TATRA TALK'},
    footer:{tagline:'Изучайте словацкий. Открывайте мир.',top:'Наверх',rights:'Все права защищены.'},
    form:{eyebrow:'ОДИН МАЛЕНЬКИЙ ШАГ',title:'Начнём<br><em>разговор.</em>',note:'Демонстрационная форма. Данные остаются в этом окне и никуда не отправляются.',name:'Ваше имя',email:'Электронная почта',course:'Ваше направление',submit:'Попробовать записаться',successTitle:'Хорошее начало новой главы.',success:'Это демонстрация — заявка не отправлена. Чтобы записаться на курс, напишите нам:',again:'Вернуться к форме',unsure:'Помогите выбрать курс',nameError:'Пожалуйста, введите ваше имя.'},
    a11y:{menu:'Открыть меню',close:'Закрыть',navigation:'Навигация',nextWord:'Показать следующее словацкое слово',words:'Словацкие слова',rating:'5 из 5 звёзд'},
    words:[{meaning:'Привет',pronunciation:'/ а-гой /'},{meaning:'Спасибо',pronunciation:'/ дя-ку-ем /'},{meaning:'Вместе',pronunciation:'/ спо-лу /'}]
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const levels = ['A1–A2','B1–B2','C1–C2','Business'];
const slovakWords = ['Ahoj','Ďakujem','Spolu'];
let activeCourse = 0;
let activeWord = 0;
let bubbleWord = 0;
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const enrollDialog = $('#enrollDialog');
const menuDialog = $('#menuDialog');
let lastDialogTrigger = null;
const courseSection = $('#courses');
const courseScene = $('.course-scene');
const courseScroll = { enabled: false, start: 0, distance: 0, step: 0, top: 0, direction: 1 };
let courseLayoutFrame = 0;
let courseSettleTimer = 0;
let lastScrollY = window.scrollY;
let courseReelViews = [];
let courseReelMarks = [];
let courseReelPosition = -1;

function renderCourseTabs() {
  const t = ui[currentLang].courses;
  $('#courseTabs').innerHTML = courses.map((course,i) => `<button class="course-tab" role="tab" id="course-tab-${i}" aria-controls="coursePanel" aria-selected="${i === activeCourse}" tabindex="${i === activeCourse ? 0 : -1}" data-course="${i}"><span class="course-number">0${i+1}</span><span class="course-name">${t.names[i]}<small>${t.subtitles[i]}</small></span><span class="course-tag">${i === 3 ? 'B1+' : levels[i]}</span><span class="course-tab-arrow" aria-hidden="true">↗</span></button>`).join('');
  $('#courseTabs').setAttribute('aria-label',t.choices);
}
function renderCoursePanel() {
  const t = ui[currentLang].courses;
  const panel = $('#coursePanel');
  panel.setAttribute('aria-labelledby',`course-tab-${activeCourse}`);
  // Shared grid sizing keeps the reel's viewport steady in either language.
  panel.innerHTML = courses.map((course, i) => `<div class="course-panel-view ${i === activeCourse ? 'is-active' : ''} ${i < activeCourse ? 'is-before' : ''}" data-course-view="${i}" aria-hidden="${i !== activeCourse}" ${i !== activeCourse ? 'inert' : ''}>
    <svg class="route-art" viewBox="0 0 260 180" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="155" cy="92" rx="90" ry="47"/><ellipse cx="155" cy="92" rx="110" ry="65"/><ellipse cx="155" cy="92" rx="130" ry="83"/><ellipse cx="155" cy="92" rx="70" ry="29"/><path d="M20 155Q100 50 155 92T250 15" stroke-dasharray="4 5"/><circle cx="${[53,113,171,231][i]}" cy="${[110,82,91,41][i]}" r="6" fill="currentColor"/></g></svg>
    <div class="panel-topline"><span>${t.route}</span><span>0${i + 1} / 04</span></div>
    <div class="course-level-display ${i === 3 ? 'business' : ''}">${levels[i]}</div>
    <h3>${course.title[currentLang]}</h3><p>${course.description[currentLang]}</p>
    <div class="course-meta"><span>${course.duration[currentLang]}</span><span>${course.sessions[currentLang]}</span></div>
    <button class="button" data-enroll="${course.id}"><span>${t.enroll}</span><span aria-hidden="true">↗</span></button>
  </div>`).join('') + `<div class="course-reel-progress" aria-hidden="true">${courses.map(() => '<i></i>').join('')}</div>`;
  courseReelViews = [...panel.querySelectorAll('.course-panel-view')];
  courseReelMarks = [...panel.querySelectorAll('.course-reel-progress i')];
  courseReelPosition = -1;
  paintCourseReel(activeCourse);
}
function selectCourse(index, focus = false, source = 'manual') {
  if (source === 'manual') {
    alignCourseScroll(index);
    paintCourseReel(index);
  }
  if (index === activeCourse) {
    if (focus) $(`#course-tab-${index}`).focus({ preventScroll: true });
    return;
  }
  activeCourse = index;
  $$('.course-tab').forEach((tab,i)=>{tab.setAttribute('aria-selected',i===index);tab.tabIndex=i===index?0:-1;});
  const panel = $('#coursePanel');
  const focusedView = document.activeElement.closest('[data-course-view]');
  if (focusedView && Number(focusedView.dataset.courseView) !== index) panel.focus({ preventScroll: true });
  panel.setAttribute('aria-labelledby', `course-tab-${index}`);
  $$('.course-panel-view').forEach((view, i) => {
    view.classList.toggle('is-active', i === index);
    view.classList.toggle('is-before', i < index);
    view.setAttribute('aria-hidden', String(i !== index));
    view.inert = i !== index;
  });
  updateCourseIndicator();
  if(focus) $(`#course-tab-${index}`).focus({ preventScroll: true });
}

function paintCourseReel(position) {
  if (motionQuery.matches) position = activeCourse;
  if (Math.abs(position - courseReelPosition) < .0001) return;
  courseReelPosition = position;
  $('#coursePanel').classList.add('has-reel');
  courseReelViews.forEach((view, index) => {
    const offset = index - position;
    const depth = Math.min(1, Math.abs(offset));
    view.style.setProperty('--reel-y', `${(offset * 108).toFixed(3)}%`);
    view.style.setProperty('--reel-scale', (1 - depth * .09).toFixed(4));
    view.style.setProperty('--reel-tilt', `${(-offset * 9).toFixed(3)}deg`);
    view.style.setProperty('--reel-opacity', (1 - depth * .35).toFixed(4));
    view.style.setProperty('--reel-type-y', `${(offset * 28).toFixed(3)}px`);
    view.style.setProperty('--reel-orbit', `${(-14 + offset * 32).toFixed(3)}deg`);
    view.classList.toggle('is-in-reel', Math.abs(offset) < 1.1);
    courseReelMarks[index].style.setProperty('--mark-fill', Math.max(0, 1 - Math.abs(offset)).toFixed(4));
  });
}

function updateCourseIndicator() {
  const tabs = $('#courseTabs');
  const selected = $(`#course-tab-${activeCourse}`);
  if (!selected) return;
  tabs.style.setProperty('--indicator-y', `${selected.offsetTop}px`);
  tabs.style.setProperty('--indicator-height', `${selected.offsetHeight}px`);
  tabs.classList.add('has-indicator');
}

function scheduleCourseLayout() {
  if (courseLayoutFrame) return;
  courseLayoutFrame = requestAnimationFrame(() => {
    courseLayoutFrame = 0;
    measureCourseScroll();
  });
}

function measureCourseScroll() {
  const wasEnabled = courseScroll.enabled;
  const previousStart = courseScroll.start;
  const previousDistance = courseScroll.distance;
  const previousOffset = window.scrollY - previousStart;
  const wasPinned = wasEnabled && previousOffset >= 0 && previousOffset <= previousDistance;
  const previousStage = wasPinned ? previousOffset / courseScroll.step : 0;
  const headerHeight = Math.ceil($('#navbar').getBoundingClientRect().height);
  const canPin = window.innerWidth > 900 && window.innerHeight >= 660 && !motionQuery.matches;

  courseSection.style.setProperty('--course-sticky-top', `${headerHeight}px`);
  courseSection.style.setProperty('--course-viewport', `${window.innerHeight - headerHeight}px`);
  courseSection.classList.toggle('is-scroll-scene', canPin);
  const sceneHeight = courseScene.getBoundingClientRect().height;
  // If zoom, a short viewport or a longer translation makes the scene too tall,
  // restore its regular flow rather than pinning inaccessible content.
  courseScroll.enabled = canPin && sceneHeight <= window.innerHeight - headerHeight + 1;
  courseSection.classList.toggle('is-scroll-scene', courseScroll.enabled);
  if (courseScroll.enabled) {
    courseScroll.top = headerHeight;
    // Three short transitions, then a small exit runway for the final course.
    courseScroll.step = Math.max(190, Math.min(280, window.innerHeight * .3));
    courseScroll.distance = courseScroll.step * (courses.length - 1) + 80;
    courseSection.style.setProperty('--course-track-height', `${sceneHeight + courseScroll.distance}px`);
    courseScroll.start = courseSection.getBoundingClientRect().top + window.scrollY - headerHeight;
    if (wasPinned && (Math.abs(previousStart - courseScroll.start) > 1 || Math.abs(previousDistance - courseScroll.distance) > 1)) {
      window.scrollTo({ top: courseScroll.start + previousStage * courseScroll.step, behavior: 'instant' });
    }
  } else {
    courseSection.style.removeProperty('--course-track-height');
    paintCourseReel(activeCourse);
    if (wasPinned) window.scrollTo({ top: courseSection.getBoundingClientRect().top + window.scrollY - headerHeight, behavior: 'instant' });
  }
  updateCourseIndicator();
  syncCourseScroll();
}

function alignCourseScroll(index) {
  clearTimeout(courseSettleTimer);
  if (!courseScroll.enabled) return;
  const offset = window.scrollY - courseScroll.start;
  if (offset < -32 || offset > courseScroll.distance + 2) return;
  // A click/keyboard selection moves the invisible scroll position to that
  // chapter, so the next wheel movement continues from the selected course.
  window.scrollTo({ top: courseScroll.start + index * courseScroll.step, behavior: 'instant' });
}

function syncCourseScroll() {
  if (!courseScroll.enabled || enrollDialog.open || menuDialog.open) return;
  const offset = window.scrollY - courseScroll.start;
  if (offset < -32 || offset > courseScroll.distance) return;
  // Every scroll movement advances the reel, including short trackpad gestures.
  // Brief rests around whole courses make the content easy to read.
  const raw = Math.max(0, Math.min(courses.length - 1, offset / courseScroll.step));
  const segment = Math.floor(raw);
  const progress = Math.max(0, Math.min(1, (raw - segment - .08) / .84));
  const position = segment + progress * progress * (3 - 2 * progress);
  const index = Math.round(position);
  selectCourse(index, false, 'scroll');
  paintCourseReel(position);
}

function queueCourseSettle() {
  clearTimeout(courseSettleTimer);
  if (!courseScroll.enabled) return;
  const offset = window.scrollY - courseScroll.start;
  if (offset <= 0 || offset >= courseScroll.step * (courses.length - 1)) return;
  const position = offset / courseScroll.step;
  if (Math.abs(position - Math.round(position)) < .005) return;
  // After the gesture, gently land on a complete card. Adjusting the scroll
  // position inside the sticky scene keeps the rest of the page stationary.
  courseSettleTimer = window.setTimeout(() => {
    if (!courseScroll.enabled || enrollDialog.open || menuDialog.open) return;
    const position = (window.scrollY - courseScroll.start) / courseScroll.step;
    if (position <= 0 || position >= courses.length - 1) return;
    const index = courseScroll.direction > 0 ? Math.ceil(position - .005) : Math.floor(position + .005);
    window.scrollTo({ top: courseScroll.start + index * courseScroll.step, behavior: 'instant' });
    selectCourse(index, false, 'scroll');
    paintCourseReel(index);
  }, 160);
}
function renderTeachers() {
  const openTeachers = Array.from($$('.teacher-details[open]')).map(el=>el.dataset.teacher);
  const t = ui[currentLang].teachers;
  $('#teachersGrid').innerHTML = teachers.map((teacher,i)=>`<article class="teacher-card"><div class="teacher-portrait" aria-hidden="true"><div class="portrait-top"><span>TATRA TALK</span><span>0${i+1}</span></div><span class="portrait-orbit"></span><span class="portrait-orbit orbit-two"></span><span class="portrait-letter">${['s','k','p'][i]}</span><div class="portrait-bottom"><span>${t.themes[i]}</span><span>↗</span></div></div><div class="teacher-name-row"><h3>${teacher.name[currentLang]}</h3><span>${t.experience}</span></div><p class="teacher-role">${t.role}</p><p class="teacher-summary">${t.summaries[i]}</p><details class="teacher-details" data-teacher="${i}" ${openTeachers.includes(String(i))?'open':''}><summary>${t.read}</summary><p>${teacher.bio[currentLang]}</p></details></article>`).join('');
}
function renderWord() {
  const word = ui[currentLang].words[activeWord];
  $('#wordTranslation').innerHTML = `<span>${word.meaning}</span><small>${word.pronunciation}</small>`;
  $$('.word-chip').forEach((button,i)=>{button.classList.toggle('active',activeWord===i);button.setAttribute('aria-pressed',activeWord===i);});
}
function renderBubble() {
  $('#helloWord').textContent = slovakWords[bubbleWord] + (bubbleWord===0?'!':'');
  $('#helloMeaning').textContent = ui[currentLang].words[bubbleWord].meaning;
  $('#helloButton').classList.toggle('long-word',bubbleWord===1);
  $('#helloButton').setAttribute('aria-label',`${slovakWords[bubbleWord]} — ${ui[currentLang].words[bubbleWord].meaning}. ${ui[currentLang].a11y.nextWord}`);
}
function setLanguage(lang) {
  currentLang = lang === 'ru' ? 'ru' : 'en';
  try{localStorage.setItem('lang',currentLang);}catch{/* The interface also works when storage is unavailable. */}
  const t = ui[currentLang];
  document.documentElement.lang = currentLang;
  document.title = currentLang === 'ru' ? 'Tatra Talk — Словацкий язык. Целый новый мир.' : 'Tatra Talk — A language. A whole new world.';
  $$('[data-i18n]').forEach(el=>{const value=el.dataset.i18n.split('.').reduce((obj,key)=>obj?.[key],t);if(typeof value==='string')el.innerHTML=value;});
  $$('[data-language]').forEach(button=>{button.innerHTML=currentLang==='en'?'EN <span>/ RU</span>':'RU <span>/ EN</span>';button.setAttribute('aria-label',currentLang==='en'?'Переключить на русский':'Switch to English');});
  $('#menuToggle').setAttribute('aria-label',t.a11y.menu);
  $('#menuClose').setAttribute('aria-label',t.a11y.close);
  $('#enrollClose').setAttribute('aria-label',t.a11y.close);
  menuDialog.setAttribute('aria-label',t.a11y.navigation);
  $('.desktop-nav').setAttribute('aria-label',t.a11y.navigation);
  $('.word-choices').setAttribute('aria-label',t.a11y.words);
  $('.quote-stars').setAttribute('aria-label',t.a11y.rating);
  $('.scroll-link').setAttribute('aria-label',t.nav.about);
  const selectedCourse = $('#courseSelect').value;
  $('#courseSelect').innerHTML=`<option value="">${t.form.unsure}</option>`+courses.map(course=>`<option value="${course.id}">${course.title[currentLang]}</option>`).join('');
  $('#courseSelect').value=selectedCourse;
  $('#testimonialText').textContent=testimonials[0].text[currentLang];
  $('#testimonialMeta').textContent=`${testimonials[0].country[currentLang]} · ${testimonials[0].course[currentLang]}`;
  $('#contactHours').textContent=contactInfo.hours[currentLang];
  $('#contactAddress').textContent=contactInfo.address[currentLang];
  renderCourseTabs();renderCoursePanel();renderTeachers();renderWord();renderBubble();
  scheduleCourseLayout();
}

function openEnrollment(trigger) {
  lastDialogTrigger = trigger;
  $('#enrollForm').reset();
  $('#studentName').setCustomValidity('');
  $('#enrollForm').hidden=false;$('#formResult').hidden=true;
  $('#courseSelect').value=trigger.dataset.enroll || '';
  enrollDialog.showModal();
  $('#studentName').focus({preventScroll:true});
}
function restoreFocus(){if(lastDialogTrigger?.isConnected)lastDialogTrigger.focus({preventScroll:true});}

document.addEventListener('click',event=>{
  const languageButton=event.target.closest('[data-language]');
  if(languageButton){setLanguage(currentLang==='en'?'ru':'en');return;}
  const enrollButton=event.target.closest('[data-enroll]');
  if(enrollButton){openEnrollment(enrollButton);return;}
  const courseButton=event.target.closest('[data-course]');
  if(courseButton){selectCourse(Number(courseButton.dataset.course));return;}
  const wordButton=event.target.closest('[data-word]');
  if(wordButton){activeWord=Number(wordButton.dataset.word);renderWord();}
});
$('#courseTabs').addEventListener('keydown',event=>{
  let next=activeCourse;
  if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(activeCourse+1)%courses.length;
  else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(activeCourse+courses.length-1)%courses.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=courses.length-1;
  else return;
  event.preventDefault();selectCourse(next,true);
});
$('#helloButton').addEventListener('click',()=>{bubbleWord=(bubbleWord+1)%slovakWords.length;renderBubble();});
$('#menuToggle').addEventListener('click',()=>{lastDialogTrigger=$('#menuToggle');menuDialog.showModal();});
$('#menuClose').addEventListener('click',()=>menuDialog.close());
menuDialog.addEventListener('close',restoreFocus);
$('#enrollClose').addEventListener('click',()=>enrollDialog.close());
enrollDialog.addEventListener('close',()=>{restoreFocus();$('#enrollForm').reset();});
enrollDialog.addEventListener('click',event=>{
  if(event.target!==enrollDialog)return;
  const r=enrollDialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)enrollDialog.close();
});
$$('#menuDialog nav a').forEach(link=>link.addEventListener('click',()=>{
  menuDialog.close();
  const destination=$(link.getAttribute('href'));
  requestAnimationFrame(()=>{
    destination.scrollIntoView({behavior:motionQuery.matches?'instant':'smooth'});
    destination.setAttribute('tabindex','-1');
    destination.focus({preventScroll:true});
    destination.addEventListener('blur',()=>destination.removeAttribute('tabindex'),{once:true});
  });
}));
window.matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches&&menuDialog.open)menuDialog.close();});
$('#studentName').addEventListener('input',event=>event.target.setCustomValidity(event.target.value.trim()?'':ui[currentLang].form.nameError));
$('#enrollForm').addEventListener('submit',event=>{
  event.preventDefault();
  if(!$('#studentName').value.trim()){$('#studentName').setCustomValidity(ui[currentLang].form.nameError);$('#studentName').reportValidity();return;}
  $('#enrollForm').hidden=true;$('#formResult').hidden=false;$('#formResult').focus();
});
$('#formReset').addEventListener('click',()=>{$('#formResult').hidden=true;$('#enrollForm').hidden=false;$('#studentName').focus();});

// One frame per scroll event; no wheel interception or perpetual animation loop.
let scrollPending=false;
function paintScroll(){
  const distance=document.documentElement.scrollHeight-window.innerHeight;
  document.documentElement.style.setProperty('--progress',distance>0?Math.min(1,window.scrollY/distance):0);
  if(!motionQuery.matches)document.documentElement.style.setProperty('--ribbon-shift',`${Math.max(-100,-window.scrollY*.035)}px`);
  syncCourseScroll();
  scrollPending=false;
}
window.addEventListener('scroll',()=>{
  const delta = window.scrollY - lastScrollY;
  if (Math.abs(delta) > 1) courseScroll.direction = Math.sign(delta);
  lastScrollY = window.scrollY;
  queueCourseSettle();
  if(!scrollPending){scrollPending=true;requestAnimationFrame(paintScroll);}
},{passive:true});
window.addEventListener('resize',()=>{paintScroll();scheduleCourseLayout();},{passive:true});
const art=$('#heroArt');
art.addEventListener('pointermove',event=>{
  if(motionQuery.matches||event.pointerType!=='mouse')return;
  const box=art.getBoundingClientRect();
  art.style.setProperty('--art-x',`${(event.clientX-box.left-box.width/2)*.022}px`);
  art.style.setProperty('--art-y',`${(event.clientY-box.top-box.height/2)*.016}px`);
});
art.addEventListener('pointerleave',()=>{art.style.setProperty('--art-x','0px');art.style.setProperty('--art-y','0px');});
motionQuery.addEventListener('change',()=>{art.style.setProperty('--art-x','0px');art.style.setProperty('--art-y','0px');paintScroll();scheduleCourseLayout();});
setLanguage(currentLang);
$('#year').textContent=new Date().getFullYear();
paintScroll();
document.fonts.ready.then(scheduleCourseLayout);
window.addEventListener('pageshow', scheduleCourseLayout);
// Measure only when real content geometry changes, not on every scroll frame.
if ('ResizeObserver' in window) {
  const courseResizeObserver = new ResizeObserver(scheduleCourseLayout);
  [$('#about'), $('#home'), $('#courseTabs'), courseScene].forEach(element => courseResizeObserver.observe(element));
}
