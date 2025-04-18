import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'
import { formmatCurrency } from '@/utils/features'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()
  console.log('DetailPage:product', product)
  console.log('DetailPage:relatedProducts', relatedProducts)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 컴포넌트가 마운트된 직후에는 로딩 상태로 표시
    setIsLoading(true)

    // 데이터가 로드된 후 로딩 상태 해제
    if (product && product.id) {
      // 약간의 지연 효과를 줘서 로딩 화면을 확인할 수 있도록
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 0)

      return () => clearTimeout(timer)
    }
  }, [product])

  // 로딩 스피너 (부트 스트랩 이용)
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <main>
      <h2>DetailPage</h2>

      <div className={css.detailCon}>
        <div className={css.imgWrap}>
          <img src={`/public/img/${product.img}`} alt={product.title} />
          {product.discount > 0 && <p className={css.discount}>{product.discount} %</p>}
        </div>
        <div className={css.infoWrap}>
          <p className={css.title}>{product.title}</p>
          <p className={css.price}>{formmatCurrency(product.price)}</p>
          <p className={css.category}>{product.category}</p>
          <div className={css.btnWrap}>
            <div className={css.counterArea}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={css.addBtn}>장바구니 담기</button>
          </div>
        </div>
      </div>
      <div>텝메뉴</div>
      <div>관련상품 들어가는 곳</div>
    </main>
  )
}

export default DetailPage
