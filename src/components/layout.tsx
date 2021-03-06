import React, { FC } from "react";
import { Link } from "gatsby";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
