import React from 'react';
import { 
  ShipIcon, 
  PlaneIcon, 
  TrainIcon, 
  TruckIcon, 
  MapIcon, 
  WarehouseIcon 
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title }) => (
  <div className="
    flex flex-col items-center justify-center 
    p-6 
    transition-all ease-in-out duration-300 
    hover:bg-transparent
    hover:scale-105 
    cursor-pointer 
    group
  ">
    <div className="
      p-4 rounded-full 
      bg-blue-100 
      mb-4 
      transition-all ease-in-out duration-300 
      group-hover:bg-blue-200
    ">
      <Icon 
        className="
          text-blue-600 
          transition-transform ease-in-out duration-300 
        " 
        size={48} 
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">
      {title}
    </h3>
  </div>
);

const Services = () => {
  const services = [
    { Icon: ShipIcon, title: 'Sea Freight' },
    { Icon: PlaneIcon, title: 'Air Freight' },
    { Icon: TrainIcon, title: 'Rail Freight' },
    { Icon: TruckIcon, title: 'Road Transport' },
    { Icon: MapIcon, title: 'Customs Brokerage' },
    { Icon: WarehouseIcon, title: 'Warehousing' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(({ Icon, title }, index) => (
          <ServiceCard key={index} Icon={Icon} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Services;