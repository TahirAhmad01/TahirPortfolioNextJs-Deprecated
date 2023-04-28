function EditCard({ title, children }) {
  return (
    <>
      <div className="pt-5">
        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-7">
          <div className="px-5 py-4 border-gray-200 border-b-2 dark:border-gray-700 font-semibold text-xl capitalize">
            {title}
          </div>
          <div className="px-5 py-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCard;
