import React from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";

const ShopPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initProductsData = useLoaderData();
    const sortCase = searchParams.get("_sort");

    const data = initProductsData.products.data;
    const { per_page } = initProductsData; //구조분해 할당으로 initProductsData의 per_page 가져오기

    const handleSort = (sortOption) => {
        const params = new URLSearchParams(searchParams);
        params.set("_page", 1);
        params.set("_sort", sortOption);
        navigate(`/?${params}`);
    };

    const sortOptions = [
        { option: "id", label: "등록순" },
        { option: "price", label: "낮은 가격순" },
        { option: "-price", label: "높은 가격순" },
        { option: "discount", label: "낮은 할인순" },
        { option: "-discount", label: "높은 할인순" },
    ];
    return (
        <div className="shop-page">
            {/* 헤더 */}
            <h2>Shop All</h2>

            {/* 정렬 드롭다운 */}
            <div className="sort-section">
                <div className="sort-dropdown">
                    <ul className="sort-options">
                        {sortOptions.map((sortOpt) => (
                            <li key={sortOpt.option}>
                                <button
                                    onClick={() => handleSort(sortOpt.option)}
                                    className={sortCase === sortOpt.option ? "active" : ""}
                                >
                                    {sortOpt.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 상품 목록 */}
            <div className="product-list">
                <ul className="products-grid">
                    {data.map((product) => (
                        <li key={product.id} className="product-card">
                            <div className="product-image">
                                <span>{product.img}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <div className="product-price">
                                    <span className="price">
                                        {product.price.toLocaleString()}원
                                    </span>
                                    <span className="discount">{product.discount}% 할인</span>
                                </div>
                                <div className="product-meta">
                                    <span className="category">{product.category}</span>
                                    <span className="id">ID: {product.id}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShopPage;
