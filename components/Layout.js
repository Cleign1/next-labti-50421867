import Footer from "./Footer";
import Navbar from "./Navbar";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'PWEB LABTI',
    description: 'Project Ujian Labti 50421867',
  };

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}