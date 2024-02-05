import Image from "next/image";
import { prefersDarkMode } from "../../functions/preferDarkMode";

import logo from "./logo.png";
import logoLight from "./logo.light.png";

export default function LogoThemed() {
  if (prefersDarkMode()) {
    return <Image src={logo} alt="logo" priority width={250} />;
  }

  return <Image src={logoLight} alt="logo" priority width={250} />;
}
