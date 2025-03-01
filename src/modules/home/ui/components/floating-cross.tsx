import { cn } from "@/lib/utils";

interface FloatingCrossProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function FloatingCross({
  position = "top-left",
}: FloatingCrossProps) {
  const boxClass =
    "absolute z-20 aspect-square size-3 md:size-3 border-[#7A7A7A]";

  const positions = {
    "top-left": {
      box1: "-left-px -top-px border-l border-t",
      box2: "-left-2 -top-2 border-b border-r md:-left-3 md:-top-3",
    },
    "top-right": {
      box1: "-right-px -top-px border-r border-t",
      box2: "-right-2 -top-2 border-b border-l md:-right-3 md:-top-3",
    },
    "bottom-left": {
      box1: "-left-px -bottom-px border-l border-b",
      box2: "-left-2 -bottom-2 border-t border-r md:-left-3 md:-bottom-3",
    },
    "bottom-right": {
      box1: "-right-px -bottom-px border-r border-b",
      box2: "-right-2 -bottom-2 border-t border-l md:-right-3 md:-bottom-3",
    },
  };

  return (
    <>
      <div
        aria-hidden={true}
        className={cn(boxClass, positions[position].box1)}
      />
      <div
        aria-hidden={true}
        className={cn(boxClass, positions[position].box2)}
      />
    </>
  );
}
