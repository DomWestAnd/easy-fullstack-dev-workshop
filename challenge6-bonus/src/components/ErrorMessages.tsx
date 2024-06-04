import { type ZodIssue } from "zod";

type ErrorMessagesProps = {
  fieldName: string;
  errors: ZodIssue[];
};

export default function ErrorMessages(props: ErrorMessagesProps) {
  const fieldErrors = getFieldErrors(props);
  if (fieldErrors.length === 0) return null;
  const text = fieldErrors.join(", ");
  return <div className="text-red-600">{text}</div>;
}

function getFieldErrors({ fieldName, errors }: ErrorMessagesProps) {
  return errors
    .filter((item) => item.path.includes(fieldName))
    .map((item) => item.message);
}
