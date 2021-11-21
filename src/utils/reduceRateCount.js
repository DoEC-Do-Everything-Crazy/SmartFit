export const reduceRateCount = eachRateCount => {
  let rateCount = [0, 0, 0, 0, 0];
  let ratePercent = [0, 0, 0, 0, 0];

  let arrObject = [];

  const total = eachRateCount.reduce((sum, element) => sum + element.count, 0);

  eachRateCount.map(element => {
    ratePercent[element._id - 1] =
      Math.round((element.count / total) * 100 * 100) / 100;
    rateCount[element._id - 1] = element.count;
  });

  rateCount.map((element, index) => {
    arrObject[index] = {
      _id: index + 1,
      percent: ratePercent[index],
      count: rateCount[index],
    };
  });

  console.log({arrObject});

  return arrObject;
};
