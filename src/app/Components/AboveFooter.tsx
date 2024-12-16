import React from "react";

const AboveFooter = () => {
  return (
    <div className="bg-pink-50 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Feature 1 */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900">Free Delivery</h3>
          <p className="text-gray-500 mt-2">
            For all orders over $50, consectetur adipim scing elit.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900">90 Days Return</h3>
          <p className="text-gray-500 mt-2">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900">Secure Payment</h3>
          <p className="text-gray-500 mt-2">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;