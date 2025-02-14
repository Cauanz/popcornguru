import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { IoPlayOutline } from 'react-icons/io5';

export default function FlyoutMenu({ title, items }) {
  return (
    <>
      <Popover className="relative">
        <PopoverButton className="flex items-center p-2 font-semibold text-white bg-[#00b4d8] rounded-xl hover:bg-[#0090b0]">
          <span>{title}</span>
          <ChevronDownIcon aria-hidden="true" className="size-5" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
            <div className="p-4">
              {Array.isArray(items) && items.map((item) => (
                <div
                  key={item.provider_id}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className=" w-10 h-10 mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item.logo_path}`}
                      alt={item.provider_name}
                      className="w-10 h-10 object-cover rounded mr-4 "
                    />
                    {/* <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-600 group-hover:text-indigo-600"
                    /> */}
                  </div>
                  <div className='flex items-center justify-center'>
                    <a href="#" className="font-semibold text-gray-900">
                      {item.provider_name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {/* {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                  {item.name}
                </a>
              ))} */}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
}
