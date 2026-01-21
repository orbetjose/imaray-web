import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        <div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/logo-imaray.png"
            alt="Imaray Ulloa Logo"
            width={200}
            height={200}
            className=""
          />
        </div>
        <div className="flex">
          <a href="">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/ig-ico.png"
              alt="Instagram Icon"
              width={100}
              height={100}
              className=""
            />
          </a>
          <a href="">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/fb-ico.png"
              alt="Facebook Icon"
              width={100}
              height={100}
              className=""
            />
          </a>
          <a href="">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt-ico.png"
              alt="YouTube Icon"
              width={100}
              height={100}
              className=""
            />
          </a>
          <a href="">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/tiktok-ico.png"
              alt="TikTok Icon"
              width={100}
              height={100}
              className=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
