import type { Insight } from "../../types/Insight";
const Strings = {
  bannerMessage: "✨ Welcome to our website! Stay tuned for updates ✨",

  hero: {
    title: "World Famous ASTROLOGER",
    subtitle: "GET RID OF ALL YOUR LIFE PROBLEM",
    services: "Astrologer | Tarot Card | Numerologist",
    contact: "FEEL FREE TO CONTACT US NOW",
  },

  about: {
    title:"World Famous Guru Maa Yashika Ji",
    heading: "About Guru Maa Yashika Ji",
    subheading: "Internationally Renowned Vedic Astrologer",
  },

  features: {
    satisfiedClients: "100k+ satisfied client",
    trustedAstrologer: "Trusted & verified astrologer",
    privacy: "100% privacy guaranteed",
    button: "Call Us Now",
  },

  ABOUT_SECTION: {
    TITLE: "Guru Maa Yashika Ji",
    INTRO:
      "Welcome to the mystical realm guided by the celestial wisdom of Astrologer Yashika Ji. With an unwavering passion for astrology, tarot cards, and numerology, Yashika Ji is a seasoned practitioner committed to unraveling the cosmic mysteries and offering profound insights into life’s intricate tapestry.",

    DESCRIPTION_1:
      "Guru Maa Yashika Ji is more than a skilled practitioner—she is a beacon of solace for those navigating the complexities of life. With a unique blend of astrological expertise, intuitive tarot readings, and precise numerological analysis, Yashika Ji has earned a reputation for providing accurate remedies, solutions, and predictions.",

    DESCRIPTION_2:
      "Yashika Ji’s divine journey involves delving into the cosmic energies to decode the patterns that shape our destinies. Her services span a wide spectrum, addressing issues such as love problems, breakup dilemmas, challenges in love marriages, and navigating the complexities of divorce. Business hurdles find resolution under her guidance, and debt relief becomes a tangible reality through her astrological insights.",

    ACCORDION: {
      HUSBAND_WIFE: {
        TITLE: "Husband & Wife Dispute",
        CONTENT:
          "We know that each and every couple faces a lot of issues in their married life. So are you a married couple suffering from problems or disputes.",
      },
      LOVE_BACK: {
        TITLE: "Get Your Love Back",
        CONTENT:
          "Astrological remedies and guidance to rekindle lost love and heal broken relationships.",
      },
      RELATIONSHIP: {
        TITLE: "Relationship Problem",
        CONTENT:
          "Guidance and astrological insights for resolving conflicts and building strong, healthy relationships.",
      },
    },

    CTA_BUTTON: "Call Me Now",
  },

  ASTRO_SOLUTIONS: {
    TITLE: "Instant Astrology Solution",
    CARDS: [
      {
        id: 1,
        title: "Break-up Problem",
        description:
          "Yashika Ji provides empathetic guidance and actionable insights to navigate the emotional turmoil of a break-up, helping individuals find closure and move forward with resilience.",
        button: "Call Now",
        image: "/images/breakup.jpg",
      },
      {
        id: 2,
        title: "Bring Ex Love Back",
        description:
          "Utilizing her profound astrological insights and spiritual expertise, Yashika Ji assists in rekindling the flame of lost love, guiding clients on a transformative journey to bring back their ex-love.",
        button: "Call Now",
        image: "/images/exlove.jpg",
      },
      {
        id: 3,
        title: "Marriage Problem",
        description:
          "For those caught in the complexities of unrequited love, Yashika Ji offers a unique blend of celestial wisdom and practical advice, fostering emotional healing and harmony.",
        button: "Call Now",
        image: "/images/marriage.jpg",
      },
    ],
  },

  problemStrings : {
  divorce: {
    title: "Divorce Problems",
    description:
      "The Best Way To Solve Divorce Problems Is Through Astrology. Astrology Is Essential If One Wants To Prevent Divorce Because It Can Quickly Identify The True Cause Of A Couple’s Separation.",
    image: "/images/astro2.png", // place in public/images/
  },
  love: {
    title: "Love Problem",
    description:
      "Eliminate Pointless Arguments And Other Problems Leading Them To Disagree To Bring Love Back Into A Couple’s Relationship And Speed Its Healing.",
    image: "/images/astro3.png",
  },
  family: {
    title: "Family Problems",
    description:
      "Family problems are the big reason for stress among people and now one can opt for astrology and keep the family stress away. This makes a better bond between members.",
    image: "/images/astro4.png",
  },
},
// Add this to Strings.ts
ASTRO_CARDS: [
  {
    id: 1,
    title: "01",
    description:
      "Yashika Ji delves into the cosmic energies, offering personalized insights to answer the poignant question of whether a past love will return, providing hope and clarity for the future.",
    button: "Call Now",
  },
  {
    id: 2,
    title: "02",
    description:
      "Yashika Ji’s holistic approach to marital discord involves a deep understanding of the celestial influences on relationships, providing tailored solutions to bring harmony and understanding between spouses.",
    button: "Call Now",
  },
  {
    id: 3,
    title: "03",
    description:
      "Navigating the societal challenges of intercaste unions, Yashika Ji uses her astrological acumen to align cosmic energies, facilitating a harmonious path for couples seeking to bridge cultural divides.",
    button: "Call Now",
  },
],

SERVICE_SECTION: {
  TITLE: "Yashika Ji's Astrology & Vastu Services",
  SUBTITLE:
    "Experience the transformative power of the best astrologer in India. Yashika Ji’s can help you with your career, relationships, or health. Her expert guidance will help you navigate your unique life path with confidence and clarity.",
  SERVICES: [
    {
      id: 1,
      title: "Gemstone",
      description:
        "Astrological gemstone therapy is a cornerstone of Yashika Sharma Ji's remedies for mental peace.",
      image: "/images/service-gemstone.jpg",
    },
    {
      id: 2,
      title: "Matchmaking",
      description:
        "Yashika Ji facilitates the union of hearts, overcoming societal barriers, and providing astrological support",
      image: "/images/service-matchmaking.jpg",
    },
    {
      id: 3,
      title: "Lost Love Back",
      description:
        "With a combination of astrological prowess and spiritual interventions, Yashika Ji guides individuals",
      image: "/images/service-lovelost.jpg",
    },
    {
      id: 4,
      title: "Healing Spell",
      description:
        "Drawing upon mystical energies, Yashika Ji casts powerful spells for relationship healing",
      image: "/images/service-healing.jpg",
    },
  ],
},

insights: {
    title: "Discover Insights and Trends",
    cards: [
      {
        title: "Best Love life predictions in Mumbai",
        description:
          "Best Love life predictions in Mumbai Call for Consultation in the vibrant city of Mumbai...",
        badge: "BEST ASTROLOGER IN INDIA",
        flag: "/images/flags/india.png",
        image: "/images/insights/mumbai.jpg",
        link: "/insights/mumbai",
        readMore: "READ MORE »",
      },
      {
        title: "Best Zodiac compatibility in Toronto",
        description:
          "Best Zodiac compatibility in Toronto Call for Consultation in the dynamic city of Toronto...",
        badge: "BEST ASTROLOGER IN CANADA",
        flag: "/images/flags/canada.png",
        image: "/images/insights/toronto.jpg",
        link: "/insights/toronto",
        readMore: "READ MORE »",
      },
      {
        title: "Best Horoscope analysis in Sydney",
        description:
          "Best Horoscope analysis in Sydney Call for Consultation in the vibrant city of Sydney...",
        badge: "BEST ASTROLOGER IN AUSTRALIA",
        flag: "/images/flags/australia.png",
        image: "/images/insights/sydney.jpg",
        link: "/insights/sydney",
        readMore: "READ MORE »",
      },
    ] as Insight[],
  },

  footer: {
  about:
    "Guru Maa Yashika Ji, a beacon of celestial guidance, offers a diverse array of services to address the intricate facets of love, relationships, and marital harmony.",
  services: {
    title: "Main Services",
    items: [
      "Love Marriage Specialist",
      "Bring back your Lost Love",
      "Love problem solution",
      "Will my ex come back?",
      "Intercaste Marriage specialist",
      "Relationship Healing Spell",
      "One sided love problem solution",
      "Match Making For Love",
      "Husband wife problem solution",
      "Ex-Love Reconnection Advice",
    ],
  },
  subscribe: {
    title: "Subscribe Now",
    description: "Don’t miss our future updates! Get Subscribed Today!",
    placeholder: "Your mail here",
  },
},



  tagline: "Best Astrology Solution",
  profession: "ASTROLOGER",
  name: "Yashika Ji"
};

export default Strings;
