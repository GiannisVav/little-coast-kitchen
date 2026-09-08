import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import OurStory from "@/components/OurStory";
import VisitUs from "@/components/VisitUs";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import {
  HeroToDishesDivider,
  DishesToAboutDivider,
  AboutToReservationsDivider,
} from "@/components/SectionDividers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-aegean">
      {/* 1. Sticky Transparent Top Bar */}
      <Navigation />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* Coastal Wave Transition: Aegean Navy -> Soft Cream */}
      <HeroToDishesDivider />

      {/* 3. Featured Dishes Section */}
      <FeaturedDishes />

      {/* Soft Coastal Curve Transition: Soft Cream -> Warm Ivory */}
      <DishesToAboutDivider />

      {/* 4. Our Story Section */}
      <OurStory />

      {/* 5. Visit Us Section */}
      <VisitUs />

      {/* Coastal Wave Transition: Soft Cream/Ivory -> Aegean Navy */}
      <AboutToReservationsDivider />

      {/* 6. Reservation Section */}
      <ReservationSection />

      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
}
