import bloodReportDesktop1x from "../..//images/blood-report1xdesktop.png";
import bloodReportDesktop2x from "../../images/blood-report2xdesktop.png";
import bloodReportDesktop1xWebp from "../../images/blood-report1xdesktopWebp.webp";
import bloodReportDesktop2xWebp from "../../images/blood-report2xdesktopWebp.webp";

import bloodReportTablet1x from "../../images/blood-report1xtablet.png";
import bloodReportTablet2x from "../../images/blood-report2xtablet.png";
import bloodReportTablet1xWebp from "../../images/blood-report1xtabletWebp.webp";
import bloodReportTablet2xWebp from "../../images/blood-report2xtabletWebp.webp";

import bloodReportMobile1x from "../../images/blood-report1xmobile.png";
import bloodReportMobile2x from "../../images/blood-report2xmobile.png";
import bloodReportMobile1xWebp from "../../images/blood-report1xmobileWebp.webp";
import bloodReportMobile2xWebp from "../../images/blood-report2xmobileWebp.webp";
import { GlobalStyles } from "../styles/GlobalStyles.styled";

import { Picture } from "../../../pages/TrainingPage/TrainingPage.styled";
import { Header } from "../Header/Header";

function NotFound() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Picture>
        <source
          srcSet={bloodReportDesktop2xWebp}
          type="image/webp"
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={bloodReportDesktop1xWebp}
          type="image/webp"
          media="(min-width: 1200px)"
        />
        <source
          srcSet={bloodReportTablet2xWebp}
          type="image/webp"
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={bloodReportTablet1xWebp}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={bloodReportMobile2xWebp}
          type="image/webp"
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={bloodReportMobile1xWebp}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={bloodReportDesktop2x}
          media="(min-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={bloodReportDesktop1x} media="(min-width: 767px)" />
        <source
          srcSet={bloodReportTablet2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={bloodReportTablet1x} media="(max-width: 767px)" />
        <source
          srcSet={bloodReportMobile2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={bloodReportMobile1x} media="(max-width: 767px)" />
        <img src={bloodReportMobile1x} alt="User" />
      </Picture>
    </>
  );
}
export default NotFound;
