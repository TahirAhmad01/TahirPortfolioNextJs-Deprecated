import EditCard from '@/components/edit/editCard';
import EditModal from '@/components/edit/editModal';
import EditPageLayout from '@/components/edit/editPageLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditSkills() {
  const [open, setOpen] = useState(false);
  const [addOrEdit, setDec] = useState('');

  const handleOpen = modal => {
    setOpen(true);
    if (modal === 'add') {
      setDec('add');
    } else {
      setDec('edit');
    }
  };

  const [skillData, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/skillDataApi').then(res => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <EditPageLayout>
      <EditCard title="Edit skill" onClick={() => handleOpen('add')} addBtn>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {skillData.map((skill, idx) => {
                const { name, progress } = skill || {};
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={idx}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {name}
                    </th>
                    <td className="px-6 py-4">{progress}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleOpen('edit')}
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </EditCard>

      <EditModal open={open} setOpen={setOpen} handleOpen={handleOpen}>
        {addOrEdit === 'add' ? (
          <div>
            <div className="text-2xl font-semibold capitalize text-center mb-2">
              add data
            </div>
            <div>
              <form>
                <input
                  type="text"
                  className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                  placeholder="Name"
                  required
                />
                <input
                  type="number"
                  className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                  placeholder="Progress"
                  required
                />
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-3"
                >
                  Add skill
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div ClassName="text-2xl font-semibold capitalize text-center mb-2">
            Edit data
          </div>
        )}
      </EditModal>
    </EditPageLayout>
  );
}

export default EditSkills;
