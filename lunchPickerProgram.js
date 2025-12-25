let lunches = [];


function addLunchToStart(ar, s) {
  ar.unshift(s);
  console.log(`${s} added to the start of the lunch menu.`);
  return ar;
}

function addLunchToEnd(ar,s){
ar.push(s);
console.log(`${s} added to the end of the lunch menu.`);
return ar;
}

function removeFirstLunch(ar) {
  if (ar.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let t = ar.shift();
    console.log(`${t} removed from the start of the lunch menu.`);
  }
  return ar;
}

function removeLastLunch(ar){
  if(ar.length == 0){
console.log("No lunches to remove.");
}
else {
  let t = ar.pop();
console.log(`${t} removed from the end of the lunch menu.`);
}
return ar;
}

function getRandomLunch(ar){
  if(ar.length == 0){
    console.log("No lunches available.");
  }
  else{
let s = ar[Math.floor(Math.random() * ar.length)];

console.log(`Randomly selected lunch: ${s}`);

}
}

function showLunchMenu(ar){
  if(ar.length == 0){
    console.log("The menu is empty.");
  }
  else {
    console.log("Menu items: " + ar.join(", "));
  }
}

