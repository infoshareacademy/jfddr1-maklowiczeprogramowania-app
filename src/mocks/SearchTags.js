const SpecializationSearchTagNamesDB = `[
    {"tagName":"Dla Ciebie" },
    {"tagName":"Back-End" },
    {"tagName":"Scrum Master" },
    {"tagName":"UI Designer"  },
    {"tagName":"Front-End" },
    {"tagName":"UX Designer"},
    {"tagName":"SEO Specialist" }
]`;

export const getSearchSpecializationTagNames = () =>
  JSON.parse(SpecializationSearchTagNamesDB);
