import { Route, Routes } from "react-router-dom";
import TermsAndConditionsForBakerslineGO from "./project/bakersline/TermsAgent";
import BakerslinePartnersTerms from "./project/bakersline/TermsPartner";
import BakerslineTerms from "./project/bakersline/TermsBakersline";

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
            <Route
        path="/bakersline/bakersline/terms_condition"
        element={<BakerslineTerms />}
      />
    </Routes>
  );
};

export default App;
