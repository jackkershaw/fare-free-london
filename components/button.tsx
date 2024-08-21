interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="w-full rounded-lg bg-link px-4 py-3 font-medium shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-opacity-50 flex items-center justify-center lg:px-3 lg:py-1.5">
      <p className="text-white">{text}</p>
    </button>
  );
}
