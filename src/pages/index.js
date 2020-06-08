import React from "react" //functional component shortuct: rfc
import { Link } from "gatsby" //package from gatsby, no need to install it
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import { Services } from "../components/Home/Services"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ipsam maxime commodi neque nihil? Ullam pariatur in ipsum consequatur natus a officiis soluta!"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
