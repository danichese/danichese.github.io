import MarkdownCV from "@/components/MarkdownCV";

const CVSection = () => {
  return (
    <section id="cv" className="flex w-full max-w-6xl flex-col py-24">
      <p className="section-kicker">Professional Record</p>
      <h2 className="mt-2 mb-12 text-4xl font-semibold text-foreground md:text-5xl">Curriculum Vitae</h2>
      <MarkdownCV />
    </section>
  );
};

export default CVSection;
