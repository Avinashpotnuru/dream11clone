import FantasyPages from "@/components/FantasyPages";
import { pages } from "@/Data";
import { useRouter } from "next/router";
import { useEffect } from "react";

function SportInfoPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const pageToRender = {
    cricket: pages?.cricketPage,
    "crypto-trading": pages?.cryptoTradingPage,
    "commodity-trading": pages?.commodityTradingPage,
    baseball: pages?.baseBallPage,
    racing: pages?.racingPage,
    soccer: pages?.soccerPage,
    kickboxing: pages?.kickBoxingPage,
    forex: pages?.forexPage,
    kabbadi: pages?.kabaddiPage,
    football: pages?.footBallPage,
    basket: pages?.basketBallPage,
    "equity-stocks": pages?.equityStocksPage,
  };

  useEffect(() => {
    if (!id) return;
    if (!pageToRender[id]) {
      router.push("/");
    }
  }, [id]);

  if (!pageToRender[id]) return null;

  // return null;

  return (
    <div>
      <FantasyPages data={pageToRender[id]} pageId={id} />
    </div>
  );
}

export default SportInfoPage;
