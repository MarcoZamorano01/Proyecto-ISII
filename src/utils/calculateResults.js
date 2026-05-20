export function calculateCareer(scores) {

  let highestCategory = "";
  let highestScore = 0;

  for (const category in scores) {

    if (scores[category] > highestScore) {

      highestScore = scores[category];

      highestCategory = category;
    }
  }

  return highestCategory;
}