"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <BillboardHero title="Welcome to MemeMoon!" subtitle="Join the fun and explore our token journey!" />
    <SplitAbout description="MemeMoon is a playful approach to crypto, combining humor and opportunity for all. Dive into our journey of meme-friendly engagement!" />
    <HowToBuy3D title="How to Buy MemeMoon" steps={[{title: 'Step 1', description: 'Connect your wallet.', image: '/images/placeholder1.avif', position: 'left', isCenter: false}, {title: 'Step 2', description: 'Purchase tokens using ETH.', image: '/images/placeholder2.avif', position: 'center', isCenter: true}, {title: 'Step 3', description: 'Enjoy the journey!', image: '/images/placeholder3.avif', position: 'right', isCenter: false}]} />
    <PatternTokenomics title="Tokenomics Overview" description="Our tokenomics combine sustainability and growth, ensuring a brighter future for all holders." kpiItems={[{value: '10M', description: 'Max Supply'}, {value: '1M', description: 'Initial Liquidity'}, {value: '250K', description: 'Community Rewards'}]} />
    <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="MemeMoon Logo" logoText="MemeMoon" />
  );
}