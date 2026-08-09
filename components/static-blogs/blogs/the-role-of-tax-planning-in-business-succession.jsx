import Image from "next/image";
import Link from "next/link";

const featuredImage = {
  src: "/image/static-blogs/role-of-tax-planning-in-business-succession-guide.webp",
  alt: "Business succession planning documents, tax strategy guide, and financial reports on an executive office desk.",
  title: "The Role of Tax Planning in Business Succession Guide",
  description:
    "Professional business succession planning illustration featuring tax strategy documents, financial reports, and an executive office workspace. Ideal for content about tax planning, wealth preservation, estate planning, and business succession strategies.",
  caption:
    "Strategic tax planning helps protect business assets, reduce liabilities, and ensure a smooth business succession.",
};

const keyTakeaways = [
  "Start your plan before 3 to 5 years.",
  "Match the exit path to your tax picture.",
  "Clean up entity structure before transfers.",
  "Plan for estate taxes, even if uncertain.",
  "Use phased transfers to manage brackets.",
  "Document valuations and keep support files.",
  "Coordinate CPA, attorney, and advisor efforts.",
];

const taxEventsTable = [
  {
    event: "Asset sale to buyer",
    taxType: "Income + capital gains",
    taxed: "Depreciation recapture and gain",
    risk: "Higher total tax rate",
  },
  {
    event: "Stock sale to buyer",
    taxType: "Capital gains",
    taxed: "Equity gain",
    risk: "Buyer may pay less",
  },
  {
    event: "Gift of ownership",
    taxType: "Gift tax",
    taxed: "Fair market value transfer",
    risk: "Valuation disputes",
  },
  {
    event: "Owner death",
    taxType: "Estate tax",
    taxed: "Value of business",
    risk: "Forced liquidity need",
  },
  {
    event: "Redemption by company",
    taxType: "Income or capital gains",
    taxed: "Payment structure",
    risk: "Double tax risk",
  },
  {
    event: "Installment sale",
    taxType: "Income timing",
    taxed: "Gain over years",
    risk: "Interest and default risk",
  },
];

const entityMatrixTable = [
  {
    type: "Sole prop / disregarded",
    pattern: "Asset sale style",
    benefit: "Simplicity",
    pain: "Higher ordinary income exposure",
  },
  {
    type: "Partnership / LLC",
    pattern: "Mix of ordinary and capital",
    benefit: "Flexibility",
    pain: "Complex allocations and basis",
  },
  {
    type: "S corporation",
    pattern: "Often stock sale friendly",
    benefit: "Single level tax",
    pain: "Built-in gains risk after C change",
  },
  {
    type: "C corporation",
    pattern: "Double tax risk",
    benefit: "Fringe benefits",
    pain: "Asset sale can trigger two taxes",
  },
];

const valuationGaps = [
  "Outdated valuations older than 24 months.",
  "Owner add-backs not supported by records.",
  "Missing customer concentration analysis.",
  "No support for discounts, when used.",
  "No tie-out to tax returns or books.",
];

const timelineTable = [
  {
    time: "3 to 5 years",
    action: "Entity review, valuation baseline",
    matters: "Sets structure early",
  },
  {
    time: "2 to 3 years",
    action: "Transfer design, buy-sell updates",
    matters: "Reduces legal and tax gaps",
  },
  {
    time: "12 to 24 months",
    action: "Run deal models, clean books",
    matters: "Improves deal terms",
  },
  {
    time: "6 to 12 months",
    action: "Lock documentation, confirm funding",
    matters: "Prevents closing surprises",
  },
  {
    time: "Post-exit",
    action: "Tax reporting, estimated payments",
    matters: "Avoids penalties and stress",
  },
];

const commonMistakes = [
  "Waiting until a buyer appears.",
  "No written valuation support.",
  "Poor basis tracking and records.",
  "Confusing asset sale vs stock sale impacts.",
  "Ignoring state tax and residency rules.",
  "No plan for estimated tax payments.",
  "No liquidity plan for estate taxes.",
];

const faqs = [
  {
    question: "When to Begin Tax Planning for Succession?",
    answer:
      "You should start three to five years early. This window allows entity clean-up, valuation support, and staged transfers. It also gives time to adjust cash flow and reduce surprise taxes.",
  },
  {
    question: "Does A Business Sale Always Create Capital Gains Tax?",
    answer:
      "Not always. Asset sales can create ordinary income from depreciation recapture. Stock sales often create capital gains. The deal structure decides the mix. Planning can shift outcomes and timing.",
  },
  {
    question: "Why Does Entity Type Matter So Much In Succession?",
    answer:
      "Entity type changes who pays tax and when. It also changes sale taxation. C corporations can face double tax in asset sales. S corporations often allow cleaner seller results.",
  },
  {
    question: "Can You Reduce Taxes When Transferring A Business To A Family?",
    answer:
      "Yes, if you plan ahead and have a good basis for your valuation. Gifting, staged sales, and trust strategies can shift future growth. You must document value and follow tax rules closely.",
  },
  {
    question: "What Is The Biggest Tax Risk In A Buy-Sell Agreement?",
    answer:
      "Tax mismatches create massive risks. Poor funding causes major disputes. Unclear pricing triggers heavy friction. A coordinated review helps prevent dividend treatment and valuation challenges.",
  },
  {
    question: "How Does Life Insurance Fit Into Succession Tax Planning?",
    answer:
      "Insurance can create liquidity when taxes are due. It often funds buy-sell agreements. It can also help cover estate tax exposure. Proper ownership and beneficiary setup matter for tax results.",
  },
];

const externalLinkClass =
  "font-semibold text-[#0B7788] underline-offset-4 hover:underline";

const externalRel = "nofollow noopener noreferrer";

const TheRoleOfTaxPlanningInBusinessSuccession = ({ postDate, updatedDate }) => {
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
              Business Succession Planning
            </p>
            <p className="mt-1 text-base font-medium text-white">
              The Role of Tax Planning in Business Succession
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
          The foundation of business succession is tax planning, which directly determines how much equity is lost to taxes and how much is transferred to successors. A smooth, legally compliant transfer of ownership is ensured by careful planning, which also reduces income, capital gains, and estate taxes.
        </p>
      </div>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-[#1B2639] text-left">
          Key Takeaways
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          Many entrepreneurs plan exit strategies early. Two out of three entrepreneurs want to stop within ten years. This timeline increases urgency. Business owners need effective succession planning. Owners need smart tax planning.
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
          Why Tax Planning Is A Core Part Of Any Succession Plan
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Tax planning prevents surprises at closing. It also protects working capital. Without planning, you may face taxes at the worst time. That time is usually the transition year.
        </p>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          Your business is often your largest asset. It is also hard to value. It may also be illiquid. These facts make taxes more dangerous. A tax bill needs cash. Your wealth may be locked inside the business.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          What Changes In Taxes During A Business Transition
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Taxes change because ownership changes. Control may also change. Payments may shift from salary to equity. Assets may be sold or gifted. Each move has its own tax treatment. Common tax areas affected include income tax, capital gains, payroll tax, and estate tax. State taxes also matter. They can change the outcome.
        </p>
      </section>

      {/* Section 3 - Tax Events Table */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Quick View Of Tax Events That Trigger Costs
        </h2>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white mt-4">
          <table className="min-w-[600px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Succession Event</th>
                <th className="px-4 py-3 font-semibold">Common Tax Type</th>
                <th className="px-4 py-3 font-semibold">What Often Gets Taxed</th>
                <th className="px-4 py-3 font-semibold">Risk If Unplanned</th>
              </tr>
            </thead>
            <tbody>
              {taxEventsTable.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.event}</td>
                  <td className="px-4 py-3 text-slate-700">{row.taxType}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.taxed}</td>
                  <td className="px-4 py-3 text-slate-700">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Which Exit Path Fits Your Tax Goals Best
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          The best exit path depends on your goal. It also depends on your tax basis. It depends on buyer type too. There is no universal best option. You usually choose between family transfer, employee transfer, or third-party sale. You can also blend paths.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Family Transfer Often Rewards Early Planning
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Family transfers can reduce taxes with time. They also protect legacy. But they require strong governance. They also need clear valuation support. You may use gifts, sales, or trusts. You may also use staged ownership changes. This can reduce transfer taxes.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Employee Or Management Buyouts Need Cash Flow Planning
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Employee transitions can work well. But the business must fund buy-ins. Tax planning can help structure payments. It can also help retain key leaders.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Third-Party Sales Often Focus On Net Proceeds
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          A third-party sale can maximize price. But taxes can cut the net. The deal form matters. Asset sales often cost more tax. Stock sales often help sellers. You can often improve outcomes by planning early. You may adjust entity structure. You may also improve basis records.
        </p>
      </section>

      {/* Section 5 - Entity Matrix */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Entity Type Shapes Your Succession Tax Bill
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-5">
          Entity type changes how sales are taxed. It also changes how income is taxed. It can change payroll taxes too. This is often the biggest lever.
        </p>
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Entity Type Comparison Matrix
        </h3>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-[600px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Entity Type</th>
                <th className="px-4 py-3 font-semibold">Sale Tax Pattern</th>
                <th className="px-4 py-3 font-semibold">Common Seller Benefit</th>
                <th className="px-4 py-3 font-semibold">Common Seller Pain Point</th>
              </tr>
            </thead>
            <tbody>
              {entityMatrixTable.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.type}</td>
                  <td className="px-4 py-3 text-slate-700">{row.pattern}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.benefit}</td>
                  <td className="px-4 py-3 text-slate-700">{row.pain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base leading-8 text-slate-800 text-justify mt-6">
          You should not change entities only for taxes. But entity clean-up can help. Timing matters. Some changes have holding periods.
        </p>
      </section>

      {/* CTA Box 1 */}
      <section className="mb-10 rounded-md bg-[#1B3A6B] p-6 text-white text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Maximize Your Succession Net Proceeds
        </h2>
        <p className="mb-5 text-base italic leading-8 text-slate-200">
          Don&apos;t let taxes erode your hard-earned business equity. Plan your entity structure and exit strategy early.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-[#1B3A6B] transition hover:bg-[#D5AD45] hover:text-white"
        >
          Contact Apex Advisor Group today.
        </Link>
      </section>

      {/* Section 6 - Valuation */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Valuation Drives Gift Taxes, Estate Taxes, And Audit Risk
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Valuation is the tax foundation. If the value is wrong, the plan fails. Or it gets challenged. You need a defensible process. A valuation should match the transfer type. It should also match the date. It should include support files. It should reflect real financials.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          Original Data: What We See Most In Succession Valuation Gaps
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          Based on our internal review patterns, most gaps come from process. Not intent. These are the most common issues we see:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-800 leading-8">
          {valuationGaps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-base leading-8 text-slate-800 text-justify mt-4">
          This is avoidable. You just need a repeatable file.
        </p>
      </section>

      {/* Section 7 - Timing */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Timing Reduces Taxes More Than Any Single Tactic
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Timing is the simplest tax tool. It is also the most ignored. Taxes depend on when income lands. They also depend on when ownership shifts. Spreading a transfer across years can help. It can keep you in lower brackets. It can also reduce surtaxes. It can also manage Medicare impacts. You can also time bonuses, dividends, and redemptions. You can also time charitable gifts. You can also time equipment purchases.
        </p>
      </section>

      {/* Section 8 - Installment Sales */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Installment Sales Can Help You Control Tax Brackets
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Installment sales can spread capital gains. They can also support retirement cash flow. But they add risk. The buyer can default. Installment sales also create interest income. They may also trigger limits. Some assets do not qualify. Some recapture does not defer. You should match the note terms to real cash flow. You should also secure the note when possible.
        </p>
      </section>

      {/* Section 9 - Trusts */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Trusts And Gifting Strategies Can Lower Transfer Taxes
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Trust planning can shift future growth out of your estate. It can also protect assets. It can also control how heirs receive value. Common tools include grantor trusts and family limited structures. These require expert drafting. They also require clean administration. You should never use a trust without clear goals. You should also avoid complexity without benefit.
        </p>
      </section>

      {/* Section 10 - Insurance */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Insurance Often Solves The Liquidity Problem
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Insurance can create cash at the right time. It can fund buy-sell agreements. It can cover estate taxes. It can replace income too. This is not a product pitch. It is a planning reality. Taxes demand cash. Insurance can supply it. You should size coverage using math. Not guesses. You should also review beneficiaries often.
        </p>
      </section>

      {/* Section 11 - Buy-Sell Agreements */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          How Buy-Sell Agreements Prevent Tax And Family Disputes
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          A buy-sell agreement sets the rules. It can define price, timing, and funding. It also reduces fights. It also helps with valuation. Tax planning improves buy-sell design. It helps prevent unintended dividend treatment. It helps avoid entity-level tax traps. It also aligns with estate goals.
        </p>
      </section>

      {/* Section 12 - Action Checklist & Beginners/Intermediate/Expert */}
      <section className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-[#1B2639] text-left">
          Succession Readiness Action Checklist
        </h2>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          What Beginners Should Do First To Start Tax Planning
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Start with clarity, not tactics. You need clean records first. You also need basic decisions. You should confirm your entity type. You should confirm ownership percentages. You should confirm basis records. You should also confirm payroll setup. You should also gather three years of returns. You should gather financial statements too. Then you can model options.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          What Intermediate Owners Should Focus On To Improve Net Proceeds
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Intermediate planning is about optimization. You model different deal forms. You also model timing. You also test liquidity. You should also reduce key-person risk. Buyers price risk. Taxes then hit the lower price. You should also clean up personal expenses. You should document add-backs. You should also reduce customer concentration.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-3 text-xl font-bold text-[#1B2639] text-left">
          What Expert-Level Owners Should Do To Lock In Outcomes
        </h3>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Expert planning uses coordination and modeling. It also uses governance. It also uses advanced transfer planning. You should run multi-scenario tax models. You should test sale, gift, and death outcomes. You should also stress-test state tax exposure. You should also plan for leadership transition. A tax plan fails without people. Operations must stay stable.
        </p>
      </section>

      {/* Section 13 - Timeline Table */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          What A Practical Tax Planning Timeline Looks Like
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-5">
          Planning works best when staged. Each year has a purpose. Each stage reduces risk.
        </p>
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-[600px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#0c2340] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Time Before Exit</th>
                <th className="px-4 py-3 font-semibold">What You Should Do</th>
                <th className="px-4 py-3 font-semibold">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {timelineTable.map((row, index) => (
                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-[#1B2639]">{row.time}</td>
                  <td className="px-4 py-3 text-slate-700">{row.action}</td>
                  <td className="px-4 py-3 text-slate-700 bg-emerald-50/50 font-semibold text-[#0B7788]">{row.matters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 14 - Common Mistakes */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Common Mistakes That Increase Taxes During Succession
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify mb-4">
          Most mistakes come from delay. They also come from siloed advice. Your CPA and attorney must align. Here are the most common issues we see:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-800 leading-8">
          {commonMistakes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 15 - Final Thoughts */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-bold text-[#1B2639] text-left">
          Final Thoughts
        </h2>
        <p className="text-base leading-8 text-slate-800 text-justify">
          Tax planning works best when your team communicates. That is how we work. We bring tax, accounting, insurance, and financial planning together. We also keep your goals central. At Apex Advisor Group, we have 40+ years combined experience. We focus on clear advice. We also focus on education. Financial literacy matters during transitions. You should understand each tradeoff. We also keep plans practical. Your plan should work in real life. It should work during stress too.
        </p>
      </section>

      {/* CTA Box 2 */}
      <section className="mb-10 rounded-md bg-[#1B2639] p-6 text-white text-center shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Get Started With Apex Advisor Group
        </h2>
        <p className="mb-5 text-base italic leading-8 text-slate-300">
          Early planners protect their wealth. Late planners lose their money. Tax laws ignore good intentions. Taxes follow exact structures. Taxes require perfect timing. Apex Advisor Group builds strong succession plans. We protect your staff. We maximize your net proceeds. Our team combines tax services. We manage your accounting. We organize your insurance. We handle financial planning. You want a clear plan. We offer immediate help.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-white px-5 py-3 font-semibold text-[#1B2639] transition hover:bg-[#D5AD45] hover:text-white"
        >
          Contact us today. We map your next steps.
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
        Disclaimer: This blog is for informational purposes only. If you want to know anything in details, please contact Apex Advisor Group.
      </p>
    </article>
  );
};

export default TheRoleOfTaxPlanningInBusinessSuccession;
