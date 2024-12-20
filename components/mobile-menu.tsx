"use client";
import Link from "next/link";
import { Icon } from "./icons";
import { Dispatch, SetStateAction } from "react";
import { store } from "@/store";

export function MobileMenu({
  isOpen,
  showMenu,
}: {
  isOpen: boolean;
  showMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const goHome = store((state) => state.goHome);
  return (
    <div
      className="lg:hidden  md:p-[20px] flex flex-col justify-between pt-[42px] md:pt-[42px] bg-primary z-10 transition-all fixed top-0 left-0 bottom-0 right-0"
      style={{ transform: isOpen ? "translateY(0)" : "translateY(-100vh)" }}
    >
      <div className="flex flex-col flex-1 mt-[100px]">
        <div className="p-[10px] text-white text-[24px] md:text-[32px] leading-[26px] md:leading-[36px] font-medium gap-[16px] md:gap-[10px] flex flex-col">
          <Link
            onClick={() => {
              showMenu(false);
              goHome();
            }}
            href="/"
          >
            Home
          </Link>
          <Link href="#">Get App</Link>
          <Link onClick={() => showMenu(false)} href="/faq">
            FAQ
          </Link>
        </div>

        <Icon
          name="Filter"
          className="text-[#545454] mt-auto mb-[60px] md:mb-[80px] w-full h-auto "
        />

        <div className="p-[10px] text-[#929292] text-[14px] leading-[18px] md:leading-20px flex justify-between items-end">
          <div className="flex flex-col  gap-[10px]">
            <Link
              onClick={() => showMenu(false)}
              className=" hover:text-white"
              href="/form"
            >
              Help Center
            </Link>
            <Link
              onClick={() => showMenu(false)}
              className=" hover:text-white"
              href="/terms"
            >
              Terms of use
            </Link>
            <Link
              onClick={() => showMenu(false)}
              className=" hover:text-white"
              href="/policy"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              className="flex justify-center items-center gap-[5px] hover:text-white"
              href={"#"}
            >
              <Icon name={"GoLink"} className="mt-[1px]" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
