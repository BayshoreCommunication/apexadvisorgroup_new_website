import MotionEffect from "../motion/MotionEffect";
import SectionLayout from "../shared/SectionLayout";

function TestimonialSection() {
  return (
    <SectionLayout img="bg-[url('/image/homebanner3.png')] bg-cover bg-center">
      <div className="flex justify-center">
        <MotionEffect effect="fade-up" duration="2000">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-stone-900 font-bold text-3xl mt-5 mb-4">
              Investing in You: Your Trusted Partner for a Brighter Financial
              Tomorrow
            </h2>

            <p className="mb-4 text-lg text-stone-900 mt-6">
              {` Boasting over a decade of experience, we handle everything from
              personal returns, non-profit & multi-state to tricky corporate
              tax matters.`}
              <br />
              {`We walk you through tax planning, wealth management, and
              retirement services, ensuring you hit your financial targets.`}
              <br />
              {` By cutting down on your tax bill and pumping up your savings, we
              make sure you keep more of your cash We help you build, grow,
              and maintain your wealth through personalized strategies and
              financial planning solutions We're all about being the best.`}
              <br />
              {`We're plugged into the community, stay on top of tax law
              changes, and keep on learning. `}
              <br />
              {` You benefit from a team that's always growing and improving to
              serve you better.`}
            </p>
          </div>
        </MotionEffect>
      </div>
    </SectionLayout>
  );
}

export default TestimonialSection;
