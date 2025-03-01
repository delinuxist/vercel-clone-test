import FloatingCross from "@/modules/home/ui/components/floating-cross";

export default function AnalyticFeature() {
  return (
    <section className='relative border p-12'>
      <FloatingCross position='top-right' />
      <FloatingCross position='bottom-left' />
      <div>Analytics</div>
    </section>
  );
}
