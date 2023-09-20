import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymInfos = [
    {
      gymName: "FitLife Gym",
      membership: "Basic",
      id: 1,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
      ],
      price: 30,
    },
    {
      gymName: "FitLife Gym",
      membership: "Premium",
      id: 2,
      features: [
        "Access to all gym facilities",
        "Unlimited group fitness classes",
        "Sauna and steam room access",
      ],
      price: 50,
    },
    {
      gymName: "FitLife Gym",
      membership: "VIP",
      id: 3,
      features: [
        "All Premium features",
        "24/7 access",
        "Priority booking for classes",
        "Towel service",
      ],
      price: 80,
    },
    {
      gymName: "Fitness Plus",
      membership: "Standard",
      id: 4,
      features: ["Access to cardio equipment", "Access to weightlifting area"],
      price: "$25/month",
    },
    {
      gymName: "Fitness Plus",
      membership: "Deluxe",
      id: 5,
      features: [
        "Access to all gym facilities",
        "Unlimited group fitness classes",
        "Sauna access",
      ],
      price: 40,
    },
  ];

  return (
    <div className="m-12">
      <h3 className="text-3xl mb-3">Best price in Town</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gymInfos.map((gyminfo) => (
          <PriceOption key={gyminfo.id} gyminfo={gyminfo}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
