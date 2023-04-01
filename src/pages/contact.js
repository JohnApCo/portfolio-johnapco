import Layout from "../layouts";
import TitleLayout from "../layouts/TitleLayout";

export default function Contact() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-4">
        <h3 className="uppercase">Don&apos;t be shy</h3>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <p>lore,asdasdasdasda</p>
        <p>lore,asdasdasdasda</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <form action="" method="post"></form>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <TitleLayout title={"get in touch"} titleBg={"Contact"}>
        {page}
      </TitleLayout>
    </Layout>
  );
};
