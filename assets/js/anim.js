let player = document.getElementById('player');
let container = document.getElementById('container')

console.log(player, container)
let playerHaut = 0;
let playerGauche = 0;


function anime(e) {
    console.log("test")
    if (e.keyCode == 39) {
        playerGauche +=2;
        player.style.left = playerGauche+'2px';
    }

    if(e.keyCode == 37){
        playerGauche -=2;
        player.style.left = playerGauche+'2px';
    }

    if(e.keyCode == 40){
        playerHaut +=2;
        player.style.top = playerHaut+'2px';
    }

    if(e.keyCode == 38){
        playerHaut -=2;
        player.style.top = playerHaut+'2px';
    }
}

document.onkeydown = anime;
