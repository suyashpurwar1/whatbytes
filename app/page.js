// src/pages/index.js
"use client";
import Layout from "./components/Layout/Layout";
import SkillTestCard from "./components/Dashboard/SkillTestCard";

const Home = () => (
  <Layout>
    <br />
    <p>Skill Test</p>
    <br />
    <SkillTestCard />
  </Layout>
);

export default Home;
