import React from "react";
import Link from "next/link";

import {
  AiFillHome,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillMessage,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

import { Button, FormFieldText } from "../components";

export default function ContactUs() {
  return (
    <div className="h-full w-full pt-20 sm:pt-30 pb-20 bg-linear-180 from-amber-200 to-amber-100">
      <div className="sm:flex sm:pl-[20dvh] pl-5 items-center ">
        <div className="sm:w-[550px]  justify-center mr-[130px] flex flex-col">
          <h2 className="font-lato font-bold py-4 text-[30px] text-secondary3">
            Get In Touch
          </h2>
          <p className="pb-4 pr-5 text-secondary2">
            Interested in discussing how i can help you with your special
            celebrations and memorable moments. Available for a brief call at
            your convenience.
          </p>
          <div className="">
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px] rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiFillHome className="text-secondary3" />
              </div>
              <div className="m-0 font-lato text-[15px]">
                <h3 className="font-bold m-0 font-lato text-[15px] text-secondary3 ">
                  Address
                </h3>
                <p className="m-0 font-lato text-[15px] text-secondary3">
                  Nigeria, Ogun State &#40;Available remotely&#41;
                </p>
              </div>
            </div>
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px] rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiFillPhone className=" text-secondary3" />
              </div>
              <div className="m-0 font-lato text-[11px] ">
                <h3 className="font-bold m-0 font-lato text-[15px] text-secondary3">
                  Phone Number
                </h3>
                <p className="m-0 font-lato text-[15px] text-secondary3">
                  +234 70 669 52 339
                </p>
              </div>
            </div>
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px] border-2 border-white rounded-[50px] mr-[10px] flex items-center justify-center">
                <AiFillMail className="text-secondary3" />
              </div>
              <div className="">
                <h3 className="font-bold m-0 font-lato text-[15px] text-secondary3">
                  E-Mail
                </h3>
                <p className="m-0 font-lato text-[15px] text-secondary3">
                  We-Design4u11@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-[30px]">
            <p>Follow Us:</p>
            <div className="w-[130px] flex h-[30px] mb-[30px] items-center box-border justify-between">
              <a href="https://github.com/We-techdesign4u">
                <AiFillGithub className="text-secondary3" />
              </a>
              <a href="https://www.linkedin.com/in/olowookere-ganiyu-oladapo-9396b193/">
                <AiFillLinkedin className="text-secondary3" />
              </a>
              <a href="https://twitter.com/Mr_deepee">
                <AiFillTwitterSquare className="text-secondary3" />
              </a>
              <Link href="">
                <AiFillMessage className="text-secondary3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:w-[440px] w-full sm:px-5 flex items-center ">
          <form className="sm:w-[450px] flex flex-col  px-5 py-10 sm:p-[20px] space-y-3 rounded-[20px] shadow-2xl bg-primary2">
            <p className="pb-5">Send a Message</p>
            <FormFieldText
              type="text"
              placeholder="Name"
              title="Company Name"
              fieldtype="singleline"
            />
            <FormFieldText
              type="text"
              placeholder="Email Address"
              title="Email Address"
              fieldtype="singleline"
            />

            <p className="text-secondary3 font-Lato font-semibold mb-1">
              Message
            </p>
            <textarea
              placeholder="Message"
              fieldtype="multiline"
              className={`bg-white w-[325px] sm:w-[400px] min-h-[40px] rounded-sm pl-2 `}
            />

            <p className="py-4 font-montMed text-[12px] w-[325px] sm:w-full">
              By clicking on submit, you aggree to send a message to the owner
              of this website and will respond via your email as listed above
            </p>
            <Button
              title={"SUBMIT"}
              background={"bg-linear-90 from-secondary1 to-secondary2"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
