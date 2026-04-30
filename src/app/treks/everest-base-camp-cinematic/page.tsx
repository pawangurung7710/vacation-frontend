import React from "react";
import EbcCinematicView from "@/components/custom/EbcCinematicView";
import { getTrekBySlug } from "@/lib/getTrekData";
import { notFound } from "next/navigation";

export default async function EverestBaseCampCinematicPage() {
  // We reuse the existing ebc-data.json for our data foundation
  const trekData = await getTrekBySlug("everest-base-camp");

  if (!trekData) {
    notFound();
  }

  return <EbcCinematicView trekData={trekData} />;
}
