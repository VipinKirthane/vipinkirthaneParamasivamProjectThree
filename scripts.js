let roundNumber = 0;
let winnings = 0;


$(function () {

    // Welcome screen from Sweet Alert
    Swal.fire(`Welcome To Slot Machines!
                $_______________________$
                If 🍒🍒🍒 = You win $200, 
                If 🍒🍒   = You win $50,
                If 🍒     = You win $0.`);

    //-------------------- Random Image Number Generator-----------------------------
    const randomNumGenerator = function () {
        return (Math.floor(Math.random() * 3) + 1);
    };
    
    let randomNumberImage1 = randomNumGenerator();
    let randomNumberImage2 = randomNumGenerator();
    let randomNumberImage3 = randomNumGenerator();
    //-------------------- Random Image Number Generator-----------------------------



    // -------------------- Play Game Function ----------------------------
    const playGame = () => {
        randomNumberImage1 = randomNumGenerator();
        randomNumberImage2 = randomNumGenerator();
        randomNumberImage3 = randomNumGenerator();

        // Outputs the respective image based on the generated random number
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
            // continues game
        } else if (playerCash >= 2000) {
            // Wins game if player has cash >= $2000
            playerCash = 1000;
            winnings = 0;
            roundNumber = 0;
            $('.playerCash').text(`Cash Pile: $${playerCash}`);
            $('.winnings').html(`Winnings: $${winnings}`);
            $('.roundNumber').text(`Round Number: ${roundNumber}`);
            // Sweet alert for winning the game
            Swal.fire({
                title: 'JACKPOT!',
                text: 'You won $1000, we will take all your money now',
                type: 'error',
                confirmButtonText: 'RESTART GAME'
            });
        } else if (playerCash < 500) {
            // Loses game if player has cash less than $500
            playerCash = 1000;
            winnings = 0;
            roundNumber = 0;
            $('.playerCash').text(`Cash Pile: $${playerCash}`);
            $('.winnings').html(`Winnings: $${winnings}`);
            $('.roundNumber').text(`Round Number: ${roundNumber}`);
            // Sweet alert for losing the game
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
    let playerCash = 1000; //Initial player cash amount
    let defaultWager = 100; //Default bet amount per round
    
    const combinationChecker = () => {
        if (randomNumberImage1 === randomNumberImage2 && randomNumberImage2 === randomNumberImage3) {
            // If player matches all three combination they win double their wager (i.e. $200)
            playerCash = ((playerCash) + (defaultWager * 2));
            winnings = 200;
        } else if (randomNumberImage1 === randomNumberImage2 || randomNumberImage2 === randomNumberImage3 || randomNumberImage3 === randomNumberImage1) {
            // If player matches atleast two combination they win half their wager (i.e. $50)
            playerCash = ((playerCash + (defaultWager / 2)));
            winnings =  50;
        } else if (randomNumberImage1 != randomNumberImage2 && randomNumberImage2 != randomNumberImage3) {
            // If player has no combination they lose all the wager for that round (i.e. $100)
            playerCash = ((playerCash - defaultWager));
            winnings = -100;
        }
    }
    //------------------------- Player Cash Counter----------------------------
    




    //---------------------- Click Event to Start the game ----------------
    $('.startButton').on('click', function () {
        playGame();
        // Using slideup() as a hack to create delay for bounce effect to happen
        $('.winnings').removeClass('zoomIn').removeClass('heartBeat').slideUp(1).slideDown(1).addClass('heartBeat');
        $('.startButton').removeClass('zoomIn').removeClass('pulse').slideUp(1).slideDown(1).addClass('pulse');
        $('.slots').removeClass('slideInUp').removeClass('flipInX').slideUp(1).slideDown(1).addClass('flipInX');
    })
    //---------------------- Click Event to START the game ----------------
    showPlayerStats();
})

//---------------------------- Player Cash Counter----------------------------
