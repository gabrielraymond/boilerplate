import Button from "@/components/button/button";
import HeaderPage from "@/components/headerPage/HeaderPage";
import React from "react";

const Property = () => {
  return (
    <div className="mx-4 my-4">
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

      <Button label="Button" style="primary" size="large" state="regular" />
      <Button label="Button" style="secondary" size="regular" state="active" />
      <Button label="Button" style="outlined" size="regular" state="active" />
      
    </div>
  );
};

export default Property;
