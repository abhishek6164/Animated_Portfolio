const Footer = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/abhishek-pipriye/",
    github: "https://github.com/abhishek6164",
    twitter: "https://twitter.com/abhishekpipriye", 
    instagram: "https://www.instagram.com/pipriyeabhishek/",
    leetcode: "https://leetcode.com/u/Abhishek_Pipriye/",
  };

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-s4/30 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-p4 text-sm sm:text-base font-medium hover:text-p2 transition-colors duration-300 cursor-pointer">
            Terms & Conditions
          </p>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-p3"></div>
          <p className="text-p4 text-sm sm:text-base font-medium hover:text-p2 transition-colors duration-300 cursor-pointer">
            Privacy Policy
          </p>
        </div>

        <div className="flex gap-6">
          {Object.entries(socialLinks).map(([icon, link]) => (
            <a
              key={icon}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 bg-s3/80 group-hover:bg-p2 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-p2/20">
                <img
                  src={`/assets/${icon}.svg`}
                  alt={icon}
                  className="w-5 h-5 group-hover:brightness-150 transition-all duration-300"
                  style={{ filter: 'brightness(0)' }} // Using CSS filter to make icons black
                />
              </div>
            </a>
          ))}
        </div>

        <p className="text-p4/80 text-sm sm:text-base font-medium text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-p2">Abhishek Pipriye</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
