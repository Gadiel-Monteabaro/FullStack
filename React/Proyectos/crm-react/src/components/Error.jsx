const Error = ({ children }) => {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
      role="alert"
    >
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline"> {children}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
    </div>
  );
};

export default Error;
