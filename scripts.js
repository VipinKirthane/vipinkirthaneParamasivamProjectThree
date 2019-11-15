

$(function () {

    let roundNumber = 0;
    let winnings = 0;
    //-------------------- Random Image Chooser-----------------------------
    const randomNumGenerator = function () {
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    
    const playGame = () => {
        randomNumberImage1 = randomNumGenerator();
        randomNumberImage2 = randomNumGenerator();
        randomNumberImage3 = randomNumGenerator();

        $('.slot1').html(`<img src="assets/image${randomNumberImage1}.png" alt="">`);
        $('.slot2').html(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
        $('.slot3').html(`<img src="assets/image${randomNumberImage3}.png" alt="">`);

        combinationChecker();
        showPlayerStats();
        balanceCashChecker();
    }

    $('button').on('click', function(){
        playGame();
        $('button').addClass('animated bounce');
        
        //Adjust score
           
    })
    //---------------------- Random Image Chooser--------------------------
    

    //------------------To check if player has enough cash-------------------
    const balanceCashChecker = () => {
        if (playerCash > 100 && playerCash < 2000) {
            // continue game
        } else if (playerCash >= 2000) {
            // you are cheating, get out of the casino
            alert('get out');
        } else {
            // No more money? SECURITY!!!!
        }
    }
//------------------To check if player has enough cash-------------------
    

//------------------ Shows Player Stats ---------------------------------
    const showPlayerStats = () => {
        $('.playerCash').text('Cash Pile: $' + playerCash);
        $('.roundNumber').text(`Round Number: ${roundNumber++}`);
        $('.winnings').html(`Winnings: ${winnings}`);
    }
//------------------ Shows Player Stats ---------------------------------


//------------------------- Player Cash Counter----------------------------
    let playerCash = 1000;
    let defaultWager = 100;
    
    const combinationChecker = () => {
        if (randomNumberImage1 === randomNumberImage2 && randomNumberImage2 === randomNumberImage3) {
            playerCash = ((playerCash) + (defaultWager * 2));
            winnings = 200;
        } else if (randomNumberImage1 === randomNumberImage2 || randomNumberImage2 === randomNumberImage3 || randomNumberImage3 === randomNumberImage1) {
            playerCash = ((playerCash + (defaultWager / 2)));
            winnings =  50;
        } else if (randomNumberImage1 != randomNumberImage2 && randomNumberImage2 != randomNumberImage3) {
            playerCash = ((playerCash - defaultWager));
            winnings = -100;
        }
    }

    showPlayerStats();

    const winningsStatus = () => {
        
    }

    winningsStatus();
})
//---------------------------- Player Cash Counter----------------------------
