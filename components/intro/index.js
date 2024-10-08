import * as S from "./styles";

export default function Intro() {
 const repeatedText = new Array(200).fill("Hello World");

 return (
   <S.Container>
     {repeatedText.map((text, index) => (
       <S.Text key={index} index={index}>
         {text}
       </S.Text>
     ))}
   </S.Container>
 );
}
