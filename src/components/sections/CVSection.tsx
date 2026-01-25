import MarkdownCV from "@/components/MarkdownCV";

const CVSection = () => {
  return (
    <section id="cv" className="flex w-full max-w-5xl flex-col items-center py-24">
      <p className="text-human">My Professional Record</p>
      <h2 className="mt-2 mb-16 text-4xl font-bold text-foreground text-center">Curriculum Vitae</h2>
      <MarkdownCV />
    </section>
  );
};

export default CVSection;
