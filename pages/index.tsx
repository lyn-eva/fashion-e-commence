import type { NextPage } from 'next';
import ArticleSection from '../components/ArticleSection';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import ProductSection from '../components/ProductSection';
import StorySection from '../components/StorySection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <StorySection />
      <ArticleSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
