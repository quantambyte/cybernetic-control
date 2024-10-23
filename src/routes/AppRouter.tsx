import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserItemSkeleton } from "../components/UserItem";

const UserList = lazy(() => import("../components/UserList"));

/**
 * Central routing configuration with lazy-loaded components.
 * @module AppRouter
 */
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<UserItemSkeleton length={12} />}>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
