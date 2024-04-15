import Navbar from '@/components/Navbar';
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
    </body>
    </html>
  );
};

export default Layout;
