import Link from "next/link";

const Navbar = () => (
  <nav style={{ display: "flex", justifyContent: "space-between" }}>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background-color: #d8d8d8;
        color: #fff;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 30%;
      }
      li a {
        color: #000000;
        text-decoration: none;
      }
    `}</style>
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
      <li></li>
    </ul>
    <Link href="/profile">
      <button className="button-class">Create a profile</button>
    </Link>
  </nav>
);

export default Navbar;
