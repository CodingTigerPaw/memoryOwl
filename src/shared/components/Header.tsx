const Header = () => {
  return (
    <div className="flex bg-orange-600 w-full h-16">
      <div className=" ml-10 mt-4">
        <a href="/">Home</a>
      </div>
      <div className="ml-10 mt-4">
        <a href="/memory">Start</a>
      </div>
      <div className=" ml-10 mt-4">
        <a href="/new">Add Memory</a>
      </div>
      <div className=" ml-10 mt-4">
        <a href="/all">All memories</a>
      </div>
    </div>
  );
};

export default Header;
