"use client";

import { Combobox } from "@/components/ui/combobox";
import { useState } from "react";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "wordpress", label: "WordPress" },
  { value: "express.js", label: "Express.js" },
];

export function ComboboxDemo() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <Combobox
      options={frameworks}
      value={selectedValue}
      onValueChange={setSelectedValue}
      placeholder="Select framework..."
      searchPlaceholder="Search frameworks..."
    />
  );
}
