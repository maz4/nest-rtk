"use client";
import { Provider } from "react-redux";
import { setupStore } from "web/store";

const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={setupStore()}>{props.children}</Provider>;
};

export default Providers;
