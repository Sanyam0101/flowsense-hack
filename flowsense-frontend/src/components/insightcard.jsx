const InsightCard = ({ title, value, description }) => {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
  };
  
  export default InsightCard;
  