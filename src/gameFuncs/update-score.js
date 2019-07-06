/* global jQuery aly_gameInfo */

const updateScore = (isCorrect) => {
  if (isCorrect) {
    aly_gameInfo.score += 1;
  }
  jQuery('#scoreContainer span').text(aly_gameInfo.score);
};

export default updateScore;
