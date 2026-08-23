import Link from "next/link";
import { careerPositions } from "../../config/careerData";
import MotionEffect from "../motion/MotionEffect";
import PageHeroSection from "../shared/PageHeroSection";
import SectionLayout from "../shared/SectionLayout";

const OpenPositions = () => {
  return (
    <div>
      <div className="mt-0 md:mt-[130px]">
        <PageHeroSection
          heading={"Open Positions"}
          subheading={"Find Your Fit at Apex Advisor Group"}
          paragraphOne={
            "Explore our current openings in the Tampa Bay area and discover where your skills and ambitions could take you."
          }
          paragraphTwo={""}
          image={"/career.jpeg"}
          alt={"Apex Advisor Group team"}
          width={1000}
          height={657}
        />
      </div>

      <SectionLayout img={""} bg={""}>
        {careerPositions.length === 0 ? (
          <MotionEffect effect={"fade-up"} duration={"1200"} delay={0}>
            <div className="text-center max-w-[560px] mx-auto py-10">
              <h2 className="text-2xl font-semibold text-[#1B2639] mb-3">
                No open positions right now
              </h2>
              <p className="text-base text-[#1B2639]/70 mb-6">
                We’re not actively hiring at the moment, but we’re always glad
                to hear from people who want to grow with us. Send us a note and
                we’ll keep you in mind for what’s next.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#0E758B] text-white font-medium text-base px-6 py-3 rounded-md hover:bg-[#085c69] transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </MotionEffect>
        ) : (
          <div className="flex flex-col gap-10">
            {careerPositions.map((position, i) => (
              <MotionEffect
                key={position.slug}
                effect={"fade-up"}
                duration={String(1000 + i * 200)}
                delay={0}
              >
                <div className="bg-white border border-[#1B2639]/10 shadow-sm p-6 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center bg-[#0E758B] text-white text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                      {position.status}
                    </span>
                    <span className="text-[#1B2639]/60 text-sm font-medium">
                      {position.type}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-[32px] font-bold text-[#1B2639] mb-5 leading-tight">
                    {position.title}
                  </h2>

                  <div className="mb-6 bg-[#EEF6F8] border-l-4 border-[#0E758B] p-4">
                    <h3 className="font-semibold text-[#1B2639] mb-1">
                      Timing
                    </h3>
                    <p className="text-sm text-[#1B2639]/80">
                      {position.timing}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg text-[#1B2639] mb-2">
                      About Us
                    </h3>
                    <p className="text-base text-[#1B2639]/80">
                      {position.aboutUs}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg text-[#1B2639] mb-2">
                      What You’ll Do &amp; Learn
                    </h3>
                    <ul className="space-y-2">
                      {position.whatYoullDo.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-base text-[#1B2639]/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E758B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg text-[#1B2639] mb-2">
                      Who Should Apply
                    </h3>
                    <p className="text-base text-[#1B2639]/80">
                      {position.whoShouldApply}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-lg text-[#1B2639] mb-2">
                      What’s in It for You
                    </h3>
                    <ul className="space-y-2">
                      {position.whatsInItForYou.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-base text-[#1B2639]/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E758B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-base font-medium text-[#1B2639] mb-8 italic">
                    {position.closing}
                  </p>

                  <Link
                    href={`/career/apply?position=${encodeURIComponent(
                      position.title,
                    )}`}
                    className="inline-flex items-center justify-center bg-[#0E758B] text-white font-semibold text-base px-8 py-3.5 rounded-md hover:bg-[#085c69] transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </MotionEffect>
            ))}
          </div>
        )}
      </SectionLayout>
    </div>
  );
};

export default OpenPositions;
