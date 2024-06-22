import Image from "next/image";

export default function TubeLines() {
  return (
    <div className="w-full bg-darkerBg">
      <Image
        width="1080"
        height="980"
        src="/images/desktop.png"
        alt="intersecting coloured lines, reminiscent of tube lines"
        className="w-full h-40 pb-2"
        fetchPriority="low"
      />
    </div>
  );
}
