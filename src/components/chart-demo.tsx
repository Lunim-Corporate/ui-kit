"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 239 },
  { name: "Jul", value: 349 },
];

export function ChartDemo() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Value"
        }
      }}
      className="h-[200px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={{ 
              fill: "#3b82f6", 
              stroke: "#1e40af", 
              strokeWidth: 2, 
              r: 4 
            }}
            activeDot={{ 
              fill: "#3b82f6", 
              stroke: "#1e40af", 
              strokeWidth: 2, 
              r: 6 
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
