"use client";
import PharmacyAdsBannerComponent from "@/components/PharmacyAdsBanner/PharmacyAdsBannerComponent";
import PharmacyBrandsAndTestsComponent from "@/components/PharmacyBrandsAndTests/PharmacyBrandsAndTestsComponent";
import PharmacyDealsComponent from "@/components/PharmacyDeals/PharmacyDealsComponent";
import PharmacyFaqAndContactComponent from "@/components/PharmacyFaqAndContact/PharmacyFaqAndContactComponent";
import PharmacyFooterComponent from "@/components/PharmacyFooter/PharmacyFooterComponent";
import PharmacyHeroComponent from "@/components/PharmacyHero/PharmacyHeroComponent";
import PharmacyHotSellersComponent from "@/components/PharmacyHotSellers/PharmacyHotSellersComponent";
import PharmacyServiceComponent from "@/components/PharmacyService/PharmacyServiceComponent";
import PharmacyHeader from "@/components/PharmayHeader/PharmacyHeader";
import React, { useEffect } from "react";
import AOS from "aos";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (in ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <main>
      <PharmacyHeader />
      <PharmacyHeroComponent />
      <PharmacyServiceComponent />
      <PharmacyDealsComponent />
      <PharmacyHotSellersComponent />
      <PharmacyBrandsAndTestsComponent />
      <PharmacyAdsBannerComponent />
      <PharmacyFaqAndContactComponent />
      <PharmacyFooterComponent />
    </main>
  );
};

export default LandingPage;
