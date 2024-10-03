"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-amber-400 w-full lg:w-auto text-lg p-3 text-center font-bold cursor-pointer rounded"
    >
      {children}
    </button>
  );
}
