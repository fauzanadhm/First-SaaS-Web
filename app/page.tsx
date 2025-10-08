import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject='math'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject='language'
          duration={45}
          color='#bde7ff'
        />
      </section>

      <section>
        <CompanionsList></CompanionsList>
        <CTA></CTA>
      </section>
    </main>
  );
};

export default Page;
