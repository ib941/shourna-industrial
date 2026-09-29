import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/ServiceDetailView";

const VALID_SLUGS = [
  "facade-cleaning",
  "industrial",
  "facade-maintenance",
  "agriculture",
];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <ServiceDetailView slug={slug} />;
}
