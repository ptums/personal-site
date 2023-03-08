const PageTitle = ({ title }: { title: string }) => (
  <h1
    style={{ letterSpacing: 8 }}
    className="text-4xl text-emerald-800 tracking-wider mb-1 font-bold"
  >
    {title}
  </h1>
);

export default PageTitle;
