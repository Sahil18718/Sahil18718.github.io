// data.ts
export interface AboutData {
  description: string;
  stats: {
    hoursOfCoding: string;
    dsaProblems: string;
    projects: string;
  };
  resumeUrl: string;
}

export const data: AboutData = {
  description: `Hello, I'm Sahil Malviya, an adaptable professional with a background in generative AI, poised to transition into software engineering.
    Proficient in teamwork, payment gateways, mobile app development, subscription systems, and many more skills. Skilled in both backend and frontend development, with a proven track record of innovation.`,
  stats: {
    hoursOfCoding: '1500+',
    dsaProblems: '500+',
    projects: '12+'
  },
  resumeUrl: '/assets/pdf/Sahil-Malviya-Resume.pdf'
};
