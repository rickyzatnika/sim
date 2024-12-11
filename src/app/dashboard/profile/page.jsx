"use client";

import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import ProfileForm from "@/component/ProfileForm";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const { data: session } = useSession();

  const { data: users, mutate } = useSWR(
    session?.user?._id
      ? `${process.env.NEXT_PUBLIC_API_PRO}/api/register/${session?.user?._id}`
      : null,
    fetcher
  );

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 md:gap-8 items-start">
        <div className="w-full flex-1 bg-white  rounded shadow-lg">
          <div className="w-full border-b mb-2 md:mb-8  flex items-center justify-between px-2">
            <p className="py-4 px-4 text-xl font-semibold text-blue-900/80">
              Murid Baik
            </p>
          </div>
          <div className="w-full flex items-center justify-center md:mx-auto p-4 lg:p-12">
            <Image
              alt="siswi-icb"
              src="/siswi.png"
              width={270}
              height={270}
              priority={true}
            />
          </div>
        </div>

        <div className="w-full px-4 flex-1 bg-gray-50 p-14 shadow-lg rounded">
          <ProfileForm
            setShowModal={setShowModal}
            showModal={showModal}
            users={users}
            mutate={mutate}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
