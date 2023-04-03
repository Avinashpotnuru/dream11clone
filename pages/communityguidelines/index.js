// import CommunityGuideLines from "@/components/CommunityGuidelines";
import dynamic from "next/dynamic";

const CommunityGuideLines = dynamic(
  () => import("@/components/CommunityGuidelines"),
  {
    ssr: false,
  }
);

const CommunityGuideLinesPage = () => {
  return (
    <div>
      <CommunityGuideLines />
    </div>
  );
};

export default CommunityGuideLinesPage;
