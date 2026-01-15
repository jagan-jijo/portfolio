import NyanCat from "@/components/nyan-cat";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
import { withBasePath } from "@/data/config";

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene={withBasePath("/assets/404.spline")}
          style={{ height: "100vh" }}
        />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
