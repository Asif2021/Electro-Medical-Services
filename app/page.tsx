import type { Metadata } from "next";
import TopNavbar from '../app/ui/components/TopNavbar'
import Navbar from '../app/ui/components/Navbar'


export const metadata: Metadata = {
  title: "Landing Page"
};

export default function Home() {
  return (
    <div>
     <TopNavbar/>
     <Navbar/>
    </div>
  );
}
