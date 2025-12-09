import DesignThinkingHub from '../components/DesignThinkingHub'
import ProgramTracks from '../components/ProgramTracks'
import IntroSection from '../components/IntroSection'
import WayOfWorking from '../components/WayOfWork'
import DataInfoSection from '../components/DataInfoSection'

const LandingPage = () => {
    return (
        <div className='bg-white'>
            <DesignThinkingHub />
            <IntroSection />
            <WayOfWorking/>
            <ProgramTracks />
            <DataInfoSection/>
        </div>
    )
}

export default LandingPage