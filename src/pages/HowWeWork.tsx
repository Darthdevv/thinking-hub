
import CapabilityCard from '../components/CapabilityCard';
import GoalCallToAction from '../components/GoalCallToAction';
import OurWayOfWorking from '../components/OurWayOfWorking'

const HowWeWork = () => {
  return (
    <div>
      <OurWayOfWorking />
      <CapabilityCard
        title="Leadership & Personal Mastery"
        description="We help leaders understand their unique capabilities, clarify their vision, and develop the skills required to lead an organization into the future."
        images={[
          "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
        ]}
      />

      <CapabilityCard
        title="Organizational Effectiveness"
        description="We help forward-thinking organizations assess community needs, translate insights into meaningful offerings, and build healthy, resilient organizations that deliver high-impact results."
        images={[
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        ]}
        reverse={true}
      />

      <CapabilityCard
        title="Innovation"
        description="Innovation is grounded in human-centered design, where insight, creativity, and action continuously feed each other..."
        images={[
          "https://images.unsplash.com/photo-1517248135467-4552e8d5e6a8?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop",
        ]}
      />

      <GoalCallToAction/>
    </div>
  );
}

export default HowWeWork
