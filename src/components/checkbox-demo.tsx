"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="newsletter" 
          defaultChecked
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="disabled" 
          disabled
        />
        <Label htmlFor="disabled" className="text-muted-foreground">Disabled checkbox</Label>
      </div>
      
      {checked && (
        <p className="text-sm text-muted-foreground">
          ✅ Checkbox is working! You accepted the terms.
        </p>
      )}
    </div>
  );
}
