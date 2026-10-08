import React from 'react';
import { Route, Navigation, Compass, FileText, Palmtree, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sitemapData = [
  {
    category: "Main Pages",
    icon: <Compass className="w-6 h-6 text-[#F06543]" />,
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
    ]
  },
  {
    category: "Destinations",
    icon: <Palmtree className="w-6 h-6 text-[#F06543]" />,
    links: [
      { name: "Port Blair", path: "/destinations/port-blair" },
      { name: "Havelock Island", path: "/destinations/havelock" },
      { name: "Neil Island", path: "/destinations/neil" },
      { name: "Baratang Island", path: "/destinations/baratang" },
      { name: "Diglipur", path: "/destinations/diglipur" },
    ]
  },
  {
    category: "Packages",
    icon: <Route className="w-6 h-6 text-[#F06543]" />,
    links: [
      { name: "Honeymoon Packages", path: "/packages/honeymoon" },
      { name: "Family Packages", path: "/packages/family" },
      { name: "Adventure Packages", path: "/packages/adventure" },
      { name: "Budget Packages", path: "/packages/budget" },
      { name: "Luxury Packages", path: "/packages/luxury" },
    ]
  },
  {
    category: "Legal & Resources",
    icon: <FileText className="w-6 h-6 text-[#F06543]" />,
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Refund Policy", path: "/refund" },
      { name: "Sitemap", path: "/sitemap" },
    ]
  }
];

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#FFF0EB] border border-[#FFD3C4] mb-6 shadow-[0_0_30px_rgba(240,101,67,0.15)] group hover:scale-110 transition-transform duration-500 cursor-default">
            <Navigation className="w-12 h-12 text-[#F06543] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[#0B2545]">
            Interactive Sitemap
          </h1>
          <p className="text-base sm:text-lg text-[#F06543] max-w-2xl mx-auto font-medium">
            Navigate seamlessly through all pages and experiences of Andaman Trails.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sitemapData.map((section, idx) => (
            <div 
              key={idx}
              className="bg-[#ffffff] backdrop-blur-[20px] border border-[#ebded2] shadow-[0_8px_30px_rgba(11,37,69,0.06)] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#F06543] hover:shadow-[0_10px_40px_rgba(240,101,67,0.1)] flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-[#ebded2] pb-4">
                <div className="p-2 rounded-lg bg-[#FFF0EB] border border-[#FFD3C4] group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">{section.category}</h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 flex-1">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path}
                      className="group/link flex items-center justify-between text-slate-600 hover:text-[#F06543] transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-[#FFF0EB]"
                    >
                      <span className="font-medium text-sm sm:text-base">{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 text-[#F06543] transition-all transform -translate-x-2 group-hover/link:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SitemapPage;
