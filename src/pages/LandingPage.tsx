import DesignThinkingHub from '../components/DesignThinkingHub'
import IntroSection from '../components/IntroSection'
import WayOfWorking from '../components/WayOfWork'

const LandingPage = () => {
    return (
        <div className='bg-white'>
            <DesignThinkingHub />
            <IntroSection />
            <WayOfWorking/>
        </div>
    )
}

export default LandingPage