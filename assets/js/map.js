const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 800;
let haut = false;
let bas = false;
let droite = false;
let gauche = false;
let bombe = false;

let map =
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0 c'est un mur, 1 c'est un chemin
let tileWidth = 50, tileHeight = 50; //taille d'un bloc en pixel
let mapWidth = 16, mapHeight = 12; //taille de la map en nombre de bloc
let test = canvas.height - 90;

function player() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(50,50,30,30);
    joueur.update();
    joueur.draw();
    //joueur.bombe();
    //joueur.test();
    requestAnimationFrame(player);
}
player();

/** 
function bombe() {
    let div = document.createElement('div');
    div.className = 'bombe';
    document.body.appendChild(div)
}
*/

window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowDown') bas = true;
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowDown') bas = false;
});
window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowUp') haut = true;
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowUp') haut = false;
});
window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowRight') droite = true;
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowRight') droite = false;
});
window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowLeft') gauche = true;
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowLeft') gauche = false;
});
window.addEventListener('keydown',function(e){
    if (e.code ==='Space') joueur.bombe();
})
