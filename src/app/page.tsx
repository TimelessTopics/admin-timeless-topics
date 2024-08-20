import AddForm from "@/components/AddForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-md mx-auto flex justify-end">
        <Link href={"all"} className="bg-white py-2 px-3 rounded-md text-black capitalize font-semibold">
          View All
        </Link>
      </div>
      <AddForm />
    </main>
  );
}
