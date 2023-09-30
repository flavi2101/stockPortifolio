'use client'
import React from "react";
import NewAssetButton from "../components/client/newAssetButton";
import ModalHandler from "../components/client/modalAsset";
import { NextUIProvider } from "@nextui-org/react";
function page() {
  return (
    <NextUIProvider>
      <div>page</div>
      <NewAssetButton></NewAssetButton>
      <ModalHandler></ModalHandler>
    </NextUIProvider>
  );
}

export default page;
