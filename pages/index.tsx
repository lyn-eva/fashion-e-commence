import type { NextPage } from 'next';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import StorySection from '../components/StorySection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <StorySection />
    </>
  );
};

export default Home;
