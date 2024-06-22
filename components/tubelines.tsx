import Image from "next/image";

export default function TubeLines() {
  return (
    <div className="w-full bg-darkerBg">
      <Image
        layout="responsive"
        width="200"
        height="100"
        src="/images/desktop.png"
        alt="desktop"
        className="w-full h-40 object-cover pb-2"
        fetchPriority="low"
      />
    </div>
  );
}
