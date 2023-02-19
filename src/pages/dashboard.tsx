import React from "react";
import { Box } from "@chakra-ui/react";
import {
  inventory,
  sales,
  purchase,
  product,
} from "@/component/common/constants";
import GridTopLayout from "@/component/data/Dashboard/GridTopLayout";
import GraphGrid from "@/component/data/Dashboard/GraphGrid";
import BottomGrid from "@/component/data/Dashboard/BottomGrid";

const index = () => {
  return (
    <Box>
      <GridTopLayout
        array={sales}
        array2={inventory}
        label1="Sales Overview"
        label2="Inventory Summary"
      />
      <GridTopLayout
        array={purchase}
        array2={product}
        label1="Purchase Overview"
        label2="Product Summary"
      />
      <GraphGrid />
      <BottomGrid />
    </Box>
  );
};

export default index;
