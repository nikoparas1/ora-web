import DownloadButtons from "./components/DownloadButtons";
import NavMenu from "./components/NavMenu";
import Image from "next/image";
import Swoosh from "./components/Swoosh";

export default function Home() {
  return (
    <div className="container">
      <NavMenu />
      <Swoosh />
      <div className="content">
        <div className="content-left">
          <h1 className="title">Log your Meals Faster than Ever</h1>
          <p className="subtitle">
            Use natural language to log your meals in seconds. Get on-the-fly
            nutrition recommendations.
          </p>
        </div>
        <div className="content-middle fade-up">
          <Image
            className=""
            src="/assets/images/ChatInterfaceDark.svg"
            alt="Chat Interface"
            width={400}
            height={800}
          />
        </div>
        <div className="content-right">
          <DownloadButtons />
        </div>
      </div>
    </div>
  );
}
