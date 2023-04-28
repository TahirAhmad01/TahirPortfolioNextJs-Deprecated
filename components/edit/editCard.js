function EditCard({ title, addBtn, onClick, children }) {
  return (
    <>
      <div className="pt-5">
        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-7">
          <div className="px-5 py-4 border-gray-200 border-b-2 dark:border-gray-700 font-semibold text-xl capitalize flex items-center justify-between">
            <div>{title}</div>
            {addBtn && (
              <div>
                <button
                  type="button"
                  onClick={onClick}
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add new
                </button>
              </div>
            )}
          </div>
          <div className="px-5 py-4">{children}</div>
        </div>
      </div>
    </>
  );
}

export default EditCard;
