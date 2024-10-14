import Link from "next/link";
import React from "react";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="wrapper">
      <ul className="list">
        <li><Link href='/about/contacts'>contacts</Link></li>
        <li><Link href='/about/team'>team</Link></li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
