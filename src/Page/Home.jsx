import React, { useEffect } from "react";
import { Utensils, UserPlus, Heart, Battery } from "lucide-react"
import { Link } from "react-router";
import axios from "axios";
import StatisticCard from "../components/StatisticCard";

const Home = () => {
  const services = [
    {
      title: "Food Services",
      description: "ငလျင်ဘေးဒုက္ခသည်များ အခမဲ့သုံးဆောင်နိုင်သော စားသောက်ဆိုင်များ",
      icon: <Utensils className="h-6 w-6 text-white" />,
      color: "bg-green-500",
      link: "/free-restaurant"
    },
    {
      title: "Rescue Teams",
      description: "အရေးပေါ် ကူညီကယ်ဆယ်ရေး နံပါတ်များ",
      icon: <UserPlus className="h-6 w-6 text-white" />,
      color: "bg-yellow-500",
      link: "/emergency-contacts"
    },
    {
      title: "Donation Organizations",
      description: "ငလျင်ဘေးအတွက်ယုံကြည်စိတ်ချစွာလှူနိုင်သောအဖွဲ့အစည်းများ",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-red-500",
    },
    {
      title: "Charging Stations",
      description: "အရေးပေါ်ဖုန်းအားသွင်းနိုင်မည့် နေရာများ",
      icon: <Battery className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
      link: "/free-charge-phone-battery"
    },
  ]
  const [statistics, setStatistics] = React.useState({ deaths: 0, injuries: 0 });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/ShweCana/burmeseEarthquake/main/statistics.csv?t=1743479226687&r=0.7060955324822338");
        const lines = response.data.split('\n');
        if (lines.length > 1) {
          const [deaths, injuries] = lines[1].split(',').map(Number);
          setStatistics({ deaths, injuries });
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatisticCard number={statistics.deaths.toLocaleString()} label="သေဆုံးသူဦးရေ" />
          <StatisticCard number={statistics.injuries.toLocaleString()} label="ဒဏ်ရာရသူဦးရေ" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-4px]">
              <Link to={service.link}>
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-800 mb-2">{service.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
