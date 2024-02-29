import {
  allAlgorithms,
  allGits,
  allJs,
  allNexts,
  allOthers,
  allReacts,
  allTypes,
  allDataBases,
  allBackEnds,
  allServers,
  allArticles,
} from "contentlayer/generated";

export interface Navlinks {
  title: string;
  link: string;
  length?: number;
}

const navlinks: Navlinks[] = [
  { title: "Portfolio Notion", link: "https://upbeat-spoonbill-0f2.notion.site/Portfolio-87844fbd525943cba8a49eb56ed7efab" },
  { title: "Camping", link: "/camping", length: allJs.length }
];

export default navlinks;
