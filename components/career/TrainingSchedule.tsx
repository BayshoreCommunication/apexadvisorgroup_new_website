import { internTrainingSchedule as schedule } from "../../config/careerData";
import MotionEffect from "../motion/MotionEffect";
import SectionLayout from "../shared/SectionLayout";

type Session = {
  date: string;
  title: string;
  detail?: string;
  isBreak?: boolean;
};

const SessionCell = ({ day, session }: { day: string; session: Session }) => (
  <div>
    <p
      className={`text-xs font-semibold tracking-wide uppercase mb-1 ${
        session.isBreak ? "text-[#1B2639]/50" : "text-[#0E758B]"
      }`}
    >
      {day} / {session.date}
    </p>
    <h3 className="font-semibold text-[#1B2639] leading-snug">
      {session.title}
    </h3>
    {session.detail && (
      <p className="text-sm text-[#1B2639]/60 mt-1">{session.detail}</p>
    )}
  </div>
);

const TrainingSchedule = () => {
  return (
    <section id="training-schedule" className="scroll-mt-24">
      <SectionLayout img={""} bg={""}>
        <MotionEffect effect={"fade-up"} duration={"1200"} delay={0}>
          <div className="max-w-[640px] mb-10">
            <span className="text-[#0E758B] font-semibold tracking-wide uppercase text-sm">
              {schedule.program}
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1B2639] mt-3 mb-2">
              {schedule.title}
            </h2>
            <p className="text-[#0E758B] font-semibold">{schedule.dateRange}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 text-sm mb-6 pt-4 border-t-4 border-[#0E758B]">
            <p>
              <span className="uppercase tracking-wide text-[#1B2639]/50 mr-3">
                Tuesdays
              </span>
              <span className="font-medium text-[#1B2639]">
                {schedule.tuesdayLabel}
              </span>
            </p>
            <p>
              <span className="uppercase tracking-wide text-[#1B2639]/50 mr-3">
                Thursdays
              </span>
              <span className="font-medium text-[#1B2639]">
                {schedule.thursdayLabel}
              </span>
            </p>
          </div>

          <div className="border border-[#1B2639]/10 rounded-md overflow-hidden">
            <div className="hidden md:grid grid-cols-[90px_1.4fr_1fr] bg-[#1B2639] text-white text-sm font-semibold uppercase tracking-wide">
              <div className="px-5 py-4">Week</div>
              <div className="px-5 py-4">Tuesday / Training</div>
              <div className="px-5 py-4">Thursday / Inquiry</div>
            </div>

            {schedule.weeks.map((week, i) => (
              <div
                key={week.week}
                className={`grid grid-cols-1 md:grid-cols-[90px_1.4fr_1fr] border-t border-[#1B2639]/10 first:border-t-0 md:first:border-t ${
                  i % 2 === 0 ? "bg-[#F5F9FA]" : "bg-white"
                }`}
              >
                <div className="px-5 pt-5 md:py-6 flex md:items-center">
                  <span className="text-[#0E758B] font-bold text-xl">
                    <span className="md:hidden text-sm uppercase tracking-wide mr-2">
                      Week
                    </span>
                    {week.week}
                  </span>
                </div>
                <div className="px-5 py-4 md:py-6 md:border-l border-[#1B2639]/10">
                  <SessionCell day="Tue" session={week.tuesday} />
                </div>
                <div className="px-5 pb-5 md:py-6 md:border-l border-[#1B2639]/10">
                  <SessionCell day="Thu" session={week.thursday} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#EEF6F8] border-l-4 border-[#0E758B] rounded-r-md p-5">
            <h3 className="font-semibold text-[#1B2639] uppercase tracking-wide text-sm mb-2">
              Important Dates
            </h3>
            <ul className="text-sm text-[#1B2639]/80 space-y-1">
              {schedule.importantDates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-[#1B2639]/60 mt-5">{schedule.note}</p>
        </MotionEffect>
      </SectionLayout>
    </section>
  );
};

export default TrainingSchedule;
