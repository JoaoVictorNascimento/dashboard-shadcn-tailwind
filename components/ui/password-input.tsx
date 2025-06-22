"use client"

import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Input } from "./input"
import { cn } from "@/lib/utils"
import { useState } from "react";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
        <Input type={showPassword ? "text" : "password"} className={cn(className, "pr-10")} {...props} />
        <span className="absolute top-[7px] right-1 cursor-pointer select-none">
            {showPassword ? (
                <EyeIcon onClick={() => setShowPassword(false)} />
            ) : (
                <EyeOffIcon onClick={() => setShowPassword(true)} />
            )}
        </span>
    </div>
  )
}

export { PasswordInput }