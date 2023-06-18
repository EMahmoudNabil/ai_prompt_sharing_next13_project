"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavHooks = () => {
  const { data: session } = useSession();
  console.log(session);
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();

      setProviders(res);
      // console.log(res);
    })();
  }, []);

  return [providers, toggleDropdown, setToggleDropdown, session];
};

export default NavHooks;
