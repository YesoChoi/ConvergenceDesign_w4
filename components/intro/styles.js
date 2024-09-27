import styled from "styled-components";

// Rain 테마의 색상 배열
const rainColors = [
  "#4A90E2", // 차가운 파란색
  "#5C6BC0", // 은은한 보라색
  "#37474F", // 어두운 회색
  "#78909C", // 밝은 회색
  "#455A64", // 진한 남색
];

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000; /* 배경색 검정 */
  position: relative; /* 자식 요소들을 절대 위치로 배치하기 위해 relative 설정 */
  margin: 0;
  padding: 0;
`;

export const Text = styled.div`
  font-size: ${({ index }) => 1 + (index % 10) * 0.3}vw; /* 글자 크기 변화 */
  color: ${({ index }) => rainColors[index % rainColors.length]}; /* Rain 테마 색상 적용 */
  transform: rotate(${({ index }) => (index % 10) * 15 - 45}deg); /* 랜덤 회전 */
  margin: 10px;
  font-weight: bold;
  opacity: ${({ index }) => 0.5 + (index % 10) * 0.5}; /* 투명도 변화 */
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(4) rotate(0deg); /* 호버 시 확대 및 회전 효과 */
    opacity: 1;
  }
`;