import withTransition from "../components/animate/withTransition";
import TitleLayout from "../layouts/TitleLayout";

function Portfolio() {
  return (
    <TitleLayout title={"my portfolio"} titleBg={"Works"}>
      <span>Portfolio</span>
    </TitleLayout>
  );
}
Portfolio = withTransition(Portfolio);
export default Portfolio;
