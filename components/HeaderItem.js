const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center group hover:text-white w-12 sm:w-20 cursor-pointer">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
};

export default HeaderItem;