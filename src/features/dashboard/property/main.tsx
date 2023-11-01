import Button from "@/components/button/button";
import FooterDashboard from "@/components/footer/FooterDashboard";
import HeaderPage from "@/components/headerPage/HeaderPage";
import React from "react";

const Property = () => {
  return (
    <div className="mx-4 my-4 min-h-[calc(100vh-120px)]">
      <HeaderPage
        title="Property"
        description="Lorem Ipsum..."
        button={
          <Button
            label="+Property"
            style="primary"
            size="large"
            state="regular"
          />
        }
      />

      <FooterDashboard />
    </div>
  );
};

export default Property;
