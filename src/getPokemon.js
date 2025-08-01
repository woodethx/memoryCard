function pick10mons(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const arr = [];
  while(arr.length < 10){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if(!arr.includes(num)) arr.push(num);
  }
  return arr;
}
function pretty(str) {
  return str
    .split('-') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
    .join(' ');  
}

export default function get10mons(gen){
    let min; let max;
    console.log(gen);
    switch (gen) {
    default:
        min = 1;
        max = 151;
    case 1:
        min = 1;
        max = 151;
    case 2:
        min = 152;
        max = 251;
    case 3:
        min = 252;
        max = 386;
    case 4:
        min = 387;
        max = 493;
    case 5:
        min = 494;
        max = 649;
    case 6:
        min = 650;
        max = 721;
    case 7:
        min = 722;
        max = 809;
    case 8:
        min = 810;
        max = 905;
    case 9:
        min = 906;
        max = 1025;
    }
    const arr = pick10mons(min, max);
    const arrData = [];
    arr.forEach(async (num, i) => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+num;
        const response = await fetch(url);
        const raw = await response.json();
        arrData[i] = {};
        arrData[i].name = pretty(raw.species.name);
        arrData[i].sprite = raw.sprites.front_default;
    })
    return arrData;
}