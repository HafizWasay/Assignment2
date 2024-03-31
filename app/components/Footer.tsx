import Image from "next/image";
import Logo from "../../public/assets/Logo.svg"
import Facebook from "../../public/assets/Facebook.svg"
import Twitter from "../../public/assets/X.svg"
import Feed from "../../public/assets/Feed.svg"

export function Footer(){
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={Logo} alt={"logo"} />
                <p className="font-bold text-[#36485C] text-[17px]">Abdul Wasay</p>
            </div>
            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Feature</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Career</li>
            </ul>
            <p className="pt-[56px] text-center text-[14px] text-[#36485C] font-medium sm:pt-5">©Copyright2024. Abdul Wasay. All rights reserved</p>
            <div className="flex items-center justify-center gap-x-[56px] pt-[48px]">
                <Image src={Facebook} alt={"logo"} />
                <Image src={Twitter} alt={"logo"} />
                <Image src={Feed} alt={"logo"} />
            </div>
        </div>
    );
}