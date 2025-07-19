import { TruckIcon, Headphones, BanknoteIcon } from "lucide-react";

const services = [
  {
    icon: <TruckIcon className="text-white w-8 h-8" />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones className="text-white w-8 h-8" />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <BanknoteIcon className="text-white w-8 h-8" />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="relative w-20 h-20 flex items-center justify-center mb-4">
              <div className="absolute w-full h-full bg-zinc-800 opacity-30 rounded-full" />
              <div className="absolute w-14 h-14 bg-black rounded-full flex items-center justify-center z-10">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-black">{service.title}</h3>
            <p className="text-sm text-zinc-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
