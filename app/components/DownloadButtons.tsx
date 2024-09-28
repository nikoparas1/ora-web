import Image from "next/image";
import Link from "next/link";

export default function DownloadButton() {
  return (
    <div className="download-buttons-container">
      <Link
        href={process.env.IOS_APP_ID || ""}
        target="_blank"

      >
        <Image
          src="/assets/images/App_Store_Download_Dark.svg"
          alt="App Store Download"
          width={100}
          height={100}
          className="download-button"
        />
      </Link>
      <Link
        href={process.env.ANDROID_APP_ID || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/Google_Play_Store_Download.png"
          alt="Google Play Store Download"
          width={100}
          height={100}
          className="download-button"
        />
      </Link>
    </div>
  );
}
