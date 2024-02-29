import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const configDocumentType = (docName: string, filePath: string) => {
  return defineDocumentType(() => ({
    name: docName,
    contentType: "mdx",
    filePathPattern: `${filePath}/*.mdx`,
    fields: {
      title: { type: "string", required: true },
      date: { type: "string", required: true },
      description: { type: "string", required: true },
      category: { type: "string", required: true },
    },
    computedFields: {
      slug: {
        type: "string",
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
      },
    },
  }));
};
const Camping = configDocumentType("Camping", "camping");


export default makeSource({
  contentDirPath: "posts",
  documentTypes: [
    Camping
  ],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
});
