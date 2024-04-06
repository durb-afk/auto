import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type Props = {};

function Logs({ }: Props) {
    return (
        <>
            <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center border-b-1px border-neutral-900 justify-between">
                <Link className="flex font-bold flex-row " href="/">
                    {" "}
                    <aside className="flex items-center gap-[2px]">
                        <p className="text-3xl font-bold">Auto-m</p>
                        <Image
                            src="/autom8Logo.png"
                            width={25}
                            height={25}
                            alt="autom8 logo"
                            className="shadow-sm ml-[-5px]"
                        />
                    </aside>
                </Link>

        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-20 list-none text-lg">
            <li>
              <Link href="/overview">Overview</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/logs">Logs</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
        <aside>
          <Link
            href="/dashboard"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBff_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              {true ? "Dashboard" : "Get Started"}
            </span>
          </Link>
          <MenuIcon className="md: hidden" />
        </aside>
      </header>
      <div className="pt-24 mx-32 justify-center">
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.2.3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.2.2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.2.1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.2.0</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.1.5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.1.4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.1.3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.1.2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] rounded-xl">
          <h2>v1.1.1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
        <div className="pl-4 pt-6 pb-6 dark:hover:bg-[#111111] cursor-pointer hover:bg-[#5b5b5b] rounded-xl">
          <h2>v1.1.0</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
            modi pariatur eius dolorum quidem rem quibusdam iusto similique
            sapiente voluptatibus voluptates ad dolore tempore, aliquam deserunt
            eum unde nisi.
          </p>
        </div>
        <Separator />
      </div>
    </>
  );
}

export default Logs;
