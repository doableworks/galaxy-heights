"use client";

import Image from "next/image";

import UnifiedEnquiryDialog from "@/components/common/UnifiedEnquiryDialog";
import { Button } from "@/components/ui/button";

interface FloorPlanCardProps {
  title: string;
  imageUrl?: string;
}

function FloorPlanCard({ title, imageUrl }: FloorPlanCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-[#FFFCF3] p-4 shadow-md">
      <div className="relative w-full overflow-hidden lg:h-[50vh]">
        <Image
          src={imageUrl || "/assets/floorPlan.png"}
          alt={title}
          width={1200}
          height={900}
          className="h-auto w-full object-cover blur-sm"
        />
      </div>

      <div className="z-30 -mt-4 flex flex-1 flex-col lg:-mt-0">
        <UnifiedEnquiryDialog
          title="Unlock Floor Plan"
          purpose={`Floor Plan Enquiry for ${title}`}
        >
          <Button className="mt-auto w-full bg-[var(--dark-blue)] px-6 py-12 text-2xl font-semibold text-[var(--gold-colour)] hover:opacity-90 lg:w-full lg:py-12 lg:text-3xl">
            {title}
          </Button>
        </UnifiedEnquiryDialog>
      </div>
    </article>
  );
}

export default FloorPlanCard;
