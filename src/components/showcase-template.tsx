export function ShowcaseTemplate({
  id,
  name,
  description,
  technologies,
  children,
  reverse = false,
}: {
  id: string;
  name?: string;
  description?: string;
  technologies?: string[];
  children?: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-[70vh] w-full flex-col items-start justify-center gap-0 space-y-4 px-4 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:gap-x-32 sm:space-y-0 sm:px-0`}
    >
      <div className="w-full space-y-4 px-4 sm:w-96 sm:px-0">
        <div className="space-y-6">
          <h2>{name}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-2">
          {technologies?.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-accent p-1.5 px-2 text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex h-full min-h-96 w-full items-center justify-center rounded-lg border">
        {children}
      </div>
    </section>
  );
}
