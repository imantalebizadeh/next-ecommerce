import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { ShirtIcon } from "lucide-react";

type LogoProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <Link href="/">
      <div className={cn("flex items-center gap-3", className)} {...props}>
        <div className="grid size-9 place-items-center rounded-lg bg-primary">
          <ShirtIcon className="size-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold">نکست شاپ</span>
      </div>
    </Link>
  );
}
