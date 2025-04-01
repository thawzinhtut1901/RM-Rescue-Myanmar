import React from "react";
import homeImage from "../assets/images/home.png";
import { Utensils, UserPlus, Heart, Battery } from "lucide-react"
import { Link } from "react-router";

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
  
  return (
    <>
      {/* <div className="flex md:flex-row flex-col justify-center items-center p-4 md:p-8">
        <div className="flex md:flex-row flex-col items-center bg-white p-6 md:p-10 rounded-lg w-full max-w-5xl">
          <img
            src={homeImage}
            alt="Emergency Kit"
            className="md:mr-6 mb-4 md:mb-0 w-full md:w-1/2 h-auto object-contain"
          />
          <div>
            <h2 className="font-bold text-red-600 text-xl md:text-2xl">
              Emergency Natural Disasters Response – Connect, Respond, Save Lives
            </h2>
            <p className="mt-2 md:mt-4 text-gray-700 text-base md:text-lg">
              Instantly connect with volunteer rescue teams and emergency services
              during natural disasters.
            </p>
          </div>
        </div>
      </div> */}
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
