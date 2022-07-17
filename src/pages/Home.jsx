import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <div>
        <Navigation />
        <ThemeButton themeName={"#겨울방한템"} />
        <ThemeButton themeName={"#따순머그컵"} />
        <ThemeSection>
          <ThemeButton themeName={"#겨울방한템"} />
          <ThemeButton themeName={"#따순머그컵"} />
        </ThemeSection>
        <GrayLine />
      </div>
      <div>
      <ProductSection>
        <ProductCard
          name="비숑 블랙 머그잔"
          description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
@@ -28,9 +32,25 @@ const Home = () => {
          description="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그."
          thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"
        />
      </div>
      </ProductSection>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;