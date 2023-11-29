"use client";

import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`;

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
