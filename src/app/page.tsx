import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import QuickStats from "@/components/home/QuickStats";
import FeatureGrid from "@/components/home/FeatureGrid";
import ImpactSection from "@/components/home/ImpactSection";
import ContentBlock from "@/components/home/ContentBlock";
import NewsSection from "@/components/home/NewsSection";
import AcademicWings from "@/components/home/AcademicWings";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import Testimonials from "@/components/home/Testimonials";
import TrustBadges from "@/components/home/TrustBadges";
import ImportantDates from "@/components/home/ImportantDates";
import VirtualTour from "@/components/home/VirtualTour";
import FeeStructure from "@/components/home/FeeStructure";
import PhotoGallery from "@/components/home/PhotoGallery";
import AdmissionBanner from "@/components/home/AdmissionBanner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />

      <Hero />

      {/* Quick Statistics */}
      <QuickStats />

      {/* Features Grid */}
      <FeatureGrid />

      {/* Our Impact */}
      <ImpactSection />

      {/* Principal's Message */}
      <PrincipalMessage />

      {/* Content Block: Why Choose */}
      <ContentBlock
        title="Why Choose Bishop Scott?"
        description="We believe in nurturing the whole child through a curriculum that extends beyond textbooks. Our educational philosophy focuses on leadership, ethics, and community service, ensuring that our students are prepared for the complexities of the 21st century."
        features={[
          "Global Standards of Education",
          "Values-Driven Leadership",
          "Safe and Nurturing Campus",
          "Expert Faculty & Mentorship"
        ]}
        imageSrc="/images/classroom.png"
        imageAlt="Teacher guiding students"
        ctaText="Meet Our Staff"
        ctaLink="/staff"
      />

      {/* Content Block: Holistic Development */}
      <ContentBlock
        title="Holistic Development"
        description="From the sports field to the science lab, we provide limitless opportunities for every student to discover their passion. Our campus is equipped with world-class facilities to support academic excellence, athletic prowess, and artistic expression."
        features={[
          "Advanced Science Labs",
          "Professional Sports Grounds",
          "Vibrant Arts & Music Programs",
          "Modern IT & STEM Facilities"
        ]}
        imageSrc="/images/sports.png"
        imageAlt="Students playing sports"
        ctaText="Explore Facilities"
        ctaLink="/facilities"
        isReversed={true}
      />

      {/* Academic Wings */}
      <AcademicWings />

      {/* Trust Badges & Certifications */}
      <TrustBadges />

      {/* Virtual Campus Tour */}
      <VirtualTour />

      {/* Important Dates */}
      <ImportantDates />

      {/* Fee Structure */}
      <FeeStructure />

      {/* Testimonials */}
      <Testimonials />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* News Section */}
      <NewsSection />

      {/* Admission CTA Banner */}
      <AdmissionBanner />

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
