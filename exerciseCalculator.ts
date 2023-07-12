interface MultiplyValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (arr: Array<number>, target: number) => {
  const periodLength: number = arr.length;

  let success: boolean = false,
    rating: number,
    ratingDescription: string;
    
  let trainingDays: Array<number> = [];
  for (let i = 0; i < periodLength; i++) {
    if (arr[i] !== 0) {
      trainingDays.push(arr[i]);
    }
  }
  //console.log(periodLength,trainingDays.length);
  let average: number =
    trainingDays.reduce((acc, curr) => (acc = acc + curr), 0) / periodLength;

  if (average < target) {
    rating = 1;
    ratingDescription = "not too bad but could be better";
  } else {
    success = true;
    ratingDescription = "Good keep it up";
  }

  return {
    periodLength: periodLength,
    trainingDays: trainingDays.length,
    success,
    rating: 2,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
