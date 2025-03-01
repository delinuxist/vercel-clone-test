import AnalyticFeature from "@/modules/home/ui/sections/features/analytics";
import CoreFeature from "@/modules/home/ui/sections/features/core-feature";
import ExtraFeature from "@/modules/home/ui/sections/features/extra-feature";

export default function Features() {
  return (
    <div className='w-full'>
      <CoreFeature />
      <AnalyticFeature />
      <ExtraFeature />
    </div>
  );
}
