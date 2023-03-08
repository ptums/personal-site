import { Metadata } from "next";
import PageTitle from "../../components/PageTitle";

export const metadata: Metadata = {
  title: "Previous Work | Peter Tumulty Web Developer",
  description:
    "I provide a variety of different digital services, so you can focus on your customers, clients, and buisness operations.",
};

const Page = () => (
  <div>
    <div className="text-center py-6">
      <PageTitle title="Contact" />
    </div>
  </div>
);

export default Page;
