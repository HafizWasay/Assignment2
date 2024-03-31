"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
const item = [
    {
        questions: "Ut enit edit enima venima, quis esturem excercitenum ullam",
        answers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        questions: "Ut enit edit enima venima, quis esturem excercitenum ullam",
        answers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        questions: "Ut enit edit enima venima, quis esturem excercitenum ullam",
        answers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        questions: "Ut enit edit enima venima, quis esturem excercitenum ullam",
        answers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

export function FAQ(){
    return(
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-1/3 lg:py-[32px] lg:pr[56px]">
                <h3 className="text-[#EB2891] text-[14px] font-medium lg: text-base">
                    Frqquently Asked Questions
                </h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                    Let's clarify some of your questions
                </h1>
                <p className="text-[#36485C] pb-[24px] ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                </p>
            </div>
            <div className="lg:w-2/3">
                <Accordion.Root type="single" defaultvalue="item-1" collapsible className="flex flex-col gap-y-4">
                    {item.map((item,index) => (
                        <div key={index}>
                            <Accordion.Item value={`item-${index + 1}`} className="text-[#E3F1FF] p-[16px] rounded-[8px]">
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between">
                                        <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                                            {item.questions}
                                        </p>
                                        <span>
                                        <Image src={Plus} alt={"plus"} className="h-10 w-10 lg:w-6 lg:h-6"/>
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                <p className="pt-2 text-[#36485C]">
                                    {item.answers}
                                </p>
                                </Accordion.Content> 
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>

    );
}