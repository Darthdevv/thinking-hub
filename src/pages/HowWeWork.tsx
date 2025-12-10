
import { useTranslation } from 'react-i18next';
import CapabilityCard from '../components/CapabilityCard';
import GoalCallToAction from '../components/GoalCallToAction';
import OurWayOfWorking from '../components/OurWayOfWorking'
import { useEffect } from 'react';
import img1 from '../assets/images/Rectangle 47.png'
import img2 from "../assets/images/Rectangle 45.png";
import img3 from "../assets/images/Rectangle 46.png";
import img4 from "../assets/images/Rectangle 47 (1).png";

const HowWeWork = () => {
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);
  return (
    <div>
      <OurWayOfWorking />
      <CapabilityCard
        title={t("howweworktitle1")}
        description={t("howweworkdesc1")}
        images={[
          img1,
        ]}
      />

      <CapabilityCard
        title={t("howweworktitle2")}
        description={t("howweworktdesc2")}
        images={[
          img3, img2
        ]}
        reverse={true}
      />

      <CapabilityCard
        title={t("howweworktitle3")}
        description={t("howweworkdesc3")}
        images={[
          img4
        ]}
      />

      <GoalCallToAction />
    </div>
  );
}

export default HowWeWork
