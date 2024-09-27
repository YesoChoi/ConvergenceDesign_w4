import { Roboto_Condensed } from 'next/font/google'; // Import the Roboto Condensed font


// Load the font
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],  // You can add more subsets like 'cyrillic', etc.
  weight: ['400', '700'],  // Specify font weights
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        {children}
      </body>
    </html>
  );
}