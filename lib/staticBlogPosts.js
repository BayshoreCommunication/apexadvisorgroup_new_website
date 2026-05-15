import TaxBenefitsOfEarlyBusinessSuccessionPlanning from "@/components/static-blogs/blogs/tax-benefits-of-early-business-succession-planning";
import TheImpactOfRetirementContributionsOnYourTaxReturns from "@/components/static-blogs/blogs/the-impact-of-retirement-contributions-on-your-tax-returns";

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

export const staticBlogPosts = [
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

