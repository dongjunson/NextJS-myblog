import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Comments() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const makeComments = () => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = false;
    script.setAttribute("repo", "dongjunson/NextJS-myblog");
    script.setAttribute("issue-term", "title");
    if (theme === "dark") {
      script.setAttribute("theme", "dark-blue");
    } else {
      script.setAttribute("theme", "github-light");
    }
    script.setAttribute("label", "blog-comment");

    if (ref.current) {
      ref.current.appendChild(script);
    }
  };

  const removeExistedComments = () => {
    let existingScript;
    if (ref.current) {
      existingScript = ref.current.querySelector(".utterances");
    }
    if (existingScript) {
      existingScript.remove();
    }
  };
  useEffect(() => {
    makeComments();
    removeExistedComments();
  }, [theme]);

  return <div ref={ref}></div>;
}
