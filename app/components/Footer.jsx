"use client";
import React, { useState } from "react";
import { Button, FormFieldText } from ".";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    order: "12inch Cake",
    payment: "Card",
  });
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const addItemToCart = () => {
    const itemName = form.order;
    if (!itemName) return;
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.order === itemName
      );
      if (existingItemIndex > -1) {
        return prevCartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      } else {
        const newItem = { order: itemName, qty: 1 };
        return [...prevCartItems, newItem];
      }
    });
  };

  const removeItemFromCart = (itemName) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.order === itemName
      );

      if (!existingItem) return prevCartItems;

      if (existingItem.qty > 1) {
        return prevCartItems.map((item) =>
          item.order === itemName ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        return prevCartItems.filter((item) => item.order !== itemName);
      }
    });
  };

  return (
    <div
      id="order-section"
      className="flex flex-col py-20 bg-linear-180 from-amber-200 px-70 to-amber-100"
    >
      <div className="items-center flex flex-col">
        <p className="text-[30px] font-Lato text-secondary3">It's Easy</p>
        <p className="text-[50px] font-bold font-Lato text-secondary2">
          Make An Order
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-15">
          <div className=" space-y-6 text-secondary2">
            <div className="flex space-x-4 items-center">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center outline-amber-50 outline-2">
                <p className=" text-[20px] font-Lato font-bold">1</p>
              </div>
              <div>
                <p className="w-[300px]">
                  A supporting statement for your value proposition to encourage
                  customers to send the form
                </p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center outline-amber-50 outline-2">
                <p className=" text-[20px] font-Lato font-bold">2</p>
              </div>
              <div>
                <p className="w-[300px]">
                  A supporting statement for your value proposition to encourage
                </p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center outline-amber-50 outline-2">
                <p className=" text-[20px] font-Lato font-bold">3</p>
              </div>
              <div>
                <p className="w-[300px]">
                  A supporting statement for your value proposition to encourage
                  customers to send the form
                </p>
              </div>
            </div>
          </div>
          <div className="text-secondary3 ml-15 mt-10 ">
            <p className="font-Lato font-bold text-[25px] ">MyCakings</p>
            <p className="mt-3">
              55th Road <br /> Lagos Nig
            </p>

            <p className="mt-4">234809457864</p>
          </div>
        </div>
        <div className=" ml-20 mt-15 flex">
          <form className=" space-y-3">
            <FormFieldText
              name={"name"}
              title={"Name"}
              value={form.name}
              handleChangeText={handleChange}
              placeholder="Bill Smith"
              type={"text"}
            />
            <FormFieldText
              name={"email"}
              value={form.email}
              handleChangeText={handleChange}
              title="Email Address"
              placeholder="Email@domain.com"
              type={"text"}
            />
            <FormFieldText
              name={"phone"}
              value={form.phone}
              handleChangeText={handleChange}
              title="Phone No."
              placeholder="234 80 456 789 4444"
            />

            <div className="">
              <p className="text-secondary3 font-Lato font-semibold mb-1">
                What to order
              </p>
              <div className="flex justify-between">
                <select
                  name="order"
                  className="bg-white w-[350px] h-[40px] rounded-sm pl-2"
                  value={form.order}
                  placeholder="Choose"
                  onChange={handleChange}
                >
                  <option
                    className="text-m font-Lato text-black"
                    value={"12inch Cake"}
                  >
                    12inch Cake
                  </option>
                  <option value={"16inch Cake"}>16inch Cake</option>
                  <option value={"Parfait"}>Parfait</option>
                  <option value={"6set donut"}>6 set Donut</option>
                </select>
                <button
                  className="px-2 py-2 rounded-md bg-linear-90 from-amber-500 to-amber-600"
                  type="button"
                  onClick={addItemToCart}
                >
                  +
                </button>
              </div>
            </div>
            <div className="">
              <p className="text-secondary3 font-Lato font-semibold mb-1">
                Payment Method
              </p>
              <select
                name="payment"
                className="bg-white w-[400px] h-[40px] rounded-sm pl-2"
                value={form.payment}
                placeholder="Choose"
                onChange={handleChange}
              >
                <option className="" value={"Card"}>
                  Card
                </option>
                <option value={"Transfer"}>Transfer</option>
                <option value={"Deposit"}>Deposit</option>
                <option value={"Cash"}>Cash</option>
              </select>
            </div>
            <div className="space-x-2">
              {cartItems?.map((item, index) => (
                <div
                  key={index}
                  className="rounded p-1 flex justify-center item w-fit bg-amber-50"
                >
                  <p className="mr-2">{item.qty}</p>
                  <p className="">{item.order}</p>
                  <button
                    type="button"
                    onClick={() => removeItemFromCart(item.order)}
                    className="ml-2 bg-linear-90 px-1 rounded-md from-amber-500 to-amber-600"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <div className="flex">
              <div className="mr-2">
                <input type="checkbox" />
              </div>
              <p className="text-[14px] text-secondary3 font-Lato font-light">
                I agree to receive my order from this website
              </p>
            </div>
            <Button
              title="ORDER NOW"
              background={"bg-linear-90 from-secondary1 to-secondary2"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
