import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>

      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength={62}
            minLength={10}
            required
          />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            maxLength={62}
            minLength={10}
            required
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="sell" />
              <label htmlFor="sell" className="select-none">
                Sell
              </label>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="rent" />
              <label htmlFor="rent" className="select-none">
                Rent
              </label>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="parking" />
              <label htmlFor="parking" className="select-none">
                Parking spot
              </label>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="furnished" />
              <label htmlFor="furnished" className="select-none">
                Furnished
              </label>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="offer" />
              <label htmlFor="offer" className="select-none">
                Offer
              </label>
            </div>
          </div>

          {/* Flex container for Beds, Baths, Regular Price, Discounted Price */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg w-24"
                type="number"
                id="bedrooms"
                min={1}
                max={10}
                required
              />
              <label htmlFor="bedrooms" className="text-sm">
                Beds
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg w-24"
                type="number"
                id="bathroom"
                min={1}
                max={5}
                required
              />
              <label htmlFor="bathroom" className="text-sm">
                Baths
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg w-36"
                type="number"
                id="regularPrice"
                min={1}
                required
              />
              <label htmlFor="regularPrice" className="text-sm">
                Regular Price
                <span className="block text-xs">(₹ / month)</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg w-36"
                type="number"
                id="discountPrice"
                min={1}
                required
              />
              <label htmlFor="discountPrice" className="text-sm">
                Discounted Price
                <span className="block text-xs">(₹ / month)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover(max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border-gray-300 rounded w-full"
              type="file"
              name="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 border border-green-700 uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            create listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
