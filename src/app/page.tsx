import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutAndVisit from "@/components/AboutAndVisit";
import ReservationsAndFooter from "@/components/ReservationsAndFooter";
import {
  HeroToDishesDivider,
  DishesToAboutDivider,
  AboutToReservationsDivider,
} from "@/components/SectionDividers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-aegean">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Coastal Wave Transition: Aegean Navy -> Soft Cream */}
      <HeroToDishesDivider />

      {/* 2. Featured Dishes Section */}
      <FeaturedDishes />

      {/* Soft Coastal Curve Transition: Soft Cream -> Warm Ivory */}
      <DishesToAboutDivider />

      {/* 3. About & Visit Section */}
      <AboutAndVisit />

      {/* Coastal Wave Transition: Warm Ivory -> Aegean Navy */}
      <AboutToReservationsDivider />

      {/* 4. Reservations & Footer Section */}
      <ReservationsAndFooter />
    </div>
  );
}
