import EditCard from '@/components/edit/editCard';
import EditModal from '@/components/edit/editModal';
import EditPageLayout from '@/components/edit/editPageLayout';
import ModalInput from '@/components/edit/modalInput';
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditSkills() {
  const [skillData, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [addOrEdit, setDec] = useState('');
  const [editVal, setEditVal] = useState({
    id: '',
    name: '',
    progress: '',
  });
  const [addData, setAddData] = useState({
    name: '',
    progress: '',
  });

  const LastData = skillData?.slice(-1)[0];

  const handleOpen = modal => {
    setOpen(true);
    if (modal === 'add') {
      setDec('add');
    } else {
      setDec('edit');
    }
  };

  const getSkills = () => {
    axios.get('/api/skillDataApi').then(res => {
      console.log(res);
      setData(res.data);
    });
  };

  const submitAddData = arrData => {
    // console.log(userVal);fsdf
    axios
      .post('/api/skillDataApi', arrData, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        console.log(response)
        setData(response.data);
        setOpen(false);
      });
  };

  useEffect(() => {
    getSkills();
  }, []);

  const editData = (obj) => {
    const objIndex = obj.id - 1 ;
    skillData[objIndex].name = obj.name;
    skillData[objIndex].progress = Number(obj.progress)
    // console.log(skillData)   
    submitAddData(skillData)
  }

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
                const { id, name, progress } = skill || {};
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
                      <span
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          handleOpen('edit');
                          setEditVal({
                            id: id,
                            name: name,
                            progress: progress,
                          });
                        }}
                      >
                        Edit
                      </span>
                      <span
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3"
                        onClick={() => {
                          submitAddData(
                            skillData.filter(item => item.id !== skill.id),
                          );
                        }}
                      >
                        Delete
                      </span>
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
              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitAddData([
                    ...skillData,
                    {
                      id: LastData?.id + 1,
                      name: addData?.name,
                      progress: addData?.progress,
                    },
                  ]);
                }}
              >
                <ModalInput
                  type="text"
                  className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                  placeholder="Name"
                  value={addData?.Name}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      name: e.target.value,
                    });
                  }}
                  required
                />
                <ModalInput
                  type="number"
                  className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                  placeholder="Progress"
                  value={addData?.progress}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      progress: e.target.value,
                    });
                  }}
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
          <>
            <div className="text-2xl font-semibold capitalize text-center mb-2">
              Edit data
            </div>
            <form onSubmit={e => {e.preventDefault();editData(editVal)}}>
              <ModalInput
                type="text"
                className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                placeholder="Name"
                value={editVal?.name}
                onChange={e => {
                  setEditVal({ ...editVal, name: e.target.value });
                }}
                required
              />
              <ModalInput
                type="number"
                className="w-full my-2 rounded-md px-3 py-2 border border-gray-300"
                placeholder="Progress"
                value={editVal?.progress}
                onChange={e => {
                  setEditVal({ ...editVal, progress: e.target.value });
                }}
                required
              />
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-3"
              >
                Save
              </button>
            </form>
          </>
        )}
      </EditModal>
    </EditPageLayout>
  );
}

export default EditSkills;
