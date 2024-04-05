import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients } from "@/lib/constants";

type Props = {}

function Features({ }: Props) {
    return (
        <div>
            <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center border-b-1px border-neutral-900 justify-between">
                <Link
                    className="flex font-bold flex-row "
                    href="/"
                > <aside className="flex items-center gap-[2px]">
                        <p className="text-3xl font-bold">Auto-m</p>
                        <Image
                            src="/autom8Logo.png"
                            width={25}
                            height={25}
                            alt="autom8 logo"
                            className="shadow-sm ml-[-5px]"
                        />
                    </aside></Link>

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

            <div className="flex flex-col items-center justify-center">
                <div className="max-w-5xl mx-auto mt-10">
                    <HoverEffect items={projects} />
                </div>

                <InfiniteMovingCards
                    className="md:mt-[-2rem] mt-[-50px] bg-gray-900"
                    items={clients}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

export default Features