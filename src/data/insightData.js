// src/data/insightData.js

export const CATEGORIES = [
  "Explore All",
  "SaaS",
  "Edtech",
  "Telecommunication",
  "Fashion & Apparel",
  "Construction",
  "Design Process",
];

// AI-generated / royalty-free images from Unsplash (all AI/tech/design themed)
const AI_IMAGES = [
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1676573820830-15a6dd049d94?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1686191128892-3b37add4c844?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1680783954745-abe5a4b73e9e?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1655720031554-a929595ffad7?auto=format&w=800&q=80",
];

const AI_DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1676573820830-15a6dd049d94?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1686191128892-3b37add4c844?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1680783954745-abe5a4b73e9e?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1655720031554-a929595ffad7?auto=format&w=1400&q=85",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&w=1400&q=85",
];

export const POSTS = [
  {
    id: 1,
    category: "Design Process",
    author: "Oriture",
    authorRole: "Design Team",
    date: "March 08, 2026",
    readTime: "6 min read",
    title: "30+ Branding Statistics That Reveal The Trends Shaping 2026",
    slug: "branding-statistics-trends-2026",
    thumbnail: AI_IMAGES[0],
    heroImage: AI_DETAIL_IMAGES[0],
    excerpt:
      "Brand perception has never been more volatile — or more powerful. These statistics reveal exactly where attention, trust, and conversion are heading.",
    tags: ["Branding", "Statistics", "Design"],
    content: [
      {
        type: "paragraph",
        text: "Brand identity is no longer just a logo or a colour palette — it is the complete emotional fingerprint of a company. As we move deeper into 2026, the data tells a clear story: brands that invest in cohesive visual systems and authentic storytelling are outperforming competitors at every stage of the funnel.",
      },
      {
        type: "heading",
        text: "Why Branding Data Matters More Than Ever",
      },
      {
        type: "paragraph",
        text: "With AI-generated visuals flooding every channel, the cost of creating 'good enough' design has dropped to near zero. This paradox has made genuine brand differentiation more valuable, not less. When anyone can produce polished imagery instantly, the brands that win are the ones with a distinctive, consistent point of view.",
      },
      {
        type: "stats",
        items: [
          { value: "89%", label: "of consumers stay loyal to brands that share their values" },
          { value: "3.5×", label: "more revenue growth for brands with consistent presentation" },
          { value: "73%", label: "of CMOs cite visual consistency as a top retention driver" },
          { value: "7 sec", label: "average time to form a first brand impression" },
        ],
      },
      {
        type: "heading",
        text: "The Consistency Dividend",
      },
      {
        type: "paragraph",
        text: "Consistent brand presentation across all platforms increases revenue by up to 23%. Yet fewer than half of businesses have a documented brand guideline system. The gap between knowing and doing is where significant competitive advantage lives in 2026.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1676573820830-15a6dd049d94?w=1200&q=80",
        caption: "Data visualisation tools are transforming how teams understand brand performance.",
      },
      {
        type: "heading",
        text: "Digital-First Brand Architecture",
      },
      {
        type: "paragraph",
        text: "Mobile accounts for over 60% of all brand touchpoints. This means your logo, typography, and spacing choices are being evaluated on a 375px screen first. Digital-first brand architecture — designing for the smallest canvas before scaling up — is now table stakes, not a trend.",
      },
      {
        type: "quote",
        text: "The brands that will dominate the next decade are not the ones with the biggest budgets — they are the ones with the clearest point of view.",
        author: "Oriture Design Team",
      },
      {
        type: "paragraph",
        text: "As we look ahead, the interplay between AI tooling, authentic human creativity, and strategic brand systems will define which companies break through the noise. The statistics are clear: invest in brand, and the market responds.",
      },
    ],
  },
  {
    id: 2,
    category: "SaaS",
    author: "Oriture",
    authorRole: "Product Team",
    date: "March 05, 2026",
    readTime: "8 min read",
    title: "How SaaS Onboarding Design Directly Impacts 90-Day Retention",
    slug: "saas-onboarding-design-retention",
    thumbnail: AI_IMAGES[1],
    heroImage: AI_DETAIL_IMAGES[1],
    excerpt:
      "The first 90 days determine whether a user stays forever or churns silently. Here is the design framework that top SaaS companies use to win those critical weeks.",
    tags: ["SaaS", "UX", "Retention", "Product"],
    content: [
      {
        type: "paragraph",
        text: "In SaaS, activation is everything. A user who reaches their 'aha moment' within the first session is up to 4× more likely to become a paying long-term customer. Yet most SaaS onboarding flows are built by engineers optimising for completion rates, not designers optimising for comprehension and delight.",
      },
      {
        type: "heading",
        text: "The Onboarding Retention Curve",
      },
      {
        type: "paragraph",
        text: "The data is unambiguous: 40–60% of users who sign up for a free trial never return after their first session. The onboarding experience is the single highest-leverage investment a SaaS team can make, yet it is chronically under-resourced.",
      },
      {
        type: "stats",
        items: [
          { value: "47%", label: "of users abandon SaaS tools within the first week" },
          { value: "4×", label: "higher LTV for users who complete onboarding" },
          { value: "60%", label: "reduction in churn with contextual tooltips vs. static walkthroughs" },
          { value: "$1.6T", label: "global SaaS market projected value by 2030" },
        ],
      },
      {
        type: "heading",
        text: "Progressive Disclosure Over Information Overload",
      },
      {
        type: "paragraph",
        text: "The single most common onboarding mistake is showing users everything at once. Progressive disclosure — revealing features contextually, exactly when a user needs them — reduces cognitive load and dramatically improves task completion rates. Think of it as a conversation, not a brochure.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&q=80",
        caption: "Modern SaaS dashboards prioritise clarity and contextual guidance over feature density.",
      },
      {
        type: "quote",
        text: "Great onboarding does not teach users how to use your product. It helps users achieve their first meaningful outcome as fast as possible.",
        author: "Oriture Product Team",
      },
    ],
  },
  {
    id: 3,
    category: "Edtech",
    author: "Oriture",
    authorRole: "Research Team",
    date: "February 28, 2026",
    readTime: "7 min read",
    title: "The UX Principles Behind the Most Effective Learning Platforms of 2026",
    slug: "ux-principles-effective-learning-platforms-2026",
    thumbnail: AI_IMAGES[2],
    heroImage: AI_DETAIL_IMAGES[2],
    excerpt:
      "EdTech is having a design renaissance. The platforms students actually finish have one thing in common: they treat learning as an emotional journey, not a content delivery problem.",
    tags: ["Edtech", "UX", "Learning", "Design"],
    content: [
      {
        type: "paragraph",
        text: "Course completion rates for online learning platforms average just 12–15%. That is not a content problem — the internet has more high-quality educational material than any human could consume in a lifetime. It is a design problem, and the EdTech companies solving it are seeing extraordinary growth.",
      },
      {
        type: "heading",
        text: "Emotion-Driven Learning Design",
      },
      {
        type: "paragraph",
        text: "The neuroscience is clear: emotional engagement is a prerequisite for long-term memory formation. The most effective learning platforms bake emotional hooks into every interaction — progress celebrations, personalised milestones, social proof from peers, and narrative arcs that give learners a sense of becoming, not just knowing.",
      },
      {
        type: "stats",
        items: [
          { value: "12%", label: "average course completion rate industry-wide" },
          { value: "68%", label: "completion rate for platforms with social/cohort features" },
          { value: "3.2×", label: "higher engagement with progress visualisation" },
          { value: "$350B", label: "global EdTech market size by 2025" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=1200&q=80",
        caption: "AI-powered personalisation is reshaping how learning paths are constructed and delivered.",
      },
      {
        type: "quote",
        text: "The best EdTech UX does not feel like software. It feels like a mentor who always has time for you.",
        author: "Oriture Research Team",
      },
    ],
  },
  {
    id: 4,
    category: "Design Process",
    author: "Oriture",
    authorRole: "Strategy Team",
    date: "February 20, 2026",
    readTime: "5 min read",
    title: "Why Design Systems Are Your Most Undervalued Business Asset",
    slug: "design-systems-undervalued-business-asset",
    thumbnail: AI_IMAGES[3],
    heroImage: AI_DETAIL_IMAGES[3],
    excerpt:
      "Teams that build robust design systems ship 40% faster and maintain 3× more visual consistency. Here is how to make the business case — and the design case.",
    tags: ["Design System", "Process", "Scale"],
    content: [
      {
        type: "paragraph",
        text: "A design system is the closest thing to a compound interest account in product development. Every component built once and documented properly pays dividends every time a new feature is designed, every time a new engineer joins the team, and every time a stakeholder asks why the product looks different on mobile versus desktop.",
      },
      {
        type: "heading",
        text: "The Hidden Cost of Inconsistency",
      },
      {
        type: "paragraph",
        text: "Without a design system, every design decision is made in isolation. Buttons have five slightly different border radii. Spacing follows twelve different invisible rules. Typography scales vary by designer preference. The result is a product that feels stitched together rather than considered — and users feel that incoherence, even if they cannot articulate it.",
      },
      {
        type: "stats",
        items: [
          { value: "40%", label: "faster shipping velocity for teams with mature design systems" },
          { value: "3×", label: "more visual consistency across product surfaces" },
          { value: "60%", label: "reduction in design-to-dev handoff friction" },
          { value: "18mo", label: "average time to see ROI from a design system investment" },
        ],
      },
      {
        type: "quote",
        text: "A design system is not a constraint. It is a vocabulary. And a rich vocabulary makes every conversation better.",
        author: "Oriture Strategy Team",
      },
    ],
  },
  {
    id: 5,
    category: "Fashion & Apparel",
    author: "Oriture",
    authorRole: "Brand Team",
    date: "February 14, 2026",
    readTime: "6 min read",
    title: "Digital Lookbooks: How Fashion Brands Are Reinventing the Shopping Experience",
    slug: "digital-lookbooks-fashion-brands-shopping-experience",
    thumbnail: AI_IMAGES[4],
    heroImage: AI_DETAIL_IMAGES[4],
    excerpt:
      "The physical lookbook is not dead — it has evolved into an interactive, shoppable, personalised digital experience that converts at 2× the rate of traditional e-commerce.",
    tags: ["Fashion", "E-commerce", "Digital", "UX"],
    content: [
      {
        type: "paragraph",
        text: "Fashion's transition to digital-first was accelerated by necessity but is now being driven by aspiration. The brands leading this shift are not simply digitising physical catalogues — they are reimagining what it means to discover, try on, and fall in love with clothing through a screen.",
      },
      {
        type: "heading",
        text: "The Shoppable Story Format",
      },
      {
        type: "paragraph",
        text: "Interactive digital lookbooks that blend editorial photography, video, and inline purchasing are outperforming standard product listing pages by significant margins. When a customer can shop a full outfit from within an aspirational story rather than navigating individual product pages, the average order value increases by 35–55%.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
        caption: "AI-powered virtual try-on is becoming standard for premium fashion e-commerce.",
      },
      {
        type: "quote",
        text: "We are not selling clothes. We are selling a version of the customer they want to become.",
        author: "Oriture Brand Team",
      },
    ],
  },
  {
    id: 6,
    category: "Telecommunication",
    author: "Oriture",
    authorRole: "Product Team",
    date: "February 08, 2026",
    readTime: "9 min read",
    title: "Simplifying the Complex: UX Strategy for Telecom Self-Service Portals",
    slug: "ux-strategy-telecom-self-service-portals",
    thumbnail: AI_IMAGES[5],
    heroImage: AI_DETAIL_IMAGES[5],
    excerpt:
      "Telecom companies lose millions annually to avoidable call-centre interactions. Smart self-service UX is the fix — and the data shows just how large the opportunity is.",
    tags: ["Telecom", "Self-Service", "UX", "Enterprise"],
    content: [
      {
        type: "paragraph",
        text: "The average telecom customer service call costs between $8 and $14 to handle. The average self-service digital interaction costs $0.12. For a mid-sized carrier handling 10 million customer contacts per year, shifting even 30% of those to self-service represents hundreds of millions in savings. The barrier is almost always UX.",
      },
      {
        type: "heading",
        text: "Why Telecom Portals Fail",
      },
      {
        type: "paragraph",
        text: "Telecom products are genuinely complex — bundled services, dynamic pricing, contractual obligations, and technical configurations create a dense information landscape. Most portals fail because they replicate this complexity faithfully rather than abstracting it intelligently. Customers do not want to understand how their service works. They want to pay their bill, upgrade their plan, and get back to their day.",
      },
      {
        type: "stats",
        items: [
          { value: "$14", label: "average cost per live agent call vs. $0.12 digital self-service" },
          { value: "72%", label: "of customers prefer self-service for simple queries" },
          { value: "45%", label: "drop in support tickets after well-designed portal launch" },
          { value: "2.4×", label: "higher NPS for telecom brands with strong digital UX" },
        ],
      },
      {
        type: "quote",
        text: "The best telecom UX makes complexity invisible. The customer should never have to think about how their service works.",
        author: "Oriture Product Team",
      },
    ],
  },
  {
    id: 7,
    category: "Construction",
    author: "Oriture",
    authorRole: "Digital Team",
    date: "January 30, 2026",
    readTime: "7 min read",
    title: "How Construction Companies Are Using Digital Platforms to Win More Bids",
    slug: "construction-digital-platforms-win-more-bids",
    thumbnail: AI_IMAGES[6],
    heroImage: AI_DETAIL_IMAGES[6],
    excerpt:
      "The construction industry's digital transformation is moving faster than most realise. Companies with strong digital presence and proposal tools are winning 40% more competitive bids.",
    tags: ["Construction", "Digital", "B2B", "Growth"],
    content: [
      {
        type: "paragraph",
        text: "Construction has long been one of the least digitised industries globally. But the tide has turned sharply. Project owners are now evaluating contractors not just on price and experience, but on their operational sophistication — and digital tools have become a proxy for that sophistication.",
      },
      {
        type: "heading",
        text: "The Digital Bid Advantage",
      },
      {
        type: "paragraph",
        text: "Interactive digital proposals — complete with 3D visualisations, timeline tools, budget calculators, and case study portfolios — are converting at dramatically higher rates than traditional PDF submissions. The signal they send is clear: this company is organised, modern, and able to manage complexity.",
      },
      {
        type: "stats",
        items: [
          { value: "40%", label: "more bids won by companies with strong digital proposal tools" },
          { value: "67%", label: "of project owners say digital capabilities influence contractor selection" },
          { value: "3.1×", label: "higher engagement with interactive vs. static project proposals" },
          { value: "22%", label: "of construction firms have a mature digital strategy" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1200&q=80",
        caption: "Digital project management dashboards give construction teams unprecedented visibility.",
      },
      {
        type: "quote",
        text: "In construction, the contract goes to the team that looks most capable of delivering. Digital presence is now part of capability.",
        author: "Oriture Digital Team",
      },
    ],
  },
  {
    id: 8,
    category: "SaaS",
    author: "Oriture",
    authorRole: "Growth Team",
    date: "January 22, 2026",
    readTime: "6 min read",
    title: "Pricing Page Design: The Subtle Science Behind SaaS Conversion",
    slug: "pricing-page-design-saas-conversion",
    thumbnail: AI_IMAGES[7],
    heroImage: AI_DETAIL_IMAGES[7],
    excerpt:
      "Your pricing page is the highest-stakes design surface in your product. These evidence-backed principles can increase conversion by 20–35% without changing your actual prices.",
    tags: ["SaaS", "Pricing", "Conversion", "Design"],
    content: [
      {
        type: "paragraph",
        text: "The pricing page is where intent becomes decision. It is the page with the highest commercial stakes in any SaaS product, and it is consistently under-designed. Most pricing pages are built by product managers using spreadsheet logic, not by designers using conversion psychology.",
      },
      {
        type: "heading",
        text: "The Anchoring Effect in Pricing Design",
      },
      {
        type: "paragraph",
        text: "Price anchoring — presenting a higher price first to make the target price feel more reasonable — is one of the most robust findings in behavioural economics, and it translates directly to SaaS pricing page layout. Teams that implement proper anchoring in their pricing hierarchy see meaningful lifts in mid-tier plan selection, which is typically the highest-margin option.",
      },
      {
        type: "stats",
        items: [
          { value: "35%", label: "conversion lift with optimised pricing page layout" },
          { value: "2×", label: "higher mid-tier selection with anchor pricing" },
          { value: "68%", label: "of buyers select the middle plan when properly framed" },
          { value: "4 sec", label: "time users spend reading pricing before deciding to scroll" },
        ],
      },
      {
        type: "quote",
        text: "A great pricing page does not explain your product. It makes the decision feel obvious.",
        author: "Oriture Growth Team",
      },
    ],
  },
  {
    id: 9,
    category: "Design Process",
    author: "Oriture",
    authorRole: "Creative Team",
    date: "January 15, 2026",
    readTime: "5 min read",
    title: "Motion Design in Product UI: When Animation Helps and When It Hurts",
    slug: "motion-design-product-ui-animation",
    thumbnail: AI_IMAGES[8],
    heroImage: AI_DETAIL_IMAGES[8],
    excerpt:
      "Animation is one of the most powerful tools in a product designer's kit — and one of the most frequently misused. This framework will help you decide when to animate and when to stay still.",
    tags: ["Motion", "Animation", "UI", "Design"],
    content: [
      {
        type: "paragraph",
        text: "Motion in product UI is not decoration — it is communication. Every animation makes an implicit promise about what just happened, what is about to happen, and how the system works. Used well, animation reduces cognitive load and creates a sense of place. Used poorly, it creates friction, confusion, and the distinctive feeling of a product that is 'trying too hard'.",
      },
      {
        type: "heading",
        text: "The Four Functions of UI Animation",
      },
      {
        type: "paragraph",
        text: "Every animation in a product UI should serve at least one of four functions: orientation (helping the user understand where they are in a spatial hierarchy), feedback (confirming that an action was received), transition (easing the cognitive jump between two states), or delight (adding a moment of unexpected joy without interrupting the task flow). If an animation does not serve one of these functions, it should be cut.",
      },
      {
        type: "stats",
        items: [
          { value: "42%", label: "of users cite 'sluggish animations' as a reason to abandon an app" },
          { value: "200ms", label: "maximum duration for micro-interaction feedback animations" },
          { value: "38%", label: "increase in perceived quality with well-timed transitions" },
          { value: "60fps", label: "target frame rate for animations to feel smooth and premium" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=1200&q=80",
        caption: "Fluid motion design requires a deep understanding of both physics and human perception.",
      },
      {
        type: "quote",
        text: "The best UI animation is the one the user never consciously notices — but would immediately miss if it were gone.",
        author: "Oriture Creative Team",
      },
    ],
  },
];

export const POSTS_PER_PAGE = 9;