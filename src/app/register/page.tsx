import DeleteUser from "@/components/deleteUser";
import RegisterForm from "@/components/form/createUser";
import { getUsers } from "@/lib/function";
import { cookies } from "next/headers";

type user = {
  id: number;
  username: string;
  password: string;
};

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value || "null";
  const data = await getUsers();
  return (
    <div className="w-full my-20">
      <RegisterForm token={token} />

      <div>
        <div className="flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md mx-30 my-10">
          <div className="py-4">
            <table className=" table-auto w-full">
              <thead>
                <tr className="border-b border-lgslate-200">
                  <th className="px-15 py-3 text-left w-1/2">
                    <span className="font-semibold text-slate-700">
                      Username
                    </span>
                  </th>

                  <th className="px-15 py-3 text-center w-1/2">
                    <span className="font-semibold text-slate-700">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((item: user) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-200 bg-white"
                  >
                    <td className="px-15 py-5 text-left">
                      <p className="font-sans text-md font-medium text-slate-500">
                        {item.username}
                      </p>
                    </td>
                    <td className="px-6 py-5 items-center flex justify-center">
                      <DeleteUser id={item.id}></DeleteUser>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
