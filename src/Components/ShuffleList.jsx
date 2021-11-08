import {useState, useMemo } from "react";
import { ChartData } from "./ChartData";

export const ShuffleList = () => {
    const [filter, setFilter] = useState("all");
    const filteredPortfolio = useMemo(() => {
      if (filter === "all") return ChartData;
      return ChartData.filter((p) => p.category === filter);
    }, [filter]);
  
    return [filteredPortfolio, setFilter ]
}
