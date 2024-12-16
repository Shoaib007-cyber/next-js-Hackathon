import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] bg-cover bg-center bg-[url('/Spic1.png')]">
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center">
          {/* Logo in Center */}
          <div className="mb-4">
            <Image
              src="/Spic2.png"
              alt="Blog Icon"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="text-lg mt-3">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* Blog Content Section with Two Columns */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main Blog Posts (65% width) */}
            <div className="md:col-span-3 space-y-8">
              {/* Post 1 */}
              <div>
                <Image
                  src="/b7.jpeg"
                  alt="Post Image"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-3xl font-semibold mt-4">Going all-in with millennial design</h2>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam.
                </p>
                <Link href="/" className="text-blue-600 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Post 2 */}
              <div className="mt-12">
                <Image
                  src="/b9.jpeg"
                  alt="Post Image"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-3xl font-semibold mt-4">Exploring New ways of decorating</h2>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam.
                </p>
                <Link href="/" className="text-blue-600 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Post 3 */}
              <div className="mt-12">
                <Image
                  src="/b8.jpeg"
                  alt="Post Image"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-3xl font-semibold mt-4">Handmade pieces with unique designs</h2>
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam.
                </p>
                <Link href="/" className="text-blue-600 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Sidebar with Recent Posts (35% width) */}
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>

              {/* Recent Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/b6.png"
                  alt="Recent Post"
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">Going all-in with millennial design</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/b4.png"
                  alt="Recent Post"
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">Exploring new ways of decorating</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/b3.png"
                  alt="Recent Post"
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">Handmade pieces with unique designs</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* More Recent Posts */}
              {/* Same structure repeated for other posts */}
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section (Free Delivery, Return, Payment) */}
      <section className="bg-[#FAF4F4] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold">Free Delivery</h3>
              <p className="text-lg text-gray-600">On orders over $50, enjoy free delivery on us.</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-semibold">90 Days Return</h3>
              <p className="text-lg text-gray-600">No worries! Return within 90 days if you are unsatisfied.</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-semibold">Secure Payments</h3>
              <p className="text-lg text-gray-600">100% secure payments for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;