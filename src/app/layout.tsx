import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/cart/CartContext';
import { WishlistProvider } from '@/components/wishlist/WishlistContext';
import { AnnouncementBar } from '@/components/navbar/AnnouncementBar';
import { Navbar } from '@/components/navbar/Navbar';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { Footer } from '@/components/footer/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ROYALORA™ | A Royal Touch of Nutrition | Premium Dry Fruits Powder',
  description:
    'Experience the goodness of premium dry fruits with ROYALORA. 100% natural, micro-pulverized Almond, Cashew, and Pistachio powders crafted for royal nourishment.',
  keywords: [
    'ROYALORA',
    'Almond Powder',
    'Cashew Powder',
    'Pistachio Powder',
    'Dry Fruits Powder',
    'Premium Dry Fruits India',
    'Royal Nutrition',
    'Badam Powder',
    'Kaju Powder',
    'Pista Flour',
  ],
  authors: [{ name: 'ROYALORA Connoisseur Nutrition' }],
  metadataBase: new URL('https://royalora.com'),
  openGraph: {
    title: 'ROYALORA™ | A Royal Touch of Nutrition',
    description:
      'Carefully crafted nutrition, inspired by nature and presented with a royal touch. 100% Pure Almond, Cashew & Pistachio Powders.',
    url: 'https://royalora.com',
    siteName: 'ROYALORA',
    images: [
      {
        url: '/images/royalora-logo.png',
        width: 1200,
        height: 630,
        alt: 'ROYALORA Royal Nutrition',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/royalora-logo.png',
    apple: '/images/royalora-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#321B11] antialiased selection:bg-[#C49A42] selection:text-[#321B11]">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <CartDrawer />
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
