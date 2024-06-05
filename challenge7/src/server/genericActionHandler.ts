import { type ZodSchema } from "zod";

export default async function genericActionHandler<Data, Response>(
  schema: ZodSchema<Data>,
  formData: FormData,
  action: (data: Data) => Promise<Response>,
) {
  const data = {} as Record<string, string>;
  formData.forEach((value, key) => (data[key] = value.valueOf() as string));
  const validation = schema.safeParse(data);

  if (validation.success) {
    return await action(validation.data);
  } else {
    return validation.error.flatten().fieldErrors;
  }
}
