import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/Dashboard";
import { Aadhaar } from "../view/dashboardhead/products/Aadhaar";
import { Aboutus } from "../view/dashboardhead/aboust-us/Aboutus";
import { Dashboardhead } from "../view/dashboardhead/headoption/Dashboardhead";
import { Lending } from "../view/dashboardhead/products/Lending";
import { Moneytransfer } from "../view/dashboardhead/products/Moneytransfer";
import { Nepalmoney } from "../view/dashboardhead/products/Nepalmoney";
import { Platform } from "../view/dashboardhead/platform/Platform";
import { Retailer } from "../view/dashboardhead/retailer/Retailer";
import { Sellinsurance } from "../view/dashboardhead/products/Sellinsurance";
import { Utility } from "../view/dashboardhead/products/Utility";
import { Dashboardfooter } from "../view/dashboradfooter/Dashboardfooter";
import { Login } from "../view/dashboardhead/login/Login";
import { Fdmt } from "../view/dashboradfooter/products/Fdmt";
import { Faeps } from "../view/dashboradfooter/products/Faeps";
import { Ffund } from "../view/dashboradfooter/products/Ffund";
import { Fcash } from "../view/dashboradfooter/products/Fcash";
import { Fpan } from "../view/dashboradfooter/products/Fpan";
import { Faccount } from "../view/dashboradfooter/products/Faccount";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboardhead" element={<Dashboardhead />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/moneytransfer" element={<Moneytransfer />} />
        <Route path="/aadhaar" element={<Aadhaar />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/sellinsurance" element={<Sellinsurance />} />
        <Route path="/nepalmoney" element={<Nepalmoney />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboardfooter" element={<Dashboardfooter />} />
        <Route path="/fdmt" element={<Fdmt />} />
        <Route path="/faeps" element={<Faeps />} />
        <Route path="/ffund" element={<Ffund />} />
        <Route path="/fcash" element={<Fcash />} />
        <Route path="/fpan" element={<Fpan />} />
        <Route path="/faccount" element={<Faccount />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
