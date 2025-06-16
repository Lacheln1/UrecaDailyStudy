import React, { useMemo, useState } from "react";
import { planData } from "../data/planData";

const usePlanFilter = () => {
    //적용된 필터 (실제로 화면에 반영되고 있는 필터 상태 즉, 메인화면)
    const [appliedFilters, setAppliedFilters] = useState({
        network: "5G/LTE",
        carrier: "",
        data: "",
        selectedApps: [],
    });

    //임시 필터(모달에서 사용자가 선택하고 있는 임시 상태 즉, 모달 안에서만 보임)
    const [tempFilters, setTempFilters] = useState(appliedFilters);

    //필터링 된 요금제
    const filteredPlans = useMemo(() => {
        return planData.filter((plan) => {
            const networkMatch = appliedFilters.network === "5G/LTE" || appliedFilters.net;
        });
    });
    return <div></div>;
};

export default usePlanFilter;
