import Image from "next/image";

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-white shadow">
    <div className="flex items-center space-x-4">
      <Image
        src="/images/Screenshot 2024-11-17 232850.png"
        alt="Logo"
        width={40}
        height={40}
      />
      <h1 className="text-xl text-black font-semibold">WhatBytes</h1>
    </div>

    <div className="flex items-center space-x-4 p-2 border-2 rounded-2xl">
      <Image
        src="/images/images.png"
        alt="User"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="text-black">
        <strong>Rahil Siddique</strong>
      </span>
    </div>
  </header>
);

export default Header;
