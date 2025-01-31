console.log("hello")


let lastScroll = 0;

function onScroll() {
  const currentScroll = window.scrollY;
  let overlay = document.querySelector('.backgroundVideoMainOverlay');

  // Check if we're at the top or have scrolled past it
  if (currentScroll > 0) {
    // overlay.classList.add('scrolled');

    document.querySelectorAll('.footer img').forEach((img, i) => {
      const newSources = [
        './Icons/linkedinRed.png',
        './Icons/mailRed.png',
        './Icons/mobileRed.png'
      ];
      img.src = newSources[i];
    });

  } else {
    overlay.classList.remove('scrolled');

    document.querySelectorAll('.footer img').forEach((img, i) => {
      const newSources = [
        './Icons/linkedinWhite.png',
        './Icons/mailWhite.png',
        './Icons/mobileWhite.png'
      ];
      img.src = newSources[i];
    });

  }

  lastScroll = currentScroll;
  
}

window.addEventListener('scroll', onScroll);




function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e){
  const{
      scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

  const dist = targetY - timelineRect.top
  console.log(dist);

  if (down && !full){
      set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`
  }

  if (dist > timeline.offsetHeight + 50 && !full){
      full = true;
      line.style.bottom = `-50px`
  }

  sections.forEach(item => {
      //console.log(items);
      const rect = item.getBoundingClientRect();

      if(rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add('show-me')
      }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler)






