import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface IDropdown {
  children?: any;
  className?: string;
  disabled?: boolean;
  options: string[];
}

export default function Dropdown({
  children,
  className,
  disabled,
  options,
}: IDropdown) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const parseOption = (option: string) => {
    switch (option) {
      case "USDT":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/usdt.png"
              width={24}
              height={24}
              alt="USDT"
            />
            {option}
          </p>
        );
      case "USDC":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/usdc.png"
              width={24}
              height={24}
              alt="USDC"
            />
            {option}
          </p>
        );
      case "ETH":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/eth.png"
              width={24}
              height={24}
              alt="ETH"
            />
            {option}
          </p>
        );
      case "BTC":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/btc.png"
              width={24}
              height={24}
              alt="BTC"
            />
            {option}
          </p>
        );
      case "BNB":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/bnb.png"
              width={24}
              height={24}
              alt="BNB"
            />
            {option}
          </p>
        );
      case "Ethereum Mainnet":
        return (
          <p className="flex flex-row gap-x-3">
            <Image
              src="/assets/tokens/eth.png"
              width={24}
              height={24}
              alt="Ethereum Mainnet"
            />
            {option}
          </p>
        );
      default:
        return <p className="flex flex-row gap-x-3">{option}</p>;
    }
  };

  return (
    <div className="relative">
      <button
        className={clsx(
          "flex flex-row items-center justify-between px-2 py-1 w-40 bg-white border-2 border-rift-grey-900 m-0",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {parseOption(selectedOption)}
        <Image
          src={"/assets/window-icons/dropdown.svg"}
          width={21}
          height={21}
          alt="dropdown"
        />
      </button>
      {isOpen ? (
        <div className="flex flex-col absolute transform translate-x-[159px] top-0 z-[999]">
          {options.map((option) => (
            <button
              key={option}
              className={clsx(
                "flex flex-row items-center justify-between px-2 py-1 w-40 bg-white border-2 border-rift-grey-900 m-0 hover:bg-rift-grey-500",
                selectedOption === option && "bg-rift-purple-1"
              )}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {parseOption(option)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
