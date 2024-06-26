import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const Layout = ({ children }) => {
  return (
    <html>
    <body>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
};

export default Layout;
