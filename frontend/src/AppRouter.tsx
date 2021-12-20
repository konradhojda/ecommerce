import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { path } from "./App";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import PageFallback from "./components/PageFallback/PageFallback";
import SigninScreen from "./screens/SigninScreen";
import Page404 from "./components/Page404/Page404";
import AddItem from "./screens/AddItem/AddItem";

const AppRouter = () => (
  <Suspense fallback={<PageFallback />}>
    <Switch>
      <Route path={path.productScreen} component={ProductScreen}></Route>
      <Route path={path.signin} component={SigninScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path={path.cartScreen} component={CartScreen} />
      {/*<Route path={path.register} component={RegisterScreen} />*/}
      <Route path={path.addItem} component={AddItem} />
      <Route component={Page404} />
    </Switch>
  </Suspense>
);

export default AppRouter;
