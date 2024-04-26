import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavigationWrapper() {
  return (
    <div>
      <nav
        style={{
          paddingInline: 30,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link style={{ paddingInline: 20 }} to="/">
          Home
        </Link>
        <Link style={{ paddingInline: 20 }} to="/about">
          About
        </Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}


