"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AlignRight,
  ChevronDown,
  ChevronRight,
  ScrollText,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./index";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState, useTransition } from "react";
// import { setUserLocale } from "@/services/locale";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./index";

import { AnimatePresence, motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "about us", href: "/about-us" },
  {
    name: "products",
    href: "/products",
    isSubMenu: true,
    subMenuList: {
      Comp: () => <ProductsSubMenuList />,
    },
  },
  {
    name: "resources",
    href: "/resources",
    isSubMenu: true,
    subMenuList: {
      Comp: () => <ResourcesSubMenuList />,
    },
  },
  { name: "contact us", href: "/contact-us" },
];

const Navbar = () => {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  const checkScreenSize = useCallback(() => {
    const mobile = window.innerWidth < 768; // md breakpoint in Tailwind
    setIsMobile(mobile);

    // If screen is resized to desktop while menu is open, close menu and restore scroll
    if (!mobile && isOpen) {
      setIsOpen(false);
      unlockScroll();
    }
  }, [isOpen]);

  // Function to lock scroll
  const lockScroll = () => {
    setScrollPosition(window.scrollY);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    if (window.lenis) {
      window.lenis.stop();
    }
  };

  // Function to unlock scroll
  const unlockScroll = () => {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");

    window.scrollTo(0, scrollPosition);

    if (window.lenis) {
      window.lenis.start();
    }
  };

  // Initialize screen size check on mount
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      unlockScroll(); // Ensure scroll is unlocked when component unmounts
    };
  }, [checkScreenSize]);

  // Handle scroll locking based on menu state
  useEffect(() => {
    if (isOpen && isMobile) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen, isMobile]);

  function onChange(value) {
    const newLocale = value;
    startTransition(() => {
      // Replace the locale segment in the pathname
      const segments = pathname.split("/");
      if (segments.length > 1) {
        segments[1] = newLocale;
        const newPath = segments.join("/");
        router.push(newPath);
      } else {
        router.push(`/${newLocale}`);
      }
    });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-inter sticky top-0 z-50 w-full bg-mx-gray border-b border-gray-200">
      <nav className="max-w-[75rem] mx-auto flex items-center justify-between h-[3.75rem] px-4 md:px-6">
        {/* Left Side: Logo + Navigation Links */}
        <div className="flex items-center gap-x-6 w-full justify-between md:justify-start">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/moxey-dark.png"
              alt="Moxey Logo"
              width={110}
              height={110}
              priority
            />
          </Link>

          {/* Navbar mobile */}
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <AlignRight className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem
                  className={navigationMenuTriggerStyle()}
                  key={link.name}
                >
                  {!link.isSubMenu && (
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="hover:text-primary transition-colors"
                      >
                        {t(`navLinks.${link.name}`)}
                      </Link>
                    </NavigationMenuLink>
                  )}
                  {link.isSubMenu && (
                    <>
                      <NavigationMenuTrigger className="capitalize">
                        {link.name}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        {<link.subMenuList.Comp />}
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex items-center gap-x-4">
          <Select value={locale} onValueChange={onChange}>
            <SelectTrigger className="font-medium min-w-[150px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="z-50 w-[150px]">
              <SelectItem value="en-ae">
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-sm">English (UAE)</p>
                </div>
              </SelectItem>
              <SelectItem value="ar-ae">
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-sm">Arabic (UAE)</p>
                </div>
              </SelectItem>
              <SelectItem value="en-sa">
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-sm">English (KSA)</p>
                </div>
              </SelectItem>
              <SelectItem value="ar-sa">
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-sm">Arabic (KSA)</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          {/* <GradientButton
            variant="dark"
            className="text-sm py-0 px-5 capitalize"
          >
            {t("navActionBtn")}
          </GradientButton> */}
        </div>
      </nav>

      <MobileNavigation
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        locale={locale}
        onChange={onChange}
      />
    </header>
  );
};

const ProductsSubMenuList = () => {
  const locale = useLocale();
  return (
    <ul className="grid grid-cols-2 w-[600px] gap-3">
      <li className="row-span-2">
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-mx-green/10 p-6 no-underline outline-none focus:shadow-md border border-gray-200 space-y-1"
            href={`/${locale}/products/moxey-pay`}
          >
            {/* <Icons.logo className="h-6 w-6" /> */}
            <div>
              <Image
                src="/moxeypay-1.png"
                alt="moxey-logo"
                width={110}
                height={80}
              />
            </div>
            <p className="text-sm leading-tight text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </Link>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gray-200/15 border border-gray-200 space-y-1">
            <div>
              <p className="text-xs font-semibold text-orange-500 pb-1">
                Coming Soon
              </p>
              <Image
                src="/moxeyleasing-1.png"
                alt="moxey-leasing-logo"
                width={130}
                height={80}
              />
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </a>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gray-200/15 border border-gray-200 space-y-1">
            <div>
              <p className="text-xs font-semibold text-orange-500 pb-1">
                Coming Soon
              </p>
              <Image
                src="/moxeyscf-1.png"
                alt="moxey-scf-logo"
                width={110}
                height={80}
              />
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </a>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gray-200/15 border border-gray-200 space-y-1">
            <div>
              <p className="text-xs font-semibold text-orange-500 pb-1">
                Coming Soon
              </p>
              <Image
                src="/moxeyfactoring-1.png"
                alt="moxey-factoring-logo"
                width={130}
                height={80}
              />
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </a>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors bg-gray-200/15 border border-gray-200 space-y-1">
            <div>
              <p className="text-xs font-semibold text-orange-500 pb-1">
                Coming Soon
              </p>
              <Image
                src="/moxeybnpl-1.png"
                alt="moxey-bnpl-logo"
                width={110}
                height={80}
              />
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    </ul>
  );
};

const ResourcesSubMenuList = () => {
  const locale = useLocale();
  return (
    <ul className="grid grid-cols-2 w-[600px] gap-3">
      <li className="row-span-2">
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none border border-gray-200 space-y-2"
            href={`/${locale}/blog`}
          >
            {/* <Icons.logo className="h-6 w-6" /> */}
            <div className="flex items-center gap-1">
              <ScrollText className="text-mx-green w-6 h-6" />
              <span className="uppercase text-base font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
                Blog
              </span>
            </div>
            <p className="text-sm leading-tight text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </Link>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <Link
            href={`/${locale}/privacy-policy`}
            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors border border-gray-200 space-y-1"
          >
            <div className="flex items-center gap-1">
              <ScrollText className="text-mx-green w-6 h-6" />
              <span className="uppercase text-base font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
                Privacy Policy
              </span>
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </Link>
        </NavigationMenuLink>
      </li>

      <li>
        <NavigationMenuLink asChild>
          <Link
            href={`/${locale}/terms-of-use`}
            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors border border-gray-200 space-y-1"
          >
            <div className="flex items-center gap-1">
              <ScrollText className="text-mx-green w-6 h-6" />
              <span className="uppercase text-base font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
                Terms of Use
              </span>
            </div>

            <p className="line-clamp-2 text-sm leading-snug text-gray-700">
              Stay informed on the latest fraud and risk prevention insights
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  );
};

const MobileNavigation = ({ isOpen, toggleMenu, locale, onChange }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // We need to pass locale to submenus or use default hrefs
  // But wait, the loop below uses link.href for main items

  const MOB_NAV_LINKS = [
    {
      name: "products",
      href: "/products",
      isSubMenu: true,
      subMenuList: (props) => (
        <ProductMenuListMobile {...props} locale={locale} />
      ),
    },
    {
      name: "resources",
      href: "/resources",
      isSubMenu: true,
      subMenuList: (props) => (
        <ResourcesMenuListMobile {...props} locale={locale} />
      ),
    },
    { name: "about us", href: "/about-us" },
    { name: "contact us", href: "/contact-us" },
  ];

  const onChangeSubMenu = (menuName) => {
    setIsSubMenuOpen((prev) => (prev === menuName ? false : menuName));
  };

  const onChangeRoute = (menuName) => {
    onChangeSubMenu(menuName);
    toggleMenu();
  };

  return (
    <div className="block md:hidden">
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 right-0 top-[3.75rem] z-[100] bg-mx-gray shadow-lg border-t border-gray-300 max-h-screen h-screen overflow-y-auto overscroll-contain touch-pan-y"
          >
            <div className="pt-6 pb-30 flex flex-col">
              <ul className="flex flex-col space-y-4">
                {MOB_NAV_LINKS.map((link, index) => (
                  <li
                    key={`${link.name}-${index}`}
                    className="py-2 border-b border-gray-200 w-full px-4"
                  >
                    {!link.isSubMenu ? (
                      <Link
                        href={`/${locale}${link.href}`}
                        className="block text-gray-800 font-medium hover:text-gray-900 transition-colors capitalize"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className="w-full flex items-center justify-between text-gray-800"
                          onClick={() => onChangeSubMenu(link.name)}
                        >
                          <p className=" font-medium capitalize">{link.name}</p>
                          {isSubMenuOpen === link.name ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>

                        {isSubMenuOpen === link.name && (
                          <link.subMenuList
                            linkName={link.name}
                            onChangeRoute={onChangeRoute}
                          />
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="w-full p-5 flex justify-end">
                <Select value={locale} onValueChange={onChange}>
                  <SelectTrigger className="font-medium min-w-[150px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="z-50 w-[200px]">
                    <SelectItem value="en-ae">
                      <div className="flex gap-1 items-center">
                        <p className="font-medium text-sm">English (UAE)</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="ar-ae">
                      <div className="flex gap-1 items-center">
                        <p className="font-medium text-sm">Arabic (UAE)</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="en-sa">
                      <div className="flex gap-1 items-center">
                        <p className="font-medium text-sm">English (KSA)</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="ar-sa">
                      <div className="flex gap-1 items-center">
                        <p className="font-medium text-sm">Arabic (KSA)</p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductMenuListMobile = ({ onChangeRoute, linkName, locale }) => {
  return (
    <ul className="px-2 py-2">
      <Link
        href={`/${locale}/products/moxey-pay`}
        asChild
        onClick={() => onChangeRoute(linkName)}
      >
        <li className="py-5 space-y-2 border-b border-gray-200">
          <div>
            <Image
              src="/moxeypay.png"
              alt="moxey-logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-sm leading-tight text-gray-700">
            Stay informed on the latest fraud and risk prevention insights
          </p>
        </li>
      </Link>

      <li className="py-5 space-y-2 border-b border-gray-200">
        <p className="text-xs font-semibold text-orange-500">Coming Soon</p>
        <div>
          <Image
            src="/moxeyleasing.png"
            alt="moxey-logo"
            width={100}
            height={100}
          />
        </div>
        <p className="text-sm leading-tight text-gray-700">
          Stay informed on the latest fraud and risk prevention insights
        </p>
      </li>

      <li className="py-5 space-y-2 border-b border-gray-200">
        <p className="text-xs font-semibold text-orange-500">Coming Soon</p>
        <div>
          <Image
            src="/moxeybnpl.png"
            alt="moxey-logo"
            width={100}
            height={100}
          />
        </div>
        <p className="text-sm leading-tight text-gray-700">
          Stay informed on the latest fraud and risk prevention insights
        </p>
      </li>

      <li className="py-5 space-y-2">
        <p className="text-xs font-semibold text-orange-500">Coming Soon</p>
        <div>
          <Image
            src="/moxeyfactoring.png"
            alt="moxey-logo"
            width={100}
            height={100}
          />
        </div>
        <p className="text-sm leading-tight text-gray-700">
          Stay informed on the latest fraud and risk prevention insights
        </p>
      </li>
    </ul>
  );
};

const ResourcesMenuListMobile = ({ onChangeRoute, linkName, locale }) => {
  return (
    <ul className="px-2 py-2">
      <Link
        href={`/${locale}/blog`}
        asChild
        onClick={() => onChangeRoute(linkName)}
      >
        <li className="py-5 space-y-2 border-b border-gray-200">
          <div className="flex items-center">
            <ScrollText className="text-mx-green w-5 h-5" />
            <span className="uppercase text-sm font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
              Blog
            </span>
          </div>
          <p className="text-sm leading-tight text-gray-700">
            Stay informed on the latest fraud and risk prevention insights
          </p>
        </li>
      </Link>

      <Link
        href={`/${locale}/privacy-policy`}
        asChild
        onClick={() => onChangeRoute(linkName)}
      >
        <li className="py-5 space-y-2 border-b border-gray-200">
          <div className="flex items-center">
            <ScrollText className="text-mx-green w-5 h-5" />
            <span className="uppercase text-sm font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
              Privacy Policy
            </span>
          </div>
          <p className="text-sm leading-tight text-gray-700">
            Stay informed on the latest fraud and risk prevention insights
          </p>
        </li>
      </Link>

      <Link
        href={`/${locale}/terms-of-use`}
        asChild
        onClick={() => onChangeRoute(linkName)}
      >
        <li className="py-5 space-y-2">
          <div className="flex items-center">
            <ScrollText className="text-mx-green w-5 h-5" />
            <span className="uppercase text-sm font-medium tracking-wide px-2 py-1 rounded-sm text-gray-700 flex items-center justify-center">
              Terms of Use
            </span>
          </div>
          <p className="text-sm leading-tight text-gray-700">
            Stay informed on the latest fraud and risk prevention insights
          </p>
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
