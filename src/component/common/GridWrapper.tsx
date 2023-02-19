import React from "react";
import { Grid } from "@chakra-ui/react";

const GridWrapper = ({ dashboard, sub, subb, children }: any) => {
  return (
    <Grid
      w={"100%"}
      gap={sub ? "0px" : "20px"}
      templateColumns={
        dashboard
          ? ["repeat(1,1fr)", "repeat(1,1fr)", "repeat(1,1fr)", "repeat(5,1fr)"]
          : sub
          ? ["repeat(2,1fr)", "repeat(4,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]
          : subb
          ? "repeat(2,1fr)"
          : ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]
      }
      marginBottom="20px"
    >
      {children}
    </Grid>
  );
};

export default GridWrapper;
