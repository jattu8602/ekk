const TopAnnouncementBar = () => {
  const announcements = "Extra discount on online payment! ✨ Diwali Sale is LIVE! ✨ Call to order: 8602074069 ✨ India's #1 Khaad Beej Shop ✨ ";
  
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative">
      <div className="flex items-center">
        {/* Scrolling content */}
        <div className="flex animate-scroll">
          <span className="text-sm font-medium whitespace-nowrap px-4">
            {announcements}
          </span>
          <span className="text-sm font-medium whitespace-nowrap px-4">
            {announcements}
          </span>
          <span className="text-sm font-medium whitespace-nowrap px-4">
            {announcements}
          </span>
        </div>
        
        {/* Language toggle */}
        <div className="absolute right-4 bg-primary px-3 py-1 rounded">
          <button className="text-sm font-medium hover:underline">
            English / हिन्दी
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopAnnouncementBar;
