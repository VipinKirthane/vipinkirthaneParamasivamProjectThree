let roundNumber = 0;
let winnings = 0;


$(function () {

    Swal.fire(`Welcome To Slot Machines!
                $_______________________$
                If 🍒🍒🍒 = You win $200, 
                If 🍒🍒   =  You win $50,
                If 🍒     =  You win $0
                $_______________________$`);

    //-------------------- Random Image Chooser-----------------------------
    const randomNumGenerator = function () {
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    //---------------------- Random Image Chooser--------------------------



    // -------------------- Play Game Function ----------------------------
    const playGame = () => {
        randomNumberImage1 = randomNumGenerator();
        randomNumberImage2 = randomNumGenerator();
        randomNumberImage3 = randomNumGenerator();

        $('.slot1').html(`<img src="assets/image${randomNumberImage1}.png" alt="">`);
        $('.slot2').html(`<img src="assets/image${randomNumberImage2}.png" alt="">`);
        $('.slot3').html(`<img src="assets/image${randomNumberImage3}.png" alt="">`);
        roundNumber++;
        combinationChecker();
        showPlayerStats();
        balanceCashChecker();
    }
    // -------------------- Play Game Function ----------------------------



    //------------------To check if player has enough cash-------------------
    const balanceCashChecker = () => {
        if (playerCash > 1000 && playerCash < 2000) {
            // continue game
        } else if (playerCash >= 2000) {
            // you are cheating, get out of the casino
            playerCash = 1000;
            winnings = 0;
            roundNumber = 0;
            
            $('.playerCash').text(`Cash Pile: $${playerCash}`);
            $('.winnings').html(`Winnings: $${winnings}`);
            $('.roundNumber').text(`Round Number: ${roundNumber}`);
            Swal.fire({
                title: 'JACKPOT!',
                text: 'You won $1000, we will take all your money now',
                type: 'error',
                confirmButtonText: 'RESTART GAME'
            });
        } else if (playerCash < 500) {
            playerCash = 1000;
            winnings = 0;
            roundNumber = 0;
            $('.playerCash').text(`Cash Pile: $${playerCash}`);
            $('.winnings').html(`Winnings: $${winnings}`);
            $('.roundNumber').text(`Round Number: ${roundNumber}`);
            Swal.fire({
                title: 'Not Enough Money',
                text: 'You don\'t have enough money to play. SECURITY!!!',
                type: 'error',
                confirmButtonText: 'RESTART GAME'
            });
        }
    }
    //------------------To check if player has enough cash-------------------
    



    //--------------------- Shows Player Stats ------------------------------
    const showPlayerStats = () => {
        $('.playerCash').text(`Cash Pile: $${playerCash}`);
        $('.roundNumber').text(`Round Number: ${roundNumber}`);
        $('.winnings').html(`Winnings: $${winnings}`);
    }
    //----------------------- Shows Player Stats -----------------------------




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

    //------------------------- Player Cash Counter----------------------------
    




    //---------------------- Click Event to START the game ----------------
    $('.startButton').on('click', function () {
        playGame();
        // Using slideup() to create delay for bounce effect to happen
        $('.winnings').removeClass('zoomIn').removeClass('heartBeat').slideUp(1).slideDown(1).addClass('heartBeat');
        $('.startButton').removeClass('zoomIn').removeClass('pulse').slideUp(1).slideDown(1).addClass('pulse');
        $('.slots').removeClass('slideInUp').removeClass('flipInX').slideUp(1).slideDown(1).addClass('flipInX');
    })
    //---------------------- Click Event to START the game ----------------
    showPlayerStats();
    
})

//---------------------------- Player Cash Counter----------------------------
