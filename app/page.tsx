import type { Metadata } from "next";
import TopNavbar from '../app/ui/components/TopNavbar'


export const metadata: Metadata = {
  title: "Landing Page"
};

export default function Home() {
  return (
    <div>
     <TopNavbar/>
    </div>
  );
}
