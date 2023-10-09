'use client'
import React from "react";
import ModalHandler from "../components/client/modalAsset";
import { NextUIProvider } from "@nextui-org/react";
function page() {
  return (
    <NextUIProvider>
      <div>page</div>

      <ModalHandler></ModalHandler>
    </NextUIProvider>
  );
}

export default page;
