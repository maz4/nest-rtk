"use client";
import { Provider } from "react-redux";
import { setupStore } from "web/store";

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={setupStore()}>{props.children}</Provider>;
};
