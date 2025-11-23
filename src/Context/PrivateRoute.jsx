"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js routing
import { AuthContext } from "./AuthProvider";
// import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); // login না থাকলে redirect
    }
  }, [user, loading, router]);

  if (loading) return <p>loading....</p>//<Loader />; // spinner বা loading component

  if (user) {
    return <>{children}</>; // user logged in → show children
  }

  return null; // user না থাকলে কিছু দেখাবে না (redirect হয়ে যাবে)
};

export default PrivateRoute;
