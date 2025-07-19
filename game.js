
function getRandomGame() {
    const games = ["طرنيب", "هاند", "بنت الشدا", "41", "كمبلكس"];
    const selected = games[Math.floor(Math.random() * games.length)];
    return selected;
}

function startGame() {
    const game = getRandomGame();
    console.log(`🃏 اللعبة المختارة: ${game}`);
    console.log("🎮 يتم الآن تجهيز اللاعبين وتوزيع الأوراق...");
    // هنا تضع منطق بدء الجولة لاحقاً
}

module.exports = {
    startGame
};
