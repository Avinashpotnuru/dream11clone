import CricketApp from "@/components/CricketApp";
import { useRouter } from "next/router";

const CricketAppPage = () => {
  const router = useRouter();
  return (
    <div>
      <CricketApp />
    </div>
  );
};

export default CricketAppPage;
