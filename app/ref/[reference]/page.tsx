import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RefVisitTracker from "../../components/ref-visit-tracker";
import Home from "../../page";

type RefPageProps = {
  params: Promise<{ reference: string }>;
};

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RefPage({ params }: RefPageProps) {
  const { reference: encodedReference } = await params;
  const reference = decodeURIComponent(encodedReference).trim().toLowerCase();

  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(reference)) {
    notFound();
  }

  return (
    <>
      <RefVisitTracker reference={reference} />
      <Home />
    </>
  );
}
