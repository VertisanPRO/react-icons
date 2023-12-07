import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE } from "@utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
        This project is made for VertisanPRO projects. No support will be
        providen outside of the projects
      </p>

      <p>
        <a href="https://github.com/VertisanPRO/react-icons">GitHub &#8599;</a>
      </p>
    </Container>
  );
}
