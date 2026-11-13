import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[90svh] flex-col justify-center pt-[4.5rem]">
      <Eyebrow className="text-stone">404</Eyebrow>
      <h1 className="display mt-8 text-6xl md:text-8xl">
        This page isn&rsquo;t <em className="text-ember">here.</em>
      </h1>
      <p className="mt-8 max-w-md leading-relaxed text-stone">
        The page may have moved, or the link may be out of date.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
