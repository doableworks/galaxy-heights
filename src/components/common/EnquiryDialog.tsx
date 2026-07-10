"use client";

import React from "react";

import UnifiedEnquiryDialog from "@/components/common/UnifiedEnquiryDialog";

interface EnquiryDialogProps {
  children: React.ReactNode;
  fromWhere?: string;
  title?: string;
}

function EnquiryDialog({
  children,
  fromWhere = "general",
  title,
}: EnquiryDialogProps) {
  return (
    <UnifiedEnquiryDialog
      title={title || "Get In Touch"}
      purpose={fromWhere}
    >
      {children}
    </UnifiedEnquiryDialog>
  );
}

export default EnquiryDialog;
