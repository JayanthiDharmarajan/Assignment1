export interface Card {
  JobId: string | number;
  position: string;
  CompanyName: string;
  SkillsRequired: string;
  WorkExperience: number;
  SalaryRange: string | number;
  category: string;
}

export enum Category {
  All = 'All',
  FrontEnd = 'FrontEnd',
  BackEnd = 'BackEnd',
  FullStack = 'FullStack'
}


