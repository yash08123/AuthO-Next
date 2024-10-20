import { auth } from "@/app/auth";
import ProfileCard from "./components/profileCard"; // Import the ProfileCard component
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 py-12 sm:px-20 dark:bg-gray-900">
      <main className="flex flex-col items-center gap-8 bg-gray-800 p-10 rounded-xl shadow-md sm:w-96 dark:bg-gray-800">
        {user ? (
          <ProfileCard
            name={user.name!}
            email={user.email!}
            image={user.image ?? undefined} // Convert null to undefined
          />
        ) : (
          <>
            {/* If not authenticated, show sign-in button */}
            <h1 className="text-xl font-bold text-gray-200 text-center dark:text-gray-200">
              Get Started
            </h1>

            {/* Sign In button */}
            <Link href="api/auth/signin">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">
                Sign in
              </button>
            </Link>
          </>
        )}
      </main>
    </div>
  );
}
