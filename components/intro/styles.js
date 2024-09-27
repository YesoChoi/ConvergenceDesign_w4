import styled, { keyframes } from "styled-components";

// 글자가 위에서 아래로 떨어지는 애니메이션 정의
const fallAnimation = keyframes`
  0% {
    transform: translateY(-100vh); /* 화면 위에서 시작 */
  }
  100% {
    transform: translateY(100vh); /* 화면 아래로 이동 */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* 텍스트가 화면을 넘지 않도록 설정 */
  position: relative; /* 자식 요소들이 절대 위치로 떠다니도록 설정 */
  background-color: #282c34; /* 배경색 설정 (선택 사항) */
`;

export const Text = styled.div`
  position: absolute; /* 텍스트가 자유롭게 이동할 수 있도록 절대 위치 설정 */
  font-size: ${({ index }) => 1 + (index % 100) * 0.3}vw; /* 글자 크기 변형 */
  color: ${({ index }) => `hsl(200, 100%, ${(index % 10) * 10 + 30}%)`}; /* hue 고정, 밝기 변화 */
  opacity: ${({ index }) => 0.5 + (index % 10) * 0.05}; /* 투명도 변화 */
  font-weight: bold;
  top: -10vh; /* 화면 위에서 시작 */
  left: ${({ index }) => Math.random() * 100}vw; /* 텍스트를 랜덤한 위치에 배치 */
  animation: ${fallAnimation} ${({ index }) => 5 + Math.random() * 5}s linear infinite; /* 떨어지는 애니메이션 */
  
  /* 호버 효과 */
  &:hover {
    transform: scale(1.2); /* 호버 시 크기 확대 */
    opacity: 1;
  }
`;