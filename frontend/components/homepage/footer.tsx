import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoGlobeSharp } from "react-icons/io5";

type FooterSection = {
  title: string;
  lists: string[];
};

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    lists: ["Courses", "Library", "Pricing", "Enterprise"],
  },
  {
    title: "Company",
    lists: ["About", "Careers", "Blog", "Press"],
  },
  {
    title: "Resources",
    lists: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-12">
      {/* Top Message */}
      <div className="px-12 sm:px-6 md:px-12 mb-9 text-center ">
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-semibold">
          Empowering learners worldwide with quality education and practical skills.
        </p>
      </div>

      {/* Grid Links Section */}
      <div className="px-4 sm:px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 place-items-center gap-8 mb-8">
        {footerSections.map((section, idx) => (
          <div key={idx} className={`text-center sm:text-left ${idx === 2 ? "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto" : ""
            }`}
          >
            <h4 className="mb-3 font-semibold text-base">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-700 text-gray-400 text-sm py-6 px-4 sm:px-6 md:px-18 lg:px-22 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">&copy; 2024 LearnHub. All rights reserved.</div>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
          <FaTwitter size={18} />
          <FaLinkedin size={18} />
          <IoLogoGithub size={18} />
          <IoGlobeSharp size={18} />
          <span className="ml-2">English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
