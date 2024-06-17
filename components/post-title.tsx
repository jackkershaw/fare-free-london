export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold font-sans text-left lg:text-3xl text-customRed-700 lg:leading-tight capitalize"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
