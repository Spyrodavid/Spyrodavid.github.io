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