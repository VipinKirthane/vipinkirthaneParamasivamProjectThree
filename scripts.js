

$(function () {

    let roundNumber = 0;
    //------------ Random Image Chooser------------------
    const randomNumGenerator = function () {
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    
    $('button').on('click', function(){
        randomNumberImage1 = randomNumGenerator();
        randomNumberImage2 = randomNumGenerator();
        randomNumberImage3 = randomNumGenerator();

        $('.slot1').html(`<img src="assets/image${randomNumberImage1}.png" alt="">`);
        $('.slot2').html(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
        $('.slot3').html(`<img src="assets/image${randomNumberImage3}.png" alt="">`);
        
        combinationChecker();
        showPlayerStats();
        
        // FOR CHECKING IF THE PLAYER HAS ENOUGH MONEY TO CONTINUE THE GAME
        const balanceCashChecker = () => {
            if (playerCash >= 100) {
                // continue game
            } else if (playerCash >= 2000) {
                // you are cheating, get out of the casino
            } else {
                // No more money? SECURITY!!!!
            }
        }
        //Adjust score
           
    })
    //------------ Random Image Chooser-----------------
    
    const showPlayerStats = () => {
        $('.playerCash').text('Cash Pile: $' + playerCash);
        $('.roundNumber').text(`Round Number: ${roundNumber++}`);
    }
    //------------ Player Cash Counter------------------
    let playerCash = 1000;
    let defaultWager = 100;
    
    const combinationChecker = () => {
        if (randomNumberImage1 === randomNumberImage2 && randomNumberImage2 === randomNumberImage3) {
            playerCash = ((playerCash) + (defaultWager * 2));
        } else if (randomNumberImage1 === randomNumberImage2 || randomNumberImage2 === randomNumberImage3 || randomNumberImage3 === randomNumberImage1) {
            playerCash = ((playerCash + (defaultWager / 2)));
        } else if (randomNumberImage1 != randomNumberImage2 && randomNumberImage2 != randomNumberImage3) {
            playerCash = ((playerCash - defaultWager));
        }
    }

    showPlayerStats();
})
//------------ Player Cash Counter-----------------------
