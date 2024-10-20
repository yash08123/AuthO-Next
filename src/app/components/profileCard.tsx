"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

type ProfileCardProps = {
  name: string;
  email: string;
  image?: string | null; // Allow image to be string or null
};

export default function ProfileCard({ name, email, image }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center gap-8 bg-white p-10 rounded-xl shadow-md sm:w-96 dark:bg-gray-800">
      <Image
        src={image ?? "/default-avatar.png"} // Handle null by providing a default image
        alt={name ?? "User Avatar"}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="text-2xl font-bold text-gray-800 text-center dark:text-gray-200">
        Welcome, {name}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400">{email}</p>

      {/* Sign Out button */}
      <button
        onClick={() => signOut()}
        className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition ease-in-out duration-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500"
      >
        Sign Out
      </button>
    </div>
  );
}
