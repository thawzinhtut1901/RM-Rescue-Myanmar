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
      icon: <Utensils className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      link: "/free-restaurant"
    },
    {
      title: "Rescue Teams",
      description: "အရေးပေါ် ကူညီကယ်ဆယ်ရေး နံပါတ်များ",
      icon: <UserPlus className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
      link: "/emergency-contacts"
    },
    {
      title: "Donation Organizations",
      description: "ငလျင်ဘေးအတွက်ယုံကြည်စိတ်ချစွာလှူနိုင်သောအဖွဲ့အစည်းများ",
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "bg-red-500",
      link: "/donation"
    },
    {
      title: "Charging Stations",
      description: "အရေးပေါ်ဖုန်းအားသွင်းနိုင်မည့် နေရာများ",
      icon: <Battery className="w-6 h-6 text-white" />,
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
      <div className="mx-auto px-4 py-8 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <StatisticCard number={statistics.deaths.toLocaleString()} label="သေဆုံးသူဦးရေ" />
          <StatisticCard number={statistics.injuries.toLocaleString()} label="ဒဏ်ရာရသူဦးရေ" />
        </div>
      </div>
      <div className="mx-auto px-4 py-8 container">
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg transition-transform hover:translate-y-[-4px]">
              <Link to={service.link}>
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="mb-1 font-semibold text-xl">{service.title}</h3>
                <p className="mb-2 text-gray-800">{service.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;