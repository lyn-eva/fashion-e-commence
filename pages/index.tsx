import type { NextPage } from 'next';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
    </>
  );
};

export default Home;
