import React from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <Container>
      <PageTitle title="About" />
      <h1>Fragrantica Team</h1>
      <p>Fragrantica Team</p>
      <p>
        Fragrantica is an online encyclopedia of perfumes, a perfume magazine,
        and a community of perfume lovers. Fragrantica informs its readers about
        new perfume launches, famous fragrances, and less-known but wonderful
        scents. Together we travel in time and space, where perfumes are the
        shining stars we use to navigate. We learn about their history, discover
        far-away places, and respectfully explore the life we see around us,
        always taking time to be amazed by Nature. Fragrantica is a place to
        learn from each other and relax in the company of your soul mates.
      </p>
      <p>
        Fragrantica is an independent magazine in the United States. Fragrantica
        is available in several different languages and is open to everybody.
        You are welcome to contribute your reviews, read our articles and other
        content for your individual information, and participate in our forum
        discussions. We only ask you to consider each other to enable everyone
        to enjoy their experience.
      </p>
      <p>
        We have over 40 active team members and contributors. Fragrantica is
        published in 17 languages, and last time we checked, we had editors from
        27 countries.
      </p>
      <p>Press Relations</p>
      <p>
        If you are a perfume brand, we want to hear news from you, no matter big
        or small! We prefer email contact (feel free to email:
        <a className="ms-2 text-decoration-none" href="#">
          editor@fragrantica-perfume.com
        </a>{" "}
        or any team members directly). The more comprehensive your material is,
        the easier it will be for our editors to include your creations in our
        encyclopedia or announce them in the News section. You can send samples
        and press materials to the following postal address:
      </p>
      <p>
        FRAGRANTICA
        <br />
        3830 Valley Centre Drive
        <br />
        Suite 705-123
        <br />
        San Diego, CA 92130
        <br />
        United States
        <br />
        P:+1-858-876-2290 *
      </p>
      <p>
        * <b>Note:</b> Fragrantica is a perfume warehouse management & review
        website. We do not sell perfumes officially .
      </p>
      <p>
        <b>The address listed above is for Press Relations purposes only.</b>{" "}
        Please direct all legal matters to the principal place of business as
        stated in the{" "}
        <a className="ms-2 text-decoration-none" href="#">
          terms of service
        </a>
        .
      </p>
    </Container>
  );
};

export default About;
