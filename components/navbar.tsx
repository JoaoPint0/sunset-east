import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "./logo";
import ContactButton from "./buttons/contactButton";

const Navbar = (props: { base: string; }) => {
  const software = [
    { name:"Experience", route: "portfolio"},
    { name:"Blog", route: "blog"}
  ];

  const rent = [
    { name:"Rental Cars", route: "cars"},
    { name:"Destinations", route: "destinations"},
    { name:"About", route: "about"},
  ];

  let navigation: {name: string, route:string}[] = [] 
  
  if(props.base.includes("rent")) {
    navigation = rent 
  } else if(props.base.includes("software")) {
    navigation = software  
  } else {
    navigation = []
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                
              <Logo base={`${props.base}`}/>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={`${props.base}/${item.route}`} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none">
                          {item.name}
                      </Link>
                    ))}
                    <div className="py-12">
                      <ContactButton base={`${props.base}`}></ContactButton>
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={`${props.base}/${item.route}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 focus:outline-none dark:focus:bg-gray-800">
                    {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ContactButton base={`${props.base}`} ></ContactButton>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
