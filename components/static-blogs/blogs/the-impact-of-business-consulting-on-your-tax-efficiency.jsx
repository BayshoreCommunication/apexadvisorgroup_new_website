import Image from "next/image";
import Link from "next/link";

const featuredImage = {
  src: "/image/static-blogs/business-consulting-tax-efficiency-strategic-tax-planning.webp",
  alt: "Business consulting graphic showing tax efficiency analysis, smart tax strategy, financial growth chart, calculator, and tax planning resources.",
  title: "The Impact of Business Consulting on Your Tax Efficiency",
  description:
    "Professional business consulting graphic illustrating how strategic consulting improves tax efficiency through smart tax planning and financial analysis. The image features tax savings reports, business growth charts, tax planning resources, and financial strategy tools, highlighting how experienced consultants help businesses optimize tax strategies, strengthen financial performance, and support long-term business success.",
  caption:
    "Discover how business consulting can improve tax efficiency with strategic tax planning, financial analysis, and expert guidance to support sustainable business growth.",
};

const keyTakeaways = [
  "Review entity fit every year.",
  "Close books monthly, not yearly.",
  "Plan quarterly, not in April.",
  "Align owner pay with your entity.",
  "Document deductions like you expect questions.",
  "Track assets and depreciation from day one.",
  "Check sales tax nexus as you grow.",
];

const selfCheckItems = [
  "Do you know your expected tax bill quarterly?",
  "Do you track deductible categories monthly?",
  "Do you separate personal and business spending fully?",
  "Do you plan purchases around tax timing?",
  "Do you review entity fit each year?",
];

const entityComparison = [
  {
    type: "Single-Member LLC",
    treatment: "Often taxed by default",
    strength: "Liability separation options",
    risk: "Same tax outcome if unchanged",
  },
  {
    type: "S Corporation",
    treatment: "Pass-through, salary plus distributions",
    strength: "Potential payroll tax efficiency",
    risk: "Salary must be reasonable and supported",
  },
  {
    type: "C Corporation",
    treatment: "Corporate tax, dividends taxed again",
    strength: "Can support reinvestment strategies",
    risk: "Double taxation and complex planning",
  },
];

const bookkeepingFixes = [
  "Proper category mapping for deductible expenses",
  "Monthly reconciliation for all accounts",
  "Clear separation of owner draws and expenses",
  "Receipt capture and policy enforcement",
  "Depreciation-ready fixed asset tracking",
];

const accountingMethodTable = [
  {
    topic: "Income Recognition",
    cash: "When cash is received",
    accrual: "When earned",
  },
  {
    topic: "Expense Recognition",
    cash: "When paid",
    accrual: "When incurred",
  },
  {
    topic: "Tax Planning Levers",
    cash: "Often more timing flexibility",
    accrual: "Often less timing flexibility",
  },
];

const taxGapsTable = [
  {
    gap: "No quarterly planning cadence",
    cause: "Surprise tax bills and rushed decisions",
    change: "Quarterly forecasts and planned actions",
  },
  {
    gap: "Owner pay not matched to entity",
    cause: "Higher payroll taxes or compliance risk",
    change: "Documented compensation strategy",
  },
  {
    gap: "Weak expense documentation",
    cause: "Lost deductions and audit exposure",
    change: "Receipt systems and clear policies",
  },
  {
    gap: "Untracked fixed assets",
    cause: "Missed depreciation and messy returns",
    change: "Asset register and purchase planning",
  },
  {
    gap: "Sales tax overlooked",
    cause: "Back taxes, penalties, interest",
    change: "Nexus review and filing workflow",
  },
];

const faqs = [
  {
    question: "How Does Business Consulting Reduce My Taxes Legally?",
    answer:
      "It improves decisions that drive taxes. It optimizes structure, payroll, timing, and documentation. You capture deductions you can support. You avoid penalties. You plan quarterly, not at filing time.",
  },
  {
    question: "Do I Need Consulting If My Accountant Files My Return?",
    answer:
      "Yes, if you want proactive savings. Filing reports the past. Consulting shapes future decisions. It adds quarterly planning, cash forecasts, and strategy. That is where most tax efficiency comes from.",
  },
  {
    question: "When Should I Consider Switching To An S Corporation?",
    answer:
      "Consider it when profits rise and your role is stable. You may reduce certain payroll taxes. But you must run payroll and support a reasonable salary with documentation.",
  },
  {
    question: "What Records Improve Tax Efficiency The Most?",
    answer:
      "Accountants maintain clean books. Owners preserve mileage logs. Clear policies matter too. If you cannot prove it, you may lose the deduction under review.",
  },
  {
    question: "Is Sales Tax Part Of Tax Efficiency?",
    answer:
      "Yes. Sales tax errors cause back bills. Mistakes trigger heavy penalties. Omissions generate expensive interest. Consulting verifies state nexus. Experts determine product taxability. Advisors schedule filing deadlines. Good workflows eliminate hidden liabilities.",
  },
  {
    question: "How Often Should Tax Planning Happen?",
    answer:
      "Quarterly is the practical minimum. Monthly is better for fast-growing firms. Planning should match your cash cycle. The goal is predictability and fewer rushed year-end moves.",
  },
];

const externalLinkClass =
  "font-semibold text-[#0B7788] underline-offset-4 hover:underline";

const externalRel = "nofollow noopener noreferrer";

const TheImpactOfBusinessConsultingOnYourTaxEfficiency = ({ postDate, updatedDate }) => {
  return (
    <article className="text-[#1B2639] px-4 md:px-0">
      {/* Featured Image */}
      <figure className="mb-8 overflow-hidden rounded-md bg-[#EEF6F8]">
        <Image
          width={1800}
          height={950}
          src={featuredImage.src}
          alt={featuredImage.alt}
          title={featuredImage.title}
          className="h-auto w-full object-cover"
          priority
        />
        <figcaption className="px-5 py-3 text-sm italic text-slate-600">
          {featuredImage.caption}
        </figcaption>
      </figure>

      {/* Publish & Updated Date */}
      {postDate ? (
        <p className="mb-4 text-left text-[1rem] italic text-black">
          Published: {postDate} {updatedDate ? `| Updated: ${updatedDate}` : ""}
        </p>
      ) : null}

      {/* Branded Header Card */}
      <div className="mb-8 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 md:grid-cols-[2fr_1fr]">
          <div className="bg-[#1B3A6B] px-5 py-4 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D5AD45]">
              Business Consulting
            </p>
            <p className="mt-1 text-base font-medium text-white">
              The Impact of Business Consulting on Your Tax Efficiency
            </p>
          </div>
          <div className="bg-[#0B7788] px-5 py-4 text-white">
            <p className="font-semibold text-white">apexadvisorgroup.com</p>
            <p className="text-white">(813) 678-2400</p>
          </div>
        </div>
      </div>

      {/* Intro Block Quote */}
      <div className="mb-8 border-l-4 border-[#0B7788] bg-[#EEF6F8] px-5 py-4">
        <p className="text-base leading-8 text-slate-800 text-justify">
          Business consulting helps you maximise your tax efficiency by matching your firm structure with tax methods specific to you. Consultants also find overlooked deductions, and take advantage of unique business credits and timing of income. This reduces your overall exposure, eliminates penalties and frees up capital for growth.
        </p>
      </div>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-[#1B2639] text-left">
          Key Takeaways
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          Tax efficiency improves fastest with structure, systems, and timing. Business consulting makes those repeatable. You get fewer surprises. You keep more cash. You lower risk.
        </p>
        <div className="grid gap-3 rounded-md bg-[#EEF6F8] p-5">
          {keyTakeaways.map((point) => (
            <div key={point} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D5AD45]" />
              <p className="text-base leading-7 text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Business Consulting Improves Tax Efficiency By Fixing Decisions Upstream
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Tax efficiency starts before the tax return. It starts with choices you make weekly. Pricing, payroll, entity type, and asset buys all change taxes. Consulting makes those choices intentional. It replaces guesses with a plan.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          You get three direct wins. You increase deductions you can defend. You time income and expenses better. You lower avoidable taxes through structure.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          What Tax Efficiency Means For Your Business In Plain Terms
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Tax efficiency means you keep more after-tax cash. You do it without risky moves. You use the rules as written. You document everything. You pick the best options for your goals.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          It also means fewer &ldquo;tax-time&rdquo; decisions. Most savings come from planning. Not from last-minute scrambling.
        </p>
      </section>

      {/* Self-Check Section */}
      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Quick Self-Check: Are You Running A Tax-Efficient Business?
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          If you answer &ldquo;no&rdquo; often, consulting helps fast.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-800 leading-8">
          {selfCheckItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          The Fastest Tax Savings Usually Come From Business Structure Choices
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          The biggest legal tax changes come from structure. Your entity type drives payroll taxes, filing rules, and profit treatment. Many owners stay in the first setup forever. That can cost real money. Consulting reviews your structure based on profit level, payroll needs, and risk.
        </p>
      </section>

      {/* Section 4 - Entity Comparison */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Entity Type Affects Taxes More Than Most Owners Think
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-5">
          It can be costly at scale. An LLC adds flexibility. An S corporation can reduce certain payroll taxes. A C corporation can help in narrow cases. It can also add double tax risk. Your best fit depends on your numbers. It also depends on your exit plan. Are you selling later? Are you adding partners? Are you reinvesting heavily?
        </p>
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Comparison Table: Common Structures And Tax Impacts
        </h3>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-[600px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Structure</th>
                <th className="px-4 py-3 font-semibold">Typical Tax Treatment</th>
                <th className="px-4 py-3 font-semibold">Common Strength</th>
                <th className="px-4 py-3 font-semibold">Common Risk</th>
              </tr>
            </thead>
            <tbody>
              {entityComparison.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.type}</td>
                  <td className="px-4 py-3 text-slate-700">{row.treatment}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.strength}</td>
                  <td className="px-4 py-3 text-slate-700">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 - Better Books */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Better Books Create Better Tax Outcomes
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Clean books increase deductions you can prove. Messy books create missed write-offs. They also create audit exposure. Consulting often starts with your chart of accounts. It also improves your monthly close.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4 italic font-medium text-slate-700">
          You cannot optimize what you cannot measure. Do you know your profit by service line? Do you know your labor percentage monthly? Those numbers drive smart tax moves.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Bookkeeping Fixes That Improve Tax Efficiency
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          Consulting often tightens these areas first.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-800 leading-8">
          {bookkeepingFixes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA Box 1 */}
      <section className="mb-10 rounded-md bg-[#1B3A6B] p-6 text-white text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Ready to optimize your business structure and tax efficiency?
        </h2>
        <p className="mb-5 text-base italic leading-8 text-slate-200">
          Apex Advisor Group handles the structural math to optimize self-employment and income taxes.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-[#1B3A6B] transition hover:bg-[#D5AD45] hover:text-white"
        >
          Schedule an Apex Conversation
        </Link>
      </section>

      {/* Section 6 - Timing */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Consulting Helps You Time Income And Expenses Legally
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Timing changes taxes. It also changes cash. Consulting reviews your accounting method. It reviews your billing cycle. It reviews your payment policies. You may be able to accelerate expenses. You may be able to defer income. The right move depends on growth, credit, and expected rate changes.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Cash Method Versus Accrual Method Impacts Tax Planning
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify mb-5">
          Cash method can support timing strategies. Accrual can match revenue and costs better. Some businesses must use accrual. Some can choose. Consulting helps you pick with eyes open.
        </p>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-[500px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Topic</th>
                <th className="px-4 py-3 font-semibold">Cash Method</th>
                <th className="px-4 py-3 font-semibold">Accrual Method</th>
              </tr>
            </thead>
            <tbody>
              {accountingMethodTable.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.topic}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.cash}</td>
                  <td className="px-4 py-3 text-slate-700">{row.accrual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base leading-8 text-slate-800 text-justify mt-6 italic font-medium text-slate-700">
          Don&rsquo;t let timing choices complicate your tax efficiency. Connect with Apex Advisor Group for custom planning workflows tailored to your operational scale.
        </p>
      </section>

      {/* Section 7 - Payroll */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Payroll And Owner Compensation Planning Drives Real Savings
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Payroll is a top tax lever. It affects employment taxes, deductions, and compliance risk. Consulting helps you design pay that fits your entity. It also fits your life needs. For S corporations, this is critical. You need a supportable salary. You also need proper payroll filings. Consulting reduces the chance of missteps.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Pay Yourself In The Right Way
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Owners choose one method. People ignore future changes. But profit changes. Your role changes. Your business risk changes. Your tax plan should change too. Consulting can coordinate payroll, estimated taxes, and benefits. That coordination often creates clean savings.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          For more guidance on payroll and tax compliance, visit the{" "}
          <Link
            href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes"
            target="_blank"
            rel={externalRel}
            className={externalLinkClass}
          >
            IRS Employment Taxes resource
          </Link>
          .
        </p>
      </section>

      {/* Section 8 - Benefits */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Benefits Planning Can Reduce Taxes While Improving Retention
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Employee benefits can be tax-smart. They can also reduce turnover. Consulting reviews benefits for both tax and business value. Common areas include health plans, retirement plans, and accountable plans. The goal is clear. Shift spending into deductible, structured benefits.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Benefits Matched To Your Team Size
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          A solo owner may prioritize retirement contributions. A growing team may prioritize health support. A high-turnover role may need simple perks. Consulting keeps benefits aligned with margins.
        </p>
      </section>

      {/* Section 9 - Asset Purchases */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Asset Purchases And Depreciation Strategy Can Change Your Tax Bill
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Equipment, vehicles, and software can create deductions. But only if you track them right. Consulting builds a purchase plan. It maps depreciation rules to your cash flow. Buying at the wrong time can hurt cash. Buying without documentation can fail in an audit. A plan prevents both.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Vehicle And Home Office Rules Need Extra Care
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Vehicles cause problems often. Documentation matters. Business use percentage matters. Home office claims also need support, particularly with the{" "}
          <Link
            href="https://www.irs.gov/businesses/small-businesses-self-employed/home-office-deduction"
            target="_blank"
            rel={externalRel}
            className={externalLinkClass}
          >
            IRS home office deduction rules
          </Link>
          . Consulting sets clear policies so you stay safe.
        </p>
      </section>

      {/* Section 10 - Sales Tax */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Sales Tax And Multi-State Exposure Can Quietly Destroy Efficiency
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Sales tax errors are expensive. They also compound fast. Consulting can review nexus, product taxability, and filing cadence. It can set systems that scale. Do you sell online? Do you cross state lines? Do you use contractors in other states? These trigger obligations. Many owners miss them.
        </p>
      </section>

      {/* Section 11 - Risk Management */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Risk Management Is Part Of Tax Efficiency
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Tax efficiency is not only about paying less. It is also about avoiding costly mistakes. Penalties are not &ldquo;just a fee.&rdquo; They are dead cash. Consulting reduces that risk with process. This includes estimated payments, filing deadlines, and documentation. It also includes entity compliance, payroll filings, and proper reporting.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          For official IRS guidance on estimated taxes and filing deadlines, visit the{" "}
          <Link
            href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
            target="_blank"
            rel={externalRel}
            className={externalLinkClass}
          >
            IRS Estimated Taxes page
          </Link>
          .
        </p>
      </section>

      {/* Section 12 - Consulting Levels */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          What Business Consulting Looks Like At Beginner, Intermediate, And Expert Levels
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Consulting should meet you where you are. The right plan evolves with your growth.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Beginner Level: You Need Clarity And Control First
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          At this level, you need clean books and separation. You need a budget for taxes. You need estimated payments. You also need a simple dashboard. You often win by fixing basics. You stop missing deductions. You stop mixing spending. You stop guessing your tax bill.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Intermediate Level: You Need Systems And Quarterly Strategy
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          At this level, you add quarterly tax planning. You review entity fit yearly. You formalize reimbursements. You optimize payroll and benefits. You also start scenario planning. What happens if revenue rises 20%? What if you hire two people? Consulting answers those questions.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Expert Level: You Need Advanced Coordination And Long-Term Planning
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          At this level, taxes link to exits and wealth. You plan for succession. You plan for a sale. You plan for risk. You plan for long-term investing. You also coordinate across tax, accounting, insurance, and financial goals. That coordination is where efficiency compounds.
        </p>
      </section>

      {/* Section 13 - Tax Gaps Table */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Common Tax Efficiency Gaps We See Across Business Owners
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-5">
          Most tax waste comes from a few repeat gaps. Based on our internal review themes across many client situations over time, these gaps show up often. Your results will differ. But the patterns stay consistent.
        </p>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-[600px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Gap We Commonly See</th>
                <th className="px-4 py-3 font-semibold">What It Causes</th>
                <th className="px-4 py-3 font-semibold">What Consulting Changes</th>
              </tr>
            </thead>
            <tbody>
              {taxGapsTable.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.gap}</td>
                  <td className="px-4 py-3 text-slate-700">{row.cause}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Thought */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Final Thought
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Consulting enhances tax efficiency. Strategy changes business operations. Advisors align corporate structures. Professionals streamline payroll compliance. You reduce waste and risk. You gain predictable after-tax cash.
        </p>
      </section>

      {/* Ready CTA Section */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Ready To Stop Overpaying And Start Planning?
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          If you keep guessing your tax bill, you will keep getting surprised. If you want a clear plan, we can help. At Apex Advisor Group, we bring 40+ years of combined experience across tax, accounting, insurance, and financial services. We put your needs first, always. If you are ready to improve your tax efficiency with a strategy you can follow, reach out to us today.
        </p>
      </section>

      {/* CTA Box 2 */}
      <section className="mb-10 rounded-md bg-[#1B2639] p-6 text-white text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Transform your tax risk into absolute capital growth.
        </h2>
        <p className="mb-5 text-base italic leading-8 text-slate-300">
          Contact us today to establish a structured, predictable roadmap for your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-[#1B2639] transition hover:bg-[#D5AD45] hover:text-white"
        >
          Schedule a Consultation with Apex Advisor Group
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-[#1B2639] text-left">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-[#0B7788]">
                Q: {faq.question}
              </h3>
              <p className="text-base leading-8 text-slate-800 text-justify">
                A: {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    

      {/* Disclaimer */}
      <p className="mt-6 rounded-md border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600 italic">
        Disclaimer: This blog is for informational purposes only. If you want to know anything else in detail, please reach out to Apex Advisor Group.
      </p>
    </article>
  );
};

export default TheImpactOfBusinessConsultingOnYourTaxEfficiency;
