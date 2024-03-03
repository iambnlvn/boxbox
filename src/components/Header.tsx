import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./theme-toggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3">
      <Link href="/" className="mx-4">
        <h1 className="font-bold text-2xl">Boxbox</h1>
      </Link>
      <div className="px-4 flex space-x-4 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" showName />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
