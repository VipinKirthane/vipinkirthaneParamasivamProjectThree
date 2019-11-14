

$(function () {

    
    //------------ Random Image Chooser------------------
    const randomNumGenerator = function () {
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    
    // console.log(randomNumberImage1);
    // console.log(randomNumberImage2);
    // console.log(randomNumberImage3);

    $('button').on('click', function(){
        //Hide all results
        $('.slot1').html(`<img src="assets/image${randomNumberImage1}.png" alt="">`);
        $('.slot2').html(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
        $('.slot3').html(`<img src="assets/image${randomNumberImage3}.png" alt="">`);
        // $('.slotMachine2 .slotImage' + randomNumberImage2).append(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
        // $('.slotMachine3 .slotImage' + randomNumberImage3).append(`<img src="assets/image${randomNumberImage3}.png" alt="">`);
        
        combinationChecker();

        // FOR CHECKING IF THE PLAYER HAS ENOUGH MONEY TO CONTINUE THE GAME
        const balanceCashChecker = () => {
            if (playerCash >= 100) {
                // continue game
                $('.slot1').html(`<img src="assets/image${randomNumberImage1}.png" alt="">`);
                $('.slot2').html(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
                $('.slot3').html(`<img src="assets/image${randomNumberImage3}.png" alt="">`);
            } else if (playerCash >= 2000) {
                // you are cheating, get out of the casino
            } else {
                // No more money? SECURITY!!!!
            }
        }

        //Adjust score
    })
    //------------ Random Image Chooser-----------------
    

    //------------ Player Cash Counter------------------
    let playerCash = 1000;
    let defaultWager = 100;
    
    const combinationChecker = () => {
        if (randomNumberImage1 === randomNumberImage2 && randomNumberImage2 === randomNumberImage3) {
            playerCash = ((playerCash - defaultWager) + (defaultWager * 2));
        } else if (randomNumberImage1 === randomNumberImage2 || randomNumberImage2 === randomNumberImage3 || randomNumberImage3 === randomNumberImage1) {
            playerCash = ((playerCash - defaultWager) + (defaultWager + (defaultWager / 2)));
        } else if (randomNumberImage1 != randomNumberImage2 && randomNumberImage2 != randomNumberImage3) {
            playerCash = ((playerCash - defaultWager));
        }
        console.log(playerCash);
    }
})
//------------ Player Cash Counter-----------------------
