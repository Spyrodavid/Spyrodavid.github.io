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

  if (age.getAttribute("info") != "full") {
    return
  }


  const pastDate = new Date(2003, 5, 10, 8, 0, 0); 
  const currentDate = new Date(); 

  ms = (currentDate - pastDate)
  s = ms / 1000
  m = s / 60
  h = m / 60
  d = h / 24
  y = d / 365

  age.textContent = (y.toFixed(8))

}

setInterval(updateAge, 100);

images = document.querySelectorAll(".thumbnail, #headshot") 

seed = 0

for (image of images)  {

  seed = seed * 13 + 13
  seed %= 20
  image.style.transform = `rotate(${seed - 10}deg)`
}


