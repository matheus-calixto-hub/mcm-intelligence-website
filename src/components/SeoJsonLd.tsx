type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Injeta um ou mais blocos JSON-LD sem markup visível. */
export default function SeoJsonLd({ data }: Props) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
