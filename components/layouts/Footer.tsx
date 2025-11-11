import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Help & Support", href: "#" },
      { label: "Partner with Us", href: "#" },
      { label: "Ride with Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Refund", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookie", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: faFacebookF,
  },
  {
    name: "Twitter",
    href: "#",
    icon: faTwitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: faInstagram,
  },
];

function Footer() {
  return (
    <footer className="bg-[#212121] py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-wrap gap-8 mb-8">
          <div className="flex justify-between flex-wrap gap-8 md:gap-16 text-white">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex flex-col gap-4">
              {" "}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              <h1 className="text-gray-300">
                Receive exclusive offers in your mailbox
              </h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Email icon */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>

                  {/* Input field */}
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-gray-700 rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <button className="bg-[linear-gradient(97.86deg,#FFBA26_-8.95%,#FF9A0E_109.24%)] text-white px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 md:flex justify-between items-center">
          <p className="text-center text-gray-400">
            All rights reserved.{" "}
            <span className="font-semibold text-gray-200">
              Copyright © 2025 Food Wagen.
            </span>
          </p>

          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <p className="text-gray-400">
              Made with by 🧡{" "}
              <span className="font-semibold text-gray-200">Themewagon</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
