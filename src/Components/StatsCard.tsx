import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  Icon?: React.ElementType;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, Icon }) => {
  return (
    <div className="sm:h-32 flex bg-[var(--brand-color)] dark:bg-[var(--card-dark)] text-white pl-8 py-4 rounded-lg shadow-lg items-center mt-16">
      {Icon && <Icon fontSize="large" />}

      <div className="ml-4">
        <h4 className="text-sm sm:text-base font-medium">{title}</h4>
        <h2 className="text-xl sm:text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default StatsCard;
