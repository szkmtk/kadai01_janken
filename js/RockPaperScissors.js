document.addEventListener('DOMContentLoaded', function() {
    const choices = ['グー', 'チョキ', 'パー'];
    const results = {
        win: 'あなたの勝ち',
        lose: 'あなたの負け',
        draw: 'あいこ'
    };

    function getRandomChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return results.draw;
        if ((playerChoice === 'グー' && computerChoice === 'チョキ') ||
            (playerChoice === 'チョキ' && computerChoice === 'パー') ||
            (playerChoice === 'パー' && computerChoice === 'グー')) {
            return results.win;
        }
        return results.lose;
    }

    function playGame(playerChoice) {
        const computerChoice = getRandomChoice();
        document.getElementById('pc_hands').textContent = computerChoice;
        const result = determineResult(playerChoice, computerChoice);
        document.getElementById('judgment').textContent = result;
    }

    document.getElementById('gu_btn').addEventListener('click', function() { playGame('グー'); });
    document.getElementById('cho_btn').addEventListener('click', function() { playGame('チョキ'); });
    document.getElementById('par_btn').addEventListener('click', function() { playGame('パー'); });
});
