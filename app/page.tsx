import { Button } from "antd";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Landing Page",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-green-800">Hello EMS!!!</h1>
      <Button type="primary" className="bg-black text-white rounded-md">Primary Button</Button>

    </div>
  );
}
