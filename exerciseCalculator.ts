export interface MultiplyValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

/*interface ExerciseValues {
  array: Array<number>;
  target: number;
}

const parseArgumentS = (args: string[]): ExerciseValues => {
  if (args.length < 1) throw new Error("Not enough arguments");

  //console.log(args);

  if (!isNaN(Number(args[2]))) {
    let newArr: Array<number> = [];
    for (let i = 3; i < args.length; i++) {
      newArr.push(Number(args[i]));
    }
    //console.log("newArr", newArr);

    return {
      array: newArr,
      target: Number(args[2]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};*/

export const calculateExercises = (arr: Array<number>, target: number) : MultiplyValues => {
  const periodLength: number = arr.length;

  let success: boolean = false,
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

/*try {
  const { array, target } = parseArgumentS(process.argv);
  console.log(calculateExercises(array, target));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  // here we can not use error.message
  if (error instanceof Error) {
    // the type is narrowed and we can refer to error.message
    errorMessage += error.message;
  }
  // here we can not use error.message

  console.log(errorMessage);
}*/
