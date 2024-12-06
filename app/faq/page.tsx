"use client";

import { Container } from "@/components/container";
import { Questions } from "@/components/questions";
import { Search } from "@/components/search";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { categories, data } from "@/faq-data";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);
  const [value, onChange] = useState("");
  const [result, setReslut] = useState<any>(null);

  const searchHandler = (v: string) => {
    onChange(v);
    console.log(
      data.filter((el) =>
        el.title.toLocaleLowerCase().includes(v.toLocaleLowerCase())
      )
    );
  };

  return (
    <AnimatePresence mode="wait">
      <section className="lg:flex lg:h-full overflow-y-scroll">
        <Container className="lg:flex-1 border-r border-[#DFDFDF] pt-[32px] lg:pt-[162px] xl:pt-[280px]">
          <div className="lg:max-w-[619px]">
            <Title data="How can we help?" />
            <div className="mt-[8px] md:my-[20px] mb-[16px]">
              <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
            </div>
            <Search value={value} onChange={searchHandler} />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[15px] mt-[31px] lg:max-w-[619px]">
            {categories.map((el, index) => (
              <div
                onClick={() => setSelected(index)}
                className="border border-[#929292] rounded-[16px] flex flex-col justify-center items-start gap-[8px] px-[12px] flex-1 min-w-[104px] md:min-w-[167px] min-h-[104px] md:min-h-[167px] lg:min-w-[148px] lg:min-h-[148px] hover:bg-primary hover:text-background cursor-pointer"
                key={index}
              >
                <span className="text-[24px] md:text-[27px] md:leading-[30px] font-bold leading-[26px]">
                  {index + 1}.
                </span>
                <span className="text-[14px] max-w-[98px] md:text-[18px] md:leading-[22px] font-bold leading-[18px]">
                  {el}
                </span>
              </div>
            ))}
          </div>
        </Container>
        <Container className="lg:flex-1">
          <Questions selected={selected} setSelected={setSelected} />
        </Container>
      </section>
    </AnimatePresence>
  );
}
