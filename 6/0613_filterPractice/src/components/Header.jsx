import React from "react";
import styles from "./Header.module.css";

const Header = ({ onFilterOpen, appliedFilters, planCount }) => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={styles.leftSection}>
                        <button onClick={onFilterOpen} className={styles.filterButton}>
                            <span>🔍</span>
                            필터
                        </button>

                        <div className={styles.appliedFilters}>
                            {appliedFilters.network !== "5G/LTE" && (
                                <span className={styles.filterTag}>{appliedFilters.network}</span>
                            )}
                            {appliedFilters.dataPrice && (
                                <span className={styles.filterTag}>{appliedFilters.dataPrice}</span>
                            )}
                            {appliedFilters.dataType && (
                                <span className={styles.filterTag}>{appliedFilters.dataType}</span>
                            )}
                            {appliedFilters.selectedApps.length > 0 && (
                                <span className={styles.filterTag}>
                                    앱 {appliedFilters.selectedApps.length}개
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={styles.planCount}>{planCount}개 요금제</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
