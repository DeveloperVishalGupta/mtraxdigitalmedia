import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Kbd } from '@heroui/kbd';
import { Link } from '@heroui/link';
import { Input } from '@heroui/input';
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { GithubIcon, SearchIcon } from '../assets/icons/icons';
import { ThemeSwitch } from './theme-switch';
import { siteConfig } from '../config/site';
import { YouTube } from '../assets/brand-Icons';
import { useEffect, useState } from 'react';
import { headings } from '../constant';

export const Navbar = () => {
  const pageRoutes = siteConfig.pageRoutes;
  const [companyLinks, setCompanyLinks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setQuery(value);
      const suggestions = headings.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(suggestions);
    } else {
      setQuery(value);
      setFiltered([]);
    }
  };

  const handleSelect = (item) => {
    router.push(`${item.page}#${item.id}`);
  };

  useEffect(() => {
    if (pageRoutes.length > 0) {
      setCompanyLinks(pageRoutes.filter((item) => item.type === 1));
    }
  }, [pageRoutes]);
  const searchInput = (
    <div>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm',
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={['command']}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        value={query}
        onChange={handleChange}
      />

      {filtered.length > 0 && (
        <ul className="border dark:bg-black bg-white rounded mt-2 shadow absolute right-6 max-w-96">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="p-2 dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer  whitespace-normal"
              onClick={() => handleSelect(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <HeroUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-xl text-inherit text-lightThemeSecondryText dark:text-darkThemeSecondryText ">
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                MTrax
              </span>{' '}
              Digital Media
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {companyLinks?.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium capitalize'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle>hello</NavbarMenuToggle>
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {companyLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={'foreground'} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
