import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="lg:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Raging Momentum Blog
            </span>
          </Link>
        </div>

        <div className="hidden lg:float-left lg:contents">
          {categories.map((category) => (
            <Link key={category} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
