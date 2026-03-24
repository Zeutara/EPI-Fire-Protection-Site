import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import BestSellers from "@/components/home/BestSellers";
import CategoryTiles from "@/components/home/CategoryTiles";
import NewArrivals from "@/components/home/NewArrivals";
import GiftGuides from "@/components/home/GiftGuides";
import SocialProof from "@/components/home/SocialProof";
import EmailCapture from "@/components/home/EmailCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <CategoryTiles />
      <NewArrivals />
      <GiftGuides />
      <SocialProof />
      <EmailCapture />
    </>
  );
}
