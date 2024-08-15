import Image from "next/image";
export default function Footer(){
    return(
              <footer className="bg-[#293857] h-[150px] flex items-center justify-center flex-col text-white">
        <div className="flex gap-4 items-center mb-5">
          <Image
            src="images/social.svg"
            alt="social icon"
            height="40"
            width="40"
          />
          <Image
            src="images/social(1).svg"
            alt="social icon"
            height="40"
            width="40"
          />
          <Image
            src="images/social(2).svg"
            alt="social icon"
            height="40"
            width="40"
          />
          <Image
            src="images/social(3).svg"
            alt="social icon"
            height="40"
            width="40"
          />
        </div>
        <p>© 2024 Copyright. ChurchWebflow.com</p>
      </footer>
    )
}