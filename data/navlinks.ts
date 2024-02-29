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
  { title: "Camping ⛺", link: "/camping", length: allJs.length }
];

export default navlinks;
