import { z } from "zod";

const addRecipeSchema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  description: z.string().min(1, "Description cannot be blank"),
  ingredients: z.string().min(1, "Ingredients cannot be blank"),
  instructions: z.string().min(1, "Instructions cannot be blank"),
});

export default addRecipeSchema;
