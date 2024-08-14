import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-r min-h-screen from-[#293857] to-[#00CFFF] flex justify-around items-center  px-10">
        <Navbar />
        <div className="w-1/2">
          <h2 className="text-6xl text-white font-semibold leading-snug">
            All Your Church Workflow{" "}
            <span className="text-[#00CFFF]">processes</span> in one place
          </h2>
          <p className="my-3 text-white">
            Simplify and Optimize Your Church's Day-to-Day Operations with a Robust System That Handles Everything.
          </p>
          <button className="text-white py-3 px-4 h-full rounded-md bg-[#00CFFF] text-sm">
            Join the waitlist
          </button>
        </div>
        <Image
          src={"/images/phone.png"}
          alt="church logo"
          height={60}
          width={150}
          className="w-[40%]"
        />
      </div>
      <Image
        src={"/images/Ellipse 1.png"}
        alt="church logo"
        height={60}
        width={150}
        className="absolute top-0 left-0 w-11"
      />
      <Image
        src={"/images/Ellipse 3.png"}
        alt="church logo"
        height={60}
        width={150}
        className="absolute top-0 right-0 w-11"
      />
    </main>
  );
}
