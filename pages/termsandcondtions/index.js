// import TermsAndConditions from "@/components/TermsAndConditions";
import dynamic from "next/dynamic";
import React from "react";

const TermsAndConditions = dynamic(
  () => import("@/components/TermsAndConditions"),
  {
    ssr: false,
  }
);

const TermsAndConditionsPage = () => {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
};

export default TermsAndConditionsPage;
