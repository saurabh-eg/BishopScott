import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeatureGrid from "@/components/home/FeatureGrid";
import ImpactSection from "@/components/home/ImpactSection";
import ContentBlock from "@/components/home/ContentBlock";
import NewsSection from "@/components/home/NewsSection";
import AcademicWings from "@/components/home/AcademicWings";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />

      <Hero />

      {/* 2. Your Future/Features Grid */}
      <FeatureGrid />

      {/* 3. Our Impact */}
      <ImpactSection />

      {/* 4. Content Block: Why Teach/Why Join */}
      <ContentBlock
        title="Why Choose Bishop Scott?"
        description="We believe in nurturing the whole child. Our curriculum extends beyond textbooks to include leadership, ethics, and community service. With mentorship from the finest educators, your daughter will be prepared not just for exams, but for life."
        imageSrc="/images/classroom.png"
        imageAlt="Teacher guiding students"
        ctaText="Meet Our Staff"
        ctaLink="/staff"
      />

      {/* 5. Alternating Content Block */}
      <ContentBlock
        title="Holistic Development"
        description="From the sports field to the science lab, we provide opportunities for every student to discover their passion. Our 10-acre campus is equipped with world-class facilities to support academic, athletic, and artistic pursuits."
        imageSrc="/images/sports.png"
        imageAlt="Students playing sports"
        ctaText="Explore Facilities"
        ctaLink="/facilities"
        isReversed={true}
      />

      {/* 6. Wings/Facilities Section */}
      <AcademicWings />

      {/* 7. News */}
      <NewsSection />

      <Footer />
    </main>
  );
}
