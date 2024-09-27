import { Roboto_Condensed, Jacquarda_Bastarda_9
} from 'next/font/google'; // Import the font from Google



// Load the font
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],  // You can specify subsets, like 'latin' or 'cyrillic'
  weight: ['400', '700'],  // Specify weights, such as '400' for regular or '700' for bold
  style: ['normal', 'italic'],  // Specify styles like 'normal' or 'italic'
});

const jacquardaBastarda9 = Jacquarda_Bastarda_9({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jacquardaBastarda9.className}>
        {children}
      </body>
    </html>
  );
}