interface BMIvalues {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): BMIvalues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const calculateBmi = (height: number, weight: number): string => {
  const result = Math.round(weight / (height * 0.01) ** 2);
  if (result < 16.0) {
    return "Underweight (Severe thinness)";
  } else if (result > 16 && result < 16.9) {
    return "Underweight (Moderate thinness)	";
  } else if (result > 17 && result < 18.4) {
    return "Underweight (Mild thinness)";
  } else if (result > 18.5 && result < 24.9) {
    return "Normal range";
  } else {
    return "Overweight (Pre-obese)";
  }
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  // here we can not use error.message
  if (error instanceof Error) {
    // the type is narrowed and we can refer to error.message
    errorMessage += error.message;
  }
  // here we can not use error.message

  console.log(errorMessage);
}
