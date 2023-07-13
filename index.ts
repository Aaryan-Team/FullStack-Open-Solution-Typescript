import express from "express";
import { calculateBmi, parseBmiArguments } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;

  if (!weight || !height) {
    res.status(400);
    res.send({ error: "missing parameter height or weight" });
  } else {
    try {
      const { heightInCm, weightInKg } = parseBmiArguments(
        Number(height),
        Number(weight)
      );
      const bmi = calculateBmi(heightInCm, weightInKg);
      res.send({
        weight: weightInKg,
        height: heightInCm,
        bmi: bmi,
      });
    } catch (error: unknown) {
      res.status(400);
      let errorMessage = "Something went wrong: ";

      if (error instanceof Error) {
        errorMessage += error.message;
      }
      res.send({ error: errorMessage });
    }
  }
});

app.post("/exercises", (req, res) => {
  const dailyEx: Array<number> = req.body.daily_exercises;
  const target: number = req.body.target;

  if (!dailyEx || isNaN(Number(target))) {
    return res.status(400).send({ error: "parameters missing" });
  }

  const result = calculateExercises(dailyEx, target);
  return res.send({ result });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
