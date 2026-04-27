// src/components/about/Values.jsx

const valuesData = [
  {
    id: 1,
    number: "01",
    title: "Our tech",
    description: "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    image: "/assets/images/our-tech.png",
  },
  {
    id: 2,
    number: "02",
    title: "Our integrity",
    description: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    image: "/assets/images/our-integrity.png",
  },
  {
    id: 3,
    number: "03",
    title: "Our community",
    description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    image: "/assets/images/our-community.png",
  }
];

export default function Values({ title = "Our values" }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <h2 className="text-center mb-24">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-8 justify-between items-center lg:items-start text-center">
        {valuesData.map((value) => (
          <div key={value.id} className="flex flex-col items-center max-w-[350px]">
            <div className="relative mb-20">
              <img 
                src={value.image} 
                alt={value.title} 
                className="w-[240px] h-[240px] rounded-full object-cover shadow-sm"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-scoot-yellow text-dark-navy font-mono text-2xl font-bold tracking-[-1.07px] flex items-center justify-center rounded-full">
                {value.number}
              </div>
            </div>
            <h4 className="mb-6">{value.title}</h4>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
