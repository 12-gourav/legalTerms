import React from "react";
import { Route, Routes } from "react-router-dom";
import TermsAndConditionsForBakerslineGO from "./project/bakersline/TermsAgent";
import BakerslinePartnersTerms from "./project/bakersline/TermsPartner";

const App = () => {
  return (
    <Routes>
      <Route
        path="/bakersline/bakerslinego/terms_condition"
        element={<TermsAndConditionsForBakerslineGO />}
      />
      <Route
        path="/bakersline/bakerslinepartners/terms_condition"
        element={<BakerslinePartnersTerms />}
      />
    </Routes>
  );
};

export default App;
