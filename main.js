sdsu = document.querySelector('#sdsu')

sdsu.addEventListener('mouseenter', () => {
  sdsu.innerHTML = "San Diego State University"
});

bands = document.querySelector('#bands')

bands.addEventListener('mouseenter', () => {
  bands.innerHTML = "<i>The Chardoors</i>, <i>The Half Wits</i>, <i>Lime Devil</i>, and <i>The Hot Socks</i>"
});

song = document.querySelector('#song')

song.addEventListener('mouseenter', () => {
  song.innerHTML = "<i>Demented</i> and <i>Kazoo</i>"
});


age = document.querySelector('#age')

age.addEventListener('mouseenter', () => {
  age.setAttribute("info", "full");
});

function updateAge() {

  const age = document.querySelector('#age');

  const pastDate = new Date(2003, 5, 10, 8, 0, 0); 
  const currentDate = new Date(); 

  ms = (currentDate - pastDate)
  s = ms / 1000
  m = s / 60
  h = m / 60
  d = h / 24
  y = d / 365

  if (age.getAttribute("info") == "full")
    age.textContent = (y.toFixed(8))
  else
    age.textContent = (y.toFixed(0))

}

setInterval(updateAge, 100);

const hi = document.querySelector('#hi');

const headers = document.querySelectorAll("h2");

const test = document.querySelector('#test');
  
for (const header of headers) {

  hi.textContent = header.getAttribute("intro_text")
  header.setAttribute("intro_right", hi.getBoundingClientRect().right)

  if (header.getAttribute("space_size") != null) 
    continue

  test.textContent = header.textContent + " " + header.getAttribute("intro_text")
  space_size = test.getBoundingClientRect().width;

  console.log( space_size = test.getBoundingClientRect().width)
  

  test.textContent = header.textContent + header.getAttribute("intro_text")
  space_size -= test.getBoundingClientRect().width; 
  console.log( test.getBoundingClientRect().width)

  header.setAttribute("space_size", space_size)

  console.log(header)

}
test.remove()

hi.textContent = "Hi, I'm"










default_hi_right = hi.getBoundingClientRect().right

console.log(default_hi_right)

function change_hi () {
  
  const hirect = hi.getBoundingClientRect();

  var closest_header = 0
  var closest_dist = 9999
  for (const header of headers) {

    const headerrect = header.getBoundingClientRect();

    if (Math.abs(headerrect.top - hirect.top) < closest_dist) {

      closest_dist = Math.min(closest_dist, Math.abs(headerrect.top - hirect.top))
      closest_header = header

      hi.textContent = header.getAttribute("intro_text")
    }


  }

  closest_dist /= 10

  hi.style.transform = `translateX(${- (closest_dist * closest_dist )}px)`;

  start_text = closest_header.querySelector(".starth")

  hi.style.left = String(start_text.getBoundingClientRect().left - closest_header.getAttribute("intro_right") - space_size) + "px"

  console.log(space_size)
}

change_hi()

window.addEventListener('scroll', change_hi);

