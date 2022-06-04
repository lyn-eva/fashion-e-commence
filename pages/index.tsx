import type { NextPage } from 'next';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection />
    </>
  );
};

export default Home;
