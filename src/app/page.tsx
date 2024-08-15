import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r pt-24 py-10 from-[#293857] to-[#00CFFF] flex justify-around items-center  px-10">
        <Navbar />
        <div className="w-1/2">
          <h2 className="text-6xl text-white font-semibold leading-snug">
            All Your Church Workflow{" "}
            <span className="text-[#00CFFF]">processes</span> in one place
          </h2>
          <p className="my-3 text-white">
            Simplify and Optimize Your Church&apos;s Day-to-Day Operations with
            a Robust System That Handles Everything.
          </p>
          <button className="text-white py-3 px-4 h-full rounded-md bg-[#00CFFF] text-sm">
            Request a Demo
          </button>
        </div>
        <Image
          src={"/images/phone.svg"}
          alt="church logo"
          height={60}
          width={150}
          className="w-[40%]"
        />
      </section>
      <section className="flex justify-around items-center py-10 px-20 gap-4">
        <div className="max-w-[45%] w-full">
          <h2 className="text-3xl font-semibold mb-4">
            Everything Your Church Needs To Stay Organized and{" "}
            <span className="text-[#00CFFF]">Connected</span>
          </h2>
          <div className="flex items-center p-4 border rounded-md text-sm">
            <p>
              <strong>Comprehensive Reporting:</strong> Effortlessly generate
              and share detailed reports, keeping your leadership informed and
              enabling data-driven decisions. Track attendance, finances, and
              other key metrics with customizable reports tailored to your
              church.
            </p>
            <Image
              src={"/images/box1.svg"}
              alt="church logo"
              height={60}
              width={150}
            />
          </div>
          <div className="flex items-center p-4 border rounded-md text-sm mt-8 w-[80%]">
            <p>
              <strong>Seamless Event Documentation:</strong> Plan, schedule, and
              document all church events in one place, ensuring every detail is
              tracked and nothing is overlooked.
            </p>
            <Image
              src={"/images/box3.svg"}
              alt="church logo"
              height={60}
              width={150}
            />
          </div>
        </div>
        <div className="max-w-[45%] w-full">
          <div className="flex items-center p-4 border rounded-md text-sm mb-14 ml-auto w-[70%]">
            <p>
              <strong>Efficient Member Onboarding:</strong> Simplify welcoming
              new members by guiding them through every onboarding step, from
              gathering information to integrating.
            </p>
            <Image
              src={"/images/box2.svg"}
              alt="church logo"
              height={60}
              width={120}
            />
          </div>
          <div className="flex items-center p-4 border rounded-md text-sm">
            <p>
              <strong>Online Giving and Donations:</strong> Facilitate online
              giving with secure, easy-to-use tools. Track donations, generate
              reports, and provide your congregation with multiple ways to
              support the church financially.
            </p>
            <Image
              src={"/images/box4.svg"}
              alt="church logo"
              height={60}
              width={150}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-10 py-20">
        <form action="" className="bg-[#293857] p-8 max-w-md">
          <label className="text-white mb-2 block mt-3" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full h-12 outline-none rounded-md border py-1 px-3"
          />
          <label className="text-white mb-2 block mt-3" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="w-full h-12 outline-none rounded-md border py-1 px-3"
          />
          <label className="text-white mb-2 block mt-3" htmlFor="church">
            Church (Optional)
          </label>
          <input
            type="text"
            id="church"
            placeholder="Enter your church's name"
            className="w-full h-12 outline-none rounded-md border py-1 px-3 mb-4"
          />
          <button className="text-white py-3 px-4 text-center rounded-md bg-[#00CFFF] text-sm">
            Join the Waiting List
          </button>
        </form>
        <div className="max-w-md">
          <h2 className="font-bold text-3xl ">
            Join the <span className="text-[#00CFFF]">waiting List</span> for
            Early Access
          </h2>
          <p className="my-4 font-medium">
            Be among the first to experience the full power of Church Workflow.
            Sign up now and get priority access when we launch!
          </p>
          <p className="text-sm">
            Church Workflow is coming soon, and we want you to be a part of it.
            By joining the waiting list, you&apos;ll receive exclusive updates,
            early access to new features, and the opportunity to shape the
            future of church management. Don&apos;t miss out on the chance to
            streamline your church&apos;s operations from day one.
          </p>
        </div>
      </section>
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
