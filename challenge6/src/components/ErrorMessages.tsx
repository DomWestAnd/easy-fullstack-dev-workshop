type ErrorMessagesProps = {
  errors?: string[];
};

export default function ErrorMessages({ errors }: ErrorMessagesProps) {
  if (!errors || errors.length === 0) return null;
  const text = errors.join(", ");
  return <div className="text-red-600">{text}</div>;
}
