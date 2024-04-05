'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constants'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { BarChart3, Database, GitBranch, LucideMousePointerClick, MousePointer, Warehouse } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'
import Image from 'next/image'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

type Props = {}

const Sidebar = (props: Props) => {
  const pathName = usePathname()

  return (
    <div>
      <div className="dark:bg-black bg-white w-40 pt-4 pl-4 pb-2">
        <Link
          className="flex font-bold flex-row "
          href="/"
        >
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
      </div>
      
    <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2 w-12">
      
      <div className="flex items-center justify-center flex-col gap-8">
        <TooltipProvider>
            <ul>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <Link
                       href='/dashboard'
                      className={clsx(
                        'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === '/dashboard',
                        }
                      )}
                    >
                      {/* <menuItem.Component
                        selected={pathName === menuItem.href}
                      /> */}
                      <DashboardRoundedIcon />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>Dashboard</p>
                </TooltipContent>
              </Tooltip>
                
              <Tooltip>
                <TooltipTrigger>
                  <li className="pt-4">
                    <Link
                       href='/settings'
                      className={clsx(
                        'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === '/settings',
                        }
                      )}
                    >
                      <SettingsRoundedIcon />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </ul>
        </TooltipProvider>
        <Separator />
       </div> 
      <div className="flex items-center justify-center flex-col gap-8 pb-20">
        <ModeToggle />
      </div>
    </nav>
    </div>
  )
}

export default Sidebar