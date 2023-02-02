import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
      label: "Counter",
      path: "/counter",
    },
  ];

  const renderLinks = links.map((link) => (
    <Link
      className="mb-3"
      activeClassame="font-bold border-l-4 border-blue-500 pl-2"
      key={link.label}
      to={link.path}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderLinks}
    </div>
  );
};

export default Sidebar;
