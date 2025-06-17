import React, { useMemo, useState } from "react";
import usePlanFilter from "../hooks/usePlanFilter";
import Header from "./Header";
import TabMenu from "./TabMenu";
import FilterSort from "./FilterSort";
import PlanGrid from "./PlanGrid";
import FilterModal from "./FilterModal";
import styles from "./PlanCardSystem.module.css";

const PlanCardSystem = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // 정렬 및 나이대 필터 상태 추가
    const [currentSort, setCurrentSort] = useState("popularity");
    const [currentAgeGroup, setCurrentAgeGroup] = useState("all");

    const {
        appliedFilters,
        tempFilters,
        filteredPlans,
        setTempFilters,
        applyFilters,
        resetFilters,
        toggleApp,
        changeCategory,
    } = usePlanFilter();

    const getSortedPlans = useMemo(() => {
        let sortedPlans = [...filteredPlans];

        // 1️⃣ 정렬 적용
        switch (currentSort) {
            case "popularity":
                // 인기순 (popularityRank 낮은 순 = 더 인기)
                sortedPlans.sort((a, b) => {
                    const rankA = parseInt(a.popularityRank) || 999;
                    const rankB = parseInt(b.popularityRank) || 999;
                    return rankA - rankB;
                });
                break;

            case "priceLow":
                // 낮은 가격순
                sortedPlans.sort((a, b) => {
                    const priceA = parseInt(a.price) || 0;
                    const priceB = parseInt(b.price) || 0;
                    return priceA - priceB;
                });
                break;

            case "priceHigh":
                // 높은 가격순
                sortedPlans.sort((a, b) => {
                    const priceA = parseInt(a.price) || 0;
                    const priceB = parseInt(b.price) || 0;
                    return priceB - priceA;
                });
                break;

            case "dataHigh":
                // 데이터 많은 순
                sortedPlans.sort((a, b) => {
                    const getDataValue = (dataStr) => {
                        if (!dataStr) return 0;

                        // 무제한인 경우 최고값
                        if (
                            dataStr.includes("무제한") ||
                            dataStr.toLowerCase().includes("unlimited")
                        ) {
                            return 999999;
                        }

                        // 숫자 추출 (GB, MB 단위 고려)
                        const numbers = dataStr.match(/(\d+(?:\.\d+)?)/g);
                        if (!numbers) return 0;

                        let value = parseFloat(numbers[0]);

                        // 단위 변환 (GB = 1000MB로 계산)
                        if (dataStr.toUpperCase().includes("GB")) {
                            value = value * 1000;
                        } else if (dataStr.toUpperCase().includes("TB")) {
                            value = value * 1000000;
                        }
                        // MB는 그대로

                        return value;
                    };

                    const dataA = getDataValue(a.data);
                    const dataB = getDataValue(b.data);
                    return dataB - dataA; // 내림차순 (많은 순)
                });
                break;

            default:
                // 기본값은 그대로
                break;
        }

        // 2️⃣ 나이대 필터 적용
        if (currentAgeGroup !== "all") {
            sortedPlans = sortedPlans.filter((plan) => {
                if (!plan.ageGroup) return false;

                const planAge = parseInt(plan.ageGroup);
                const filterAge = parseInt(currentAgeGroup);

                // 나이대 범위 매칭 (±5년 범위)
                if (currentAgeGroup === "60") {
                    // 60대 이상
                    return planAge >= 60;
                } else {
                    // 20대, 30대, 40대, 50대
                    return planAge >= filterAge && planAge < filterAge + 10;
                }
            });
        }

        return sortedPlans;
    }, [filteredPlans, currentSort, currentAgeGroup]);

    // 📈 정렬 변경 핸들러
    const handleSortChange = (sortType) => {
        setCurrentSort(sortType);
        console.log("🔄 정렬 변경:", sortType);
    };

    // 👥 나이대 필터 변경 핸들러
    const handleAgeGroupChange = (ageGroup) => {
        setCurrentAgeGroup(ageGroup);
        console.log("👥 나이대 필터 변경:", ageGroup);
    };

    const handleApplyFilters = () => {
        applyFilters();
        setIsFilterOpen(false);
    };

    const getCategoryTitle = () => {
        const titles = {
            "5GLTE": "5G/LTE 요금제",
            Online: "온라인 전용 요금제",
            TabWatch: "태블릿/스마트워치 요금제",
            Dual: "듀얼넘버 플러스",
        };
        return titles[appliedFilters.category] || "요금제";
    };

    return (
        <div className={styles.container}>
            {/* 헤더 */}
            <Header
                onFilterOpen={() => setIsFilterOpen(true)}
                appliedFilters={appliedFilters}
                planCount={getSortedPlans.length} // 정렬된 결과 개수 표시
            />

            {/* 메인 컨텐츠 */}
            <div className={styles.mainContent}>
                {/* 탭 메뉴 */}
                <TabMenu
                    selectedCategory={appliedFilters.category}
                    onCategoryChange={changeCategory}
                />

                {/* 필터 및 정렬 */}
                <FilterSort
                    onSortChange={handleSortChange}
                    onAgeGroupChange={handleAgeGroupChange}
                    currentSort={currentSort}
                    currentAgeGroup={currentAgeGroup}
                />

                {/* 카테고리 제목 */}
                <div className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>{getCategoryTitle()}</h2>
                    <div className={styles.categoryDescription}>
                        <span>{getSortedPlans.length}개의 요금제가 있습니다.</span>
                        {/* 현재 적용된 정렬/필터 표시 */}
                        <div className={styles.currentFilters}>
                            {currentSort !== "popularity" && (
                                <span className={styles.filterTag}>
                                    {currentSort === "priceLow" && "낮은 가격순"}
                                    {currentSort === "priceHigh" && "높은 가격순"}
                                    {currentSort === "dataHigh" && "데이터 많은 순"}
                                </span>
                            )}
                            {currentAgeGroup !== "all" && (
                                <span className={styles.filterTag}>
                                    {currentAgeGroup === "60"
                                        ? "60대 이상"
                                        : `${currentAgeGroup}대`}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* 요금제 카드 그리드 */}
                <PlanGrid
                    plans={getSortedPlans} // 정렬된 결과 전달
                    onResetFilters={() => {
                        resetFilters();
                        setCurrentSort("popularity");
                        setCurrentAgeGroup("all");
                    }}
                />
            </div>

            {/* 필터 모달 */}
            <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                tempFilters={tempFilters}
                setTempFilters={setTempFilters}
                onApply={handleApplyFilters}
                onReset={() => {
                    resetFilters();
                    setCurrentSort("popularity");
                    setCurrentAgeGroup("all");
                }}
                onToggleApp={toggleApp}
            />
        </div>
    );
};

export default PlanCardSystem;
