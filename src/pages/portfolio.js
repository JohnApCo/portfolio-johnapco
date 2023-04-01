import Layout from "../layouts";
import TitleLayout from "../layouts/TitleLayout";

export default function Portfolio() {
  return <div>Portfolio</div>;
}

Portfolio.getLayout = function getLayout(page) {
  return (
    <Layout>
      <TitleLayout title={"my portfolio"} titleBg={"Works"}>
        {page}
      </TitleLayout>
    </Layout>
  );
};
