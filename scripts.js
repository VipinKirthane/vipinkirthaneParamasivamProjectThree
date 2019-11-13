

$(function () {

    
    // Random Image Section
    const randomNumGenerator = function (){
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    
    $('button').on('click', function(){
        $('.slotMachine1 .slotImage' + randomNumberImage1).show();
        $('.slotMachine2 .slotImage' + randomNumberImage2).show();
        $('.slotMachine3 .slotImage' + randomNumberImage3).show();
    })
    
    if ( randomNumberImage1 === randomNumberImage2 === randomNumberImage3) {
    
    }


    // Player Cash
    let playerCash = 1000;
    let defaultWager = 100;

    if (randomNumberImage1 === randomNumberImage2 === randomNumberImage3) {
        playerCash = ((playerCash-100) + (defaultWager += defaultWager));
    } else if (randomNumberImage1 === randomNumberImage2 || randomNumberImage2 === randomNumberImage3 || randomNumberImage3 === randomNumberImage1) {
        playerCash = ((playerCash-100) + (defaultWager + (defaultWager / 2)));
    } else {
        playerCash = ((playerCash-100) - (defaultWager - defaultWager));
    }

    console.log(playerCash);


})