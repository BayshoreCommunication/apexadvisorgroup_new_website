"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MotionEffect from "../motion/MotionEffect";
import SecondaryButton from "../shared/SecondaryButton";
import SectionLayout from "../shared/SectionLayout";

const values = [
  {
    title: "Open Door, Always",
    body: "Direct, everyday access to mentors and executives — not once-a-quarter check-ins.",
  },
  {
    title: "Real Mentorship",
    body: "Learn from professionals with 20+ years in the industry, not layers removed from them.",
  },
  {
    title: "Local Roots",
    body: "Proud to serve the Tampa Bay community we call home.",
  },
];

const stages = [
  {
    num: "STAGE 01",
    title: "Internships",
    body: "Get hands-on experience most interns only read about. You’ll work real client engagements alongside experienced staff and partners.",
    cta: "Explore Internships",
  },
  {
    num: "STAGE 02",
    title: "Early Career",
    body: "Structured mentorship and increasing client responsibility as you’re ready for it — designed to accelerate you.",
    cta: "Explore Early Career Roles",
  },
  {
    num: "STAGE 03",
    title: "Experienced Professionals",
    body: "More autonomy, more client connection, less bureaucracy. Your experience is immediately valued — and helps shape how we grow.",
    cta: "Explore Experienced Roles",
  },
];

const perks = [
  {
    glyph: "⟡",
    title: "Open Door Policy",
    body: "Every team member has direct, everyday access to leadership — not just at review time.",
  },
  {
    glyph: "20+",
    title: "Seasoned Mentors",
    body: "Learn the craft from professionals who’ve worked at the highest level for decades.",
  },
  {
    glyph: "TB",
    title: "Tampa Bay Roots",
    body: "We’re invested in this community, and so are our people.",
  },
  {
    glyph: "↗",
    title: "Entrepreneurial Mindset",
    body: "We give our team the freedom to innovate, take initiative, and make an impact.",
  },
];

const heroWords = "Build Your Career. Own Your Growth.".split(" ");

const CareerList = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = { hidden: { opacity: 0, y: 10 }, visible };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#11869912] mt-[62px] md:mt-[130px]">
        <SectionLayout img={""} bg={""} py="py-[1rem] md:py-[2.25rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
            className="lg:flex gap-10 items-center"
          >
            <div className="w-full lg:max-w-[55%] text-center lg:text-left">
              <p className="text-[#0E758B] font-semibold tracking-wide uppercase text-sm mb-2">
                Careers at Apex Advisor Group
              </p>
              <h1 className="text-[36px] md:text-[48px] font-bold leading-tight mb-3 text-[#1B2639]">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i / 10 }}
                    className={`inline-block ${
                      word === "Growth." ? "text-[#0E758B]" : ""
                    }`}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-base max-w-[480px] mx-auto lg:mx-0 mb-5"
              >
                Work on meaningful tax and accounting projects in an environment
                that values independence, trust, and professional growth.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <SecondaryButton
                  title={"View Open Roles"}
                  link={"/career/open-positions"}
                  style={"bg-[#0E758B] text-white"}
                  radius={"sm"}
                  variant={"solid"}
                  size={"md"}
                  selectValue={undefined}
                />
                <Link
                  href="#culture"
                  className="flex items-center font-medium text-[#1B2639] border-b-2 border-[#1B2639] pb-1 hover:border-[#0E758B] hover:text-[#0E758B] transition duration-300"
                >
                  Learn About Our Culture
                </Link>
              </motion.div>
            </div>

            <div className="w-full hidden lg:block mt-10 lg:mt-0">
              <motion.div variants={itemVariants}>
                <div className="relative bg-[#1B2639] px-8 pt-7 pb-5 min-h-[300px] overflow-hidden">
                  <div className="text-[11px] tracking-[0.12em] uppercase text-white/50 mb-1.5">
                    Tampa Bay · Est. 2019
                  </div>
                  <div className="text-lg text-white mb-4">
                    Seven years of growing together
                  </div>
                  <svg
                    viewBox="0 0 460 260"
                    fill="none"
                    className="w-full h-auto"
                  >
                    <motion.path
                      d="M20 220 C 100 220, 140 150, 200 140 S 300 60, 440 30"
                      stroke="#0E758B"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
                    />

                    <motion.g
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <circle cx="20" cy="220" r="4" fill="#F6F8F9" />
                      <text
                        x="32"
                        y="216"
                        fontSize="22"
                        fontWeight={600}
                        fill="#4FA8BC"
                      >
                        7
                      </text>
                      <text
                        x="32"
                        y="234"
                        fontSize="11"
                        letterSpacing="0.05em"
                        fill="rgba(247,244,238,0.85)"
                      >
                        YEARS IN TAMPA BAY
                      </text>
                    </motion.g>

                    <motion.g
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.35 }}
                    >
                      <circle cx="200" cy="140" r="4" fill="#F6F8F9" />
                      <text
                        x="212"
                        y="136"
                        fontSize="22"
                        fontWeight={600}
                        fill="#4FA8BC"
                      >
                        20+
                      </text>
                      <text
                        x="212"
                        y="154"
                        fontSize="11"
                        letterSpacing="0.05em"
                        fill="rgba(247,244,238,0.85)"
                      >
                        OUR MENTORS&apos; YEARS EXPERIENCE
                      </text>
                    </motion.g>

                    <motion.g
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 2 }}
                    >
                      <circle cx="440" cy="30" r="4" fill="#0E758B" />
                      <text
                        x="330"
                        y="18"
                        fontSize="24"
                        fontWeight={700}
                        fill="#4FA8BC"
                      >
                        100%
                      </text>
                      <text
                        x="330"
                        y="55"
                        fontSize="11"
                        letterSpacing="0.05em"
                        fill="rgba(247,244,238,0.85)"
                      >
                        PROMOTED FROM WITHIN
                      </text>
                    </motion.g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </SectionLayout>
      </section>

      {/* Who we are */}
      <SectionLayout img={""} bg={""}>
        <MotionEffect effect={"fade-up"} duration={"1200"} delay={0}>
          <div
            id="culture"
            className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 scroll-mt-32"
          >
            <div>
              <span className="text-[#0E758B] font-semibold tracking-wide uppercase text-sm">
                Who We Are
              </span>
              <p className="text-2xl md:text-[28px] font-semibold text-[#1B2639] mt-3 mb-5 leading-snug">
                Apex Advisor Group is a boutique tax and accounting firm serving
                the Tampa Bay area, built on a simple idea: exceptional work
                happens when people are known, not just managed.
              </p>
              <p className="text-base max-w-[56ch]">
                Because we’ve stayed intentionally small, every person on our
                team has an open door to leadership. Our associates work
                directly alongside mentors with 20+ years in the industry — not
                from a distance, but side by side. It’s the kind of access and
                hands-on guidance you simply don’t get at a large firm, paired
                with the caliber of work you’d expect from one.
              </p>
            </div>
            <div className="flex flex-col">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`py-5 border-b border-[#1B2639]/10 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <h3 className="font-semibold text-lg text-[#1B2639] mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#1B2639]/70">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionEffect>
      </SectionLayout>

      {/* Career path */}
      <section
        id="roles"
        className="bg-[#1B2639] text-white overflow-hidden scroll-mt-24"
      >
        <SectionLayout img={""} bg={""}>
          <MotionEffect effect={"fade-up"} duration={"1200"} delay={0}>
            <div className="max-w-[640px] mb-14">
              <span className="text-[#8FC9D6] font-semibold tracking-wide uppercase text-sm">
                Find Where You Fit
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold mt-3 mb-4">
                Wherever you are, there’s a path here.
              </h2>
            </div>
          </MotionEffect>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {stages.map((stage, i) => (
              <MotionEffect
                key={stage.title}
                effect={"fade-up"}
                duration={String(1000 + i * 300)}
                delay={0}
              >
                <div className="group border border-white/15 bg-white/[0.04] p-8 h-full transition duration-500 hover:-translate-y-1.5 hover:border-[#0E758B] hover:bg-white/[0.07]">
                  <span className="font-medium text-xs tracking-widest text-[#8FC9D6]">
                    {stage.num}
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-6">{stage.body}</p>
                  <Link
                    href="/career/open-positions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#8FC9D6]"
                  >
                    {stage.cta}
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </MotionEffect>
            ))}
          </div>
        </SectionLayout>
      </section>

      {/* Why our people stay */}
      <SectionLayout img={""} bg={""}>
        <MotionEffect effect={"fade-up"} duration={"1200"} delay={0}>
          <div className="max-w-[600px] mb-12">
            <span className="text-[#0E758B] font-semibold tracking-wide uppercase text-sm">
              Why Our People Stay
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1B2639] mt-3">
              The details that make the difference.
            </h2>
          </div>
        </MotionEffect>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1B2639]/10 border border-[#1B2639]/10">
          {perks.map((perk, i) => (
            <MotionEffect
              key={perk.title}
              effect={"fade-up"}
              duration={String(900 + i * 200)}
              delay={0}
            >
              <div className="bg-white p-8 h-full">
                <div className="w-9 h-9 rounded-full border border-[#0E758B] text-[#0E758B] flex items-center justify-center font-semibold text-sm mb-5">
                  {perk.glyph}
                </div>
                <h3 className="font-semibold text-lg text-[#1B2639] mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-[#1B2639]/70">{perk.body}</p>
              </div>
            </MotionEffect>
          ))}
        </div>
      </SectionLayout>

      {/* Closing CTA */}
      <section className="bg-[#EEF6F8]">
        <SectionLayout img={""} bg={""}>
          <MotionEffect effect={"zoom-in"} duration={"1200"} delay={0}>
            <div className="text-center max-w-[560px] mx-auto py-6">
              <div className="w-0 h-0 mx-auto mb-6 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[22px] border-b-[#0E758B]" />
              <h2 className="text-[30px] md:text-[42px] font-bold text-[#1B2639] mb-4">
                Ready to build something real?
              </h2>
              <p className="text-base text-[#1B2639]/70 mb-8">
                Explore open roles and find out what it’s like to do meaningful
                work, close to home.
              </p>
              <div className="flex justify-center">
                <SecondaryButton
                  title={"View All Open Positions"}
                  link={"/career/open-positions"}
                  style={"bg-[#0E758B] text-white"}
                  radius={"sm"}
                  variant={"solid"}
                  size={"md"}
                  selectValue={undefined}
                />
              </div>
            </div>
          </MotionEffect>
        </SectionLayout>
      </section>
    </div>
  );
};

export default CareerList;
