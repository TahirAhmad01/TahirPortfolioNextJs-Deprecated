import EditCard from '@/components/edit/editCard';
import EditModal from '@/components/edit/editModal';
import EditPageLayout from '@/components/edit/editPageLayout';
import ModalInput from '@/components/edit/modalInput';
import catBtnList from '@/utils/buttonList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function index() {
  const [projectList, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [addOrEdit, setDec] = useState('');
  const [editVal, setEditVal] = useState({
    name: '',
    category: [],
    placeholderSrc: '',
    imageSrc: '',
    link: '',
    source: '',
    description: '',
  });
  const [addData, setAddData] = useState({
    name: '',
    category: [],
    placeholderSrc: '',
    imageSrc: '',
    link: '',
    source: '',
    description: '',
  });

  const LastData = projectList?.slice(-1)[0];

  const handleOpen = modal => {
    setOpen(true);
    if (modal === 'add') {
      setDec('add');
    } else {
      setDec('edit');
    }
  };

  const getProjects = () => {
    axios.get('/api/projectApi').then(res => {
      // console.log(res);
      setData(res.data);
    });
  };

  const submitAddData = arrData => {
    // console.log(userVal);fsdf
    axios
      .post('/api/projectApi', arrData, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
        setData(response.data);
        setOpen(false);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const editData = obj => {
    const objIndex = obj.id - 1;
    projectList[objIndex].name = obj?.name;
    projectList[objIndex].category = obj?.category;
    projectList[objIndex].placeholderSrc = obj?.placeholderSrc;
    projectList[objIndex].imageSrc = obj?.imageSrc;
    projectList[objIndex].link = obj?.link;
    projectList[objIndex].source = obj?.source;
    projectList[objIndex].description = obj?.description;
    // console.log(skillData)
    submitAddData(projectList);
  };

  return (
    <EditPageLayout>
      <EditCard title="Edit project" onClick={() => handleOpen('add')} addBtn>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  details
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projectList.map((project, idx) => {
                const {
                  id,
                  name,
                  category,
                  source,
                  link,
                  imageSrc,
                  placeholderSrc,
                  description,
                } = project || {};
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={idx}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={imageSrc}
                        alt={name}
                        className="w-40 h-auto rounded-lg"
                      />
                    </th>
                    <td className="px-6 py-4">
                      <div className="font-bold dark:text-gray-100">{name}</div>

                      <div>{link}</div>
                      <div>{source}</div>
                      <div className="py-2">
                        {category.map((cat, idx) => (
                          <>
                            {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                            <div
                              className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 capitalize inline-block"
                              key={idx}
                            >
                              {cat}
                            </div>
                          </>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          handleOpen('edit');
                          setEditVal({
                            id: id,
                            name: name,
                            category: category,
                            placeholderSrc: placeholderSrc,
                            imageSrc: imageSrc,
                            link: link,
                            source: source,
                            description: description,
                          });
                        }}
                      >
                        Edit
                      </span>
                      <span
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3"
                        onClick={() => {
                          submitAddData(
                            projectList.filter(item => item.id !== project.id),
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
                    ...projectList,
                    {
                      id: LastData?.id + 1,
                      name: addData?.name,
                      category: addData?.category,
                      placeholderSrc: addData?.placeholderSrc,
                      imageSrc: addData?.imageSrc,
                      link: addData?.link,
                      source: addData?.source,
                      description: addData?.description,
                    },
                  ]);
                }}
              >
                <ModalInput
                  type="text"
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
                  type="text"
                  placeholder="Placeholder Src"
                  value={addData?.placeholderSrc}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      placeholderSrc: e.target.value,
                    });
                  }}
                  required
                />
                <ModalInput
                  type="text"
                  placeholder="Image Src"
                  value={addData?.imageSrc}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      imageSrc: e.target.value,
                    });
                  }}
                  required
                />
                <ModalInput
                  type="text"
                  placeholder="Link"
                  value={addData?.link}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      link: e.target.value,
                    });
                  }}
                  required
                />
                <ModalInput
                  type="text"
                  placeholder="Source"
                  value={addData?.source}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      source: e.target.value,
                    });
                  }}
                  required
                />
                <ModalInput
                  type="text"
                  placeholder="Description"
                  value={addData?.description}
                  onChange={e => {
                    setAddData({
                      ...addData,
                      description: e.target.value,
                    });
                  }}
                  required
                />

                <div>
                  <span>category</span>
                  <div className="border rounded-md px-4 py-3 my-3">
                    {addData?.category.map((cat, idx) => (
                      <>
                        {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                        <div
                          className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 capitalize inline-block dark:hover:bg-blue-700 dark:hover:text-white cursor-pointer"
                          key={idx}
                          onClick={() => {
                            const newArray = [...addData.category];
                            newArray.splice(idx, 1);
                            setAddData({
                              ...addData,
                              category: newArray,
                            });

                            // setMyArray(newArray);

                            console.log(newArray);
                          }}
                        >
                          {cat}
                        </div>
                      </>
                    ))}
                  </div>
                  <div>
                    {catBtnList
                      .filter(
                        item =>
                          item.category !== 'all' &&
                          !addData.category.includes(item.name),
                      )
                      .map((cat, idx) => (
                        <>
                          {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                          <div
                            className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-1.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 hover:bg-blue-400 dark:hover:bg-blue-40 capitalize inline-block cursor-pointer dark:hover:bg-blue-700 dark:hover:text-white"
                            key={idx}
                            onClick={() => {
                              if (!addData.category.includes(cat.name)) {
                                setAddData({
                                  ...addData,
                                  category: [...addData.category, cat.name],
                                });
                              }
                            }}
                          >
                            {cat.name}
                          </div>
                        </>
                      ))}
                  </div>
                </div>
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
            <form
              onSubmit={e => {
                e.preventDefault();
                editData(editVal);
              }}
            >
              <ModalInput
                type="text"
                placeholder="Name"
                value={editVal?.name}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    name: e.target.value,
                  });
                }}
                required
              />
              <ModalInput
                type="text"
                placeholder="Placeholder Src"
                value={editVal?.placeholderSrc}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    placeholderSrc: e.target.value,
                  });
                }}
                required
              />
              <ModalInput
                type="text"
                placeholder="Image Src"
                value={editVal?.imageSrc}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    imageSrc: e.target.value,
                  });
                }}
                required
              />
              <ModalInput
                type="text"
                placeholder="Link"
                value={editVal?.link}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    link: e.target.value,
                  });
                }}
                required
              />
              <ModalInput
                type="text"
                placeholder="Source"
                value={editVal?.source}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    source: e.target.value,
                  });
                }}
                required
              />
              <ModalInput
                type="text"
                placeholder="Description"
                value={editVal?.description}
                onChange={e => {
                  setEditVal({
                    ...editVal,
                    description: e.target.value,
                  });
                }}
                required
              />
              <div>
                <span>category</span>
                <div className="border rounded-md px-4 py-3 my-3">
                  {editVal?.category.map((cat, idx) => (
                    <>
                      {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                      <div
                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 capitalize inline-block dark:hover:bg-blue-700 dark:hover:text-white cursor-pointer"
                        key={idx}
                        onClick={() => {
                          const newArray = [...editVal.category];
                          newArray.splice(idx, 1);
                          setEditVal({
                            ...editVal,
                            category: newArray,
                          });
                        }}
                      >
                        {cat}
                      </div>
                    </>
                  ))}
                </div>
                <div>
                  {catBtnList
                    .filter(
                      item =>
                        item.category !== 'all' &&
                        !editVal.category.includes(item.name),
                    )
                    .map((cat, idx) => (
                      <>
                        {/* <span key={idx}>{(idx ? ", " : "") + cat}</span> */}
                        <div
                          className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-1.5 rounded-2xl dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-700 dark:hover:text-white dark:hover:bg-blue-40 capitalize inline-block cursor-pointer"
                          key={idx}
                          onClick={() => {
                            if (!editVal.category.includes(cat.name)) {
                              setEditVal({
                                ...editVal,
                                category: [...editVal.category, cat.name],
                              });
                            }
                          }}
                        >
                          {cat.name}
                        </div>
                      </>
                    ))}
                </div>
              </div>
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

export default index;
