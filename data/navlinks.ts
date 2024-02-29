import {
  allCampings
} from "contentlayer/generated";

export interface Navlinks {
  title: string;
  link: string;
  length?: number;
}

const navlinks: Navlinks[] = [
  { title: "Camping ⛺", link: "/camping", length: allCampings.length }
];

export default navlinks;
