import * as Articles from "contentlayer/generated";

const categoryMap = {
  camping: Articles.allCampings
};

type CategoryTypes = keyof typeof categoryMap;

export const getCategoryDocs = (category: CategoryTypes | string) => {
  if (category in categoryMap) {
    return categoryMap[category as CategoryTypes];
  }
};
