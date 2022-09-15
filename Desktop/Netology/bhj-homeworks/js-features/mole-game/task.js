for (let index = 1; index < 10; index++) { 
    let dead = document.getElementById("dead");
    let lost = document.getElementById("lost");
    const getHole = index => document.getElementById(`hole${index}`);

    getHole(index).onclick = () => {
    if (getHole(index).className.includes('hole_has-mole')) {
      dead.textContent++;
    } else lost.textContent++;    
    
  function clear() {
    dead.textContent = 0;
    lost.textContent = 0;
  }    
  if (dead.textContent >= 10) {
    alert('Вы победили');
    clear()
  } 
    if (lost.textContent >= 5) {
    alert('Вы проиграли');
    clear()
   }
  }
}