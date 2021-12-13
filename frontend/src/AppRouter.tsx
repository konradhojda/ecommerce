import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { path } from "./App";
import PageFallback from "./components/PageFallback/PageFallback";

const AppRouter = () => (
  <Suspense fallback={<PageFallback />}>
    <Switch>
      <Route path={path.productScreen} component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path={path.cartScreen} component={CartScreen} />
    </Switch>
  </Suspense>
);

export default AppRouter;
