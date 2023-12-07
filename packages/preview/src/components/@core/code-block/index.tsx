import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import { IoClipboard } from "@vertisanpro/react-icons/io5";

export default function CodeBlock({ code, language }) {
  const copyToClipboard = () => {
    copy(code);
    toast.success(`Copied to clipboard`, {
      position: "bottom-center",
    });
  };

  return (
    <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code`} style={style}>
          <a onClick={copyToClipboard} className="prism-code--copy">
            <IoClipboard />
          </a>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
