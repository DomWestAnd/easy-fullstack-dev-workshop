import { type ZodSchema } from "zod";

export default async function genericActionHandler<Data, Response>(
  schema: ZodSchema<Data>,
  formData: FormData,
  action: (data: Data) => Promise<Response>,
) {
  const data = {} as Record<string, string | object>;
  formData.forEach((value, key) => (data[key] = value.valueOf()));
  const validation = schema.safeParse(data);

  if (validation.success) {
    return await action(validation.data);
  } else {
    return validation.error.flatten().fieldErrors;
  }
}
