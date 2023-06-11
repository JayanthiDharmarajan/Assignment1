import { Card } from "../../model/card.model";

export const cardData: Card[] = [
    {
    JobId: 1121,
    position: 'Software Developer',
    CompanyName: 'KLM Private LTD',
    SkillsRequired: 'C#,HTML,CSS,JavaScript,ASP.NET Core',
    WorkExperience: 5,
    SalaryRange: '80k - 90k',
    category: 'FullStack',
  },
  {
   JobId: 1186,
    position: 'UI Developer',
    CompanyName: 'XYZ Private LTD',
    SkillsRequired: 'HTML,CSS,JavaScript,BootStrap',
    WorkExperience: 2,
    SalaryRange: '60k - 70k',
    category: 'FrontEnd',
  },
  {
    JobId: 1275,
    position: 'Database Developer',
    CompanyName: 'ABC Private LTD',
    SkillsRequired: 'C#,MSSQL,ASP.NET Core',
    WorkExperience: 7,
    SalaryRange: '90k - 100k',
    category: 'BackEnd',
  },
  {
    JobId: 3471,
    position: 'Software Developer',
    CompanyName: 'SJM Private LTD',
    SkillsRequired: 'C#,HTML,CSS,JavaScript,ASP.NET Core',
    WorkExperience: 0-1,
    SalaryRange: '50k - 60k',
    category: 'FrontEnd',
  },
  {
    JobId: 4621,
    position: 'Software Developer',
    CompanyName: 'SSN Software Solutions',
    SkillsRequired: 'C#,HTML,CSS,JavaScript,ASP.NET Core',
    WorkExperience: 3-5,
    SalaryRange: '70k - 80k',
    category: 'FullStack',
  },
  {
    JobId: 2121,
    position: 'Software Developer',
    CompanyName: 'SunTech Consultancy Services',
    SkillsRequired: 'C#,HTML,CSS,JavaScript,ASP.NET Core',
    WorkExperience: 0,
    SalaryRange: '50k - 60k',
    category: 'FullStack',
  }
]

export enum category{
  ALL = "ALL",
  FullStack = "FullStack",
  BackEnd = "BackEnd",
  FrontEnd = "FrontEnd"
}
