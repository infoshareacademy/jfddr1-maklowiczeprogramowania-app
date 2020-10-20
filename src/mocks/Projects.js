const projectsDB = `[
    {"projectTitle":"Strona za dwa zeta", "projectDescription":"To jest najlepszy projekt na świecie, nie ma lepszego", "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" },
    {"projectTitle":"Strona za zeta","projectDescription":"To jest projekt za zeta, taniej się, Panie, nie da" , "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" },
    {"projectTitle":"Strona za pięć zeta","projectDescription":"To jest projekt za pięć zeta, drogo, ale będzie zrobiony dobrze" , "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" }
]`;

export const getProjectsData = () => JSON.parse(projectsDB);
