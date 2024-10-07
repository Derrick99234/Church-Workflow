import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
              <footer className="bg-[#293857] h-[150px] flex items-center justify-center flex-col text-white">
        <div className="flex gap-4 items-center mb-5">
          <Link href="https://www.facebook.com/profile.php?id=61565977402117&mibextid=ZbWKwL" target="_blank">
            <Image
              src="/images/Facebook.png"
              alt="social icon"
              height="40"
              width="40"
              className="scale-150"
            />
          </Link>
        <Link href="https://www.instagram.com/sleekyprogrammers?igsh=c2x4cTU1eGY5aGdj" target="_blank">
          <Image
            src="/images/_Instagram.png"
            alt="social icon"
            height="40"
            width="40"
            className="scale-150"
          />
        </Link>
          <Link href="https://www.linkedin.com/company/sleeky-programmers-limited/" target="_blank">
            <Image
              src="/images/skill-icons_linkedin.png"
              alt="social icon"
              height="40"
              width="40"
              className="scale-150"
            />
          </Link>
          <Link href="https://x.com/sleekydevs?s=09" target="_blank">
          <Image
            src="/images/_Figma.png"
            alt="social icon"
            height="40"
            width="40"
            className="scale-150"
          />
        </Link>
        </div>
        <p>© 2024 Copyright. ChurchWebflow.com</p>
      </footer>
    )
}