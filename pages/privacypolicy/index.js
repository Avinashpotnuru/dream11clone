// import PrivacyPolicy from "@/components/PrivacyPolicy";
import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("@/components/PrivacyPolicy"), {
  ssr: false,
});

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
