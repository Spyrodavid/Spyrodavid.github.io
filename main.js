age = document.querySelector('#age')

age.addEventListener('mouseenter', () => {
  age.setAttribute("info", "full");
});

// age.addEventListener('mouseleave', () => {
//   age.setAttribute("info", "short");
// });


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



const test = document.querySelector('#test');
space_size = test.getBoundingClientRect().width;
test.textContent = "TT"
space_size -= test.getBoundingClientRect().width; 


const hi = document.querySelector('#hi');

default_hi_right = hi.getBoundingClientRect().right

console.log(default_hi_right)

const headers = document.querySelectorAll("h2");

window.addEventListener('scroll', () => {
  

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

  
  hi.style.left = String(start_text.getBoundingClientRect().left - default_hi_right - space_size) + "px"

  console.log(space_size)
});

