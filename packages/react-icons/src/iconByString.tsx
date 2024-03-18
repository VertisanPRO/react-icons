import * as React from "react";
import { Folder } from "./Folder";

export default async (folder: Folder, name: string): Promise<JSX.Element> => {
  const module = await import(`./${folder}/index.esm.js`);
  const icon = module[name];

  if (typeof icon === "function") return icon;
  return <></>;
};
