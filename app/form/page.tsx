'use client'
import { PageWrapper } from "@/components/page-wrapper";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Select from "@/components/select";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import UploadInput from "@/components/upload-input";
import BigForm from "@/components/big-form";

interface IForm {
    email: string
    type: string
}
const schema = yup.object({
    email: yup.string().email().required(),
    type: yup.string().required()
}).required()

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: IForm) => console.log(data)

    return (
        <>
            <div className="xl:hidden">
                <PageWrapper>
                    <Title data={'Fill the form'} />
                    <div className="mt-[8px]">
                        <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-[32px] flex flex-col gap-[16px] pb-[16px]">
                        <div className="flex flex-col">
                            <label htmlFor="type" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Please choose a request type below
                            </label>
                            <Select options={[{ value: 0, label: "I am a creator and I need support" }, { value: 1, label: 'test' }]} {...register("type")} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Your email address*
                            </label>
                            <Input placeholder="Email" id="email" type="text" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="type" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Please select one of the options below*
                            </label>
                            <Select options={[{ value: 0, label: "-" }, { value: 1, label: 'test' }]} {...register("type")} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Subject*
                            </label>
                            <Input placeholder="Email" id="email" type="text" />
                            <span className="text-[#929292] text-[14px] leading-[18px] mt-[8px]">Please use a few words to summarize your question</span>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Description*
                            </label>
                            <Textarea placeholder="Email" id="email" />
                            <span className="text-[#929292] text-[14px] leading-[18px] mt-[8px]">
                                Please enter the details of your request. A member
                                of our team will reach out with a response.</span>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="type" className="text-[14px] leading-[18px] font-bold mb-[8px]">
                                Attachments(optional)
                            </label>
                            <UploadInput />
                        </div>

                        <button className="bg-[#929292] text-[#F0F0F0] text-[14px] font-bold leading-[18px] p-[16px] rounded-[8px]">
                            Submit
                        </button>

                    </form>
                </PageWrapper>
            </div>

            <BigForm />
        </>
    )
}