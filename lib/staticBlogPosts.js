import TaxBenefitsOfEarlyBusinessSuccessionPlanning from "@/components/static-blogs/blogs/tax-benefits-of-early-business-succession-planning";
import TheImpactOfRetirementContributionsOnYourTaxReturns from "@/components/static-blogs/blogs/the-impact-of-retirement-contributions-on-your-tax-returns";
import HowToUseLawFirmBookkeepingSoftware from "@/components/static-blogs/blogs/how-to-use-law-firm-bookkeeping-software";

const taxBenefitsImage = {
  image: {
    url: "/image/static-blogs/tax-benefits-early-business-succession-planning-meeting.webp",
  },
  altText:
    "Financial advisor consulting clients on tax benefits of early business succession planning and wealth transfer strategy",
  title: "Tax Benefits of Early Business Succession Planning Consultation",
  description:
    "Professional financial advisor guiding business owners through early succession planning strategies, focusing on tax benefits, wealth transfer, estate planning, and long-term financial security in a corporate consultation setting.",
  caption:
    "Advisor discussing tax-efficient succession planning strategies with business owners",
};

const retirementContributionsImage = {
  image: {
    url: "/image/static-blogs/retirement-tax-planning-financial-strategy.webp",
  },
  altText:
    "Financial advisor reviewing retirement planning, tax strategies, and investment contribution reports",
  title: "Retirement Tax Planning and Wealth Strategy Services",
  description:
    "Financial planning workspace featuring retirement contribution summaries, tax strategy reports, wealth-building resources, and investment analysis tools for long-term financial growth and retirement preparation.",
  caption: "Advisor reviewing retirement contribution strategies and tax planning reports",
};

const lawFirmBookkeepingSoftwareImage = {
  image: {
    url: "/image/static-blogs/law-firm-bookkeeping-software-tax-preparation.webp",
  },
  altText:
    "Legal accounting team using bookkeeping software for law firm tax preparation and financial reporting",
  title: "Law Firm Bookkeeping Software for Tax Preparation",
  description:
    "Accounting professionals reviewing financial reports, trust accounts, and tax preparation data using law firm bookkeeping software to improve compliance and financial management.",
  caption:
    "Law firm accounting professionals using bookkeeping software to manage tax preparation and financial records.",
};

export const staticBlogPosts = [
  {
    _id: "static-how-to-use-law-firm-bookkeeping-software",
    title: "How to Use Law Firm Bookkeeping Software for Tax Preparation",
    slug: "how-to-use-law-firm-bookkeeping-software",
    published: true,
    createdAt: "2026-05-24T00:00:00.000Z",
    excerpt:
      "Learn how law firm bookkeeping software supports tax preparation, trust-account compliance, reporting, deductions, and cleaner CPA review.",
    metaTitle: "Tax Prep Guide With Law Firm Bookkeeping Software",
    metaDescription:
      "Why do some firms face audits while others breeze through tax season? We trace the financial systems separating compliant practices from tax-penalty traps.",
    featuredImage: lawFirmBookkeepingSoftwareImage,
    body:
      "<p>Learn how law firm bookkeeping software supports tax preparation, trust-account compliance, reporting, deductions, and cleaner CPA review.</p>",
    StaticContent: HowToUseLawFirmBookkeepingSoftware,
  },
  {
    _id: "static-the-impact-of-retirement-contributions-on-your-tax-returns",
    title: "The Impact of Retirement Contributions on Your Tax Returns",
    slug: "the-impact-of-retirement-contributions-on-your-tax-returns",
    published: true,
    createdAt: "2026-05-15T00:00:00.000Z",
    excerpt:
      "See how retirement contributions cut your tax bill and help Florida residents maximize deductions and credits in 2026.",
    metaTitle: "Retirement Contributions & Tax Returns 2026",
    metaDescription:
      "See how retirement contributions cut your tax bill. Tampa's Apex Advisor Group helps Florida residents maximize every deduction and credit in 2026.",
    featuredImage: retirementContributionsImage,
    body:
      "<p>See how retirement contributions cut your tax bill and help Florida residents maximize deductions and credits in 2026.</p>",
    StaticContent: TheImpactOfRetirementContributionsOnYourTaxReturns,
  },
  {
    _id: "static-tax-benefits-of-early-business-succession-planning",
    title: "Tax Benefits of Early Business Succession Planning",
    slug: "tax-benefits-of-early-business-succession-planning",
    published: true,
    createdAt: "2026-05-12T00:00:00.000Z",
    excerpt:
      "Understand how planning business succession early helps reduce taxes, preserve wealth, and ensure a stable transition for future ownership.",
    metaTitle: "Why Early Business Succession Planning Saves Tax?",
    metaDescription:
      "Understand how planning business succession early helps reduce taxes, preserve wealth, and ensure a stable transition for future ownership.",
    featuredImage: taxBenefitsImage,
    body:
      "<p>Understand how planning business succession early helps reduce taxes, preserve wealth, and ensure a stable transition for future ownership.</p>",
    StaticContent: TaxBenefitsOfEarlyBusinessSuccessionPlanning,
  },
];

