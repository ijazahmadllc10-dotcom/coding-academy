import { notFound } from "next/navigation";
import { lessons } from "../../lessons";
import LessonClient from "../../LessonClient";

export function generateStaticParams() {
  return Object.keys(lessons).map((lang) => ({ lang }));
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const lesson = lessons[lang];
  if (!lesson) notFound();
  return <LessonClient lesson={lesson} />;
}