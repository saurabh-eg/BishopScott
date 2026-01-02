import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeatureGrid from "@/components/home/FeatureGrid";
import ImpactSection from "@/components/home/ImpactSection";
import ContentBlock from "@/components/home/ContentBlock";
import NewsSection from "@/components/home/NewsSection";

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

      {/* 6. Wings/Facilities Section (Simplified 'Our Schools' equivalent) */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-12">Our Academic Wings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Wing 1 */}
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition cursor-pointer">
              <h3 className="text-2xl font-bold font-serif text-brand-gold mb-4">Primary Wing</h3>
              <p className="text-gray-200">Building a strong foundation with joy and curiosity. (Grades KG - 5)</p>
            </div>
            {/* Wing 2 */}
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition cursor-pointer border border-brand-gold">
              <h3 className="text-2xl font-bold font-serif text-brand-gold mb-4">Middle Wing</h3>
              <p className="text-gray-200">Exploration and skill development during distinct formative years. (Grades 6 - 8)</p>
            </div>
            {/* Wing 3 */}
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition cursor-pointer">
              <h3 className="text-2xl font-bold font-serif text-brand-gold mb-4">Senior Wing</h3>
              <p className="text-gray-200">Preparing for board exams and higher education with rigor. (Grades 9 - 12)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. News */}
      <NewsSection />

      <Footer />
    </main>
  );
}
