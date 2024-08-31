import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};

export default function ProductsPagination({
  page,
  totalPages,
}: ProductsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10 gap-5">
      {page > 1 && (
        <Link
          href={`/admin/products?page=${page - 1}`}
          className="bg-white  px-4 py-2 text-sm rounded-sm text-gray-800  ring-1 ring-inset ring-gray-400 focus:z-20 focus:outline-offset-5"
        >
          &laquo;
        </Link>
      )}

      {pages.map((currentPage) => (
        <Link
          key={currentPage}
          href={`/admin/products?page=${currentPage}`}
          className={`${
            page === currentPage && "font-black"
          } bg-white  px-4 py-2 text-sm rounded-sm ring-1 ring-inset ring-gray-400 focus:z-20 focus:outline-offset-5`}
        >
          {currentPage}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          href={`/admin/products?page=${page + 1}`}
          className="bg-white  px-4 py-2 text-sm rounded-sm ring-1 ring-inset ring-gray-400 focus:z-20 focus:outline-offset-5"
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
