import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Review = () => {
  return (
    <>
      <Head>
        <title>Product Review</title>
        <meta
          name="description"
          content="A review of the Kilburn portable active stereo speaker."
        />
      </Head>
      <div className="max-w-[1440px] h-auto flex flex-col border-t-2 border-[#9F9F9F]">
        <div className="flex items-center justify-start flex-col w-full h-auto m-auto">
          <section className="w-[90%] sm:w-[70%] md:w-[50%] flex flex-col sm:flex-row gap-6 p-4 mt-4 ">
            <div className="w-full sm:w-[45%] h-auto">
              <Image
                src="/Spic17.png"
                alt="sofas"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col justify-start w-full sm:w-[50%] text-left">
              <h2 className="text-2xl sm:text-3xl font-bold">Asgard Sofa</h2>
              
              <p className="text-xl text-[#dc7758] font-semibold mt-2">Rs. 250,000</p>
              
              {/* Sofa Description */}
              <p className="text-sm sm:text-[16px] text-justify mt-4">
                A beautifully crafted piece with luxurious comfort and durability, the Asgard Sofa is perfect for
                your living room. Designed to combine style and comfort, it promises a great seating experience.
                The unique design blends contemporary and classic elements, making it an ideal choice for any
                modern home.
              </p>
              
              {/* Added to Cart Button */}
              <Link href="/">
              <button className="mt-6 px-6 py-3 border-2 border-[#050505] text-[#000000] rounded-md text-lg footer__link relative">
                Add to Cart
              </button>
              </Link>
            </div>
          </section>

          <div className="w-[90%] sm:w-[70%] md:w-[50%] h-auto p-4 mt-7 flex flex-col sm:flex-row justify-between gap-4">
            <button className="w-full sm:w-[136px] h-[36px] text-[18px] sm:text-[24px] footer__link relative text-black border-b border-black ">Description</button>
            <button className="w-full sm:w-[239px] h-[36px] text-[18px] sm:text-[24px] text-[#000000] text-center footer__link relative border-b border-black">
              Additional Information
            </button>
            <button className="w-full sm:w-[136px] h-[36px] text-[18px] sm:text-[24px] text-[#000000] text-center footer__link relative border-b border-black">
              Reviews [5]
            </button>
          </div>

          <section className="flex flex-col items-center sm:flex-row justify-center w-[90%] sm:w-[1026px] h-auto p-4 text-left bg-white mt-4">
            <div className="space-y-3 leading-relaxed text-[14px] sm:text-[16px] text-justify">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
                unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the
                bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
                and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while
                the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Review;
