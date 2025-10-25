"use client";

import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";

export function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <DatePicker
      value={selectedDate}
      onValueChange={setSelectedDate}
      placeholder="Pick a date"
    />
  );
}
