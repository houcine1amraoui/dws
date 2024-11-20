import React from "react";
import { menuItems } from "../data";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src={i.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
