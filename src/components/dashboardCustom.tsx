"use client";
import CardCustom from "@/components/cardCustom";
import { useState } from "react";
import { DashboardProps } from "@/types/interfaces";



const Dashboard: React.FC<DashboardProps> = ({ cards, renderSection }) => {
  const [section, setSection] = useState<string | null>(null);

  const handleSection = (typeSection: string) => {
    setSection(typeSection);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap m-auto my-5 justify-center">
        {cards.map((item) => (
          <CardCustom
            key={item.text}
            text={item.text}
            icon={item.icon}
            onClick={() => handleSection(item.text)}
            isSelect={section}
          />
        ))}
      </div>
      <div className="min-h-[50lvh] mx-auto my-5 shadow-lg w-full rounded">
        {section && (
          <div className="mx-auto mt-5 min-h-28 dark:text-white ">
            {renderSection({ section })}
          </div>
        )}
      </div>

    </>
  );
};

export default Dashboard;
