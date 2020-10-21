const projectsDB = `[
    {"projectTitle":"Strona za dwa zeta", "projectDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu enim a ante venenatis faucibus. Nunc turpis ante, eleifend vitae urna ut, molestie varius est. Nunc et orci sed massa condimentum auctor. Curabitur accumsan purus et turpis consequat, vel fringilla dolor mattis.", "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" },
    {"projectTitle":"Strona za zeta","projectDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu enim a ante venenatis faucibus. Nunc turpis ante, eleifend vitae urna ut, molestie varius est. Nunc et orci sed massa condimentum auctor. Curabitur accumsan purus et turpis consequat, vel fringilla dolor mattis." , "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" },
    {"projectTitle":"Strona za pięć zeta","projectDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu enim a ante venenatis faucibus. Nunc turpis ante, eleifend vitae urna ut, molestie varius est. Nunc et orci sed massa condimentum auctor. Curabitur accumsan purus et turpis consequat, vel fringilla dolor mattis." , "projectImgSrc": "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" }
]`;

export const getProjectsData = () => JSON.parse(projectsDB);
