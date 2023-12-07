import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, highlightPattern = null }) {
  const copyToClipboard = () => {
    const pattern = /[A-Z][a-z]{1,3}/g;
    const iconType = name.match(pattern);

    const copyToClipboardValue = `import { ${name} } from "@vertisanpro/react-icons/${iconType[0].toLowerCase()}"`;
    copy(copyToClipboardValue);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center",
    });
  };

  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part, index) =>
          part.match(highlightPattern) ? <b key={index}>{part}</b> : part,
        );
    return name;
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
    </div>
  );
}

export default Icon;
