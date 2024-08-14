



// // import React, { useState, useEffect } from 'react';
// // import './CategoryPage.css';
// // import Navbar from '../components/Navbar/Navbar';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEdit, faTrash, faPlus, faFileAlt, faDollarSign, faWallet } from '@fortawesome/free-solid-svg-icons';
// // import axios from 'axios';
// // const CategoryPage = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [newCategory, setNewCategory] = useState('');
// //   const [newLimit, setNewLimit] = useState('');
// //   const [newSpent, setNewSpent] = useState('');
// //   const [editIndex, setEditIndex] = useState(null);
// //   const [editedCategory, setEditedCategory] = useState('');
// //   const [editedLimit, setEditedLimit] = useState('');
// //   const [editedSpent, setEditedSpent] = useState('');
// //   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

// //   useEffect(() => {
// //     const storedCategories = JSON.parse(localStorage.getItem('categories'));
// //     if (storedCategories) {
// //       setCategories(storedCategories);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem('categories', JSON.stringify(categories));
// //   }, [categories]);

// //   const handleAddCategory = () => {
// //     if (newCategory.trim() !== '' && newLimit.trim() !== '' && newSpent.trim() !== '') {
// //       if (parseFloat(newSpent) > parseFloat(newLimit)) {
// //         setShowPopup(true); // Show popup if spent exceeds limit
// //       }
// //       setCategories([...categories, { name: newCategory.trim(), limit: parseFloat(newLimit), spent: parseFloat(newSpent) }]);
// //       setNewCategory('');
// //       setNewLimit('');
// //       setNewSpent('');
// //     }
// //   };


  

// // /*const handleAddCategory = async () => {
// //   if (newCategory.trim() !== '' && newLimit.trim() !== '' && newSpent.trim() !== '') {
// //     if (parseFloat(newSpent) > parseFloat(newLimit)) {
// //       setShowPopup(true); // Show popup if spent exceeds limit
// //       return;
// //     }

// //     const categoryData = {
// //       name: newCategory.trim(),
// //       limit: parseFloat(newLimit),
// //       spent: parseFloat(newSpent),
// //     };

// //     try {
// //       const response = await axios.post('http://localhost:8080/api/categories/add', categoryData);
// //       setCategories([...categories, response.data]);
// //       setNewCategory('');
// //       setNewLimit('');
// //       setNewSpent('');
// //     } catch (error) {
// //       console.error("There was an error adding the category!", error);
// //     }
// //   }
// // };*/


// //  const handleEditCategory = (index) => {
// //     setEditIndex(index);
// //     setEditedCategory(categories[index].name);
// //     setEditedLimit(categories[index].limit);
// //     setEditedSpent(categories[index].spent);
// //   };

// //   const handleUpdateCategory = () => {
// //     if (parseFloat(editedSpent) > parseFloat(editedLimit)) {
// //       setShowPopup(true); // Show popup if spent exceeds limit
// //     }
// //     const updatedCategories = [...categories];
// //     updatedCategories[editIndex] = {
// //       name: editedCategory,
// //       limit: parseFloat(editedLimit),
// //       spent: parseFloat(editedSpent),
// //     };
// //     setCategories(updatedCategories);
// //     setEditIndex(null);
// //     setEditedCategory('');
// //     setEditedLimit('');
// //     setEditedSpent('');
// //   };

// //   const handleDeleteCategory = (index) => {
// //     setCategories(categories.filter((_, i) => i !== index));
// //   };

// //   const handleClosePopup = () => {
// //     setShowPopup(false);
// //   };

// //   return (
// //     <section>
// //       <Navbar />
// //       <div className="category-container">
// //         <h2>Manage Categories</h2>

// //         {showPopup && (
// //           <div className="popup">
// //             <div className="popup-content">
// //               <p>Your spending limit is exceeded!</p>
// //               <button onClick={handleClosePopup}>Close</button>
// //             </div>
// //           </div>
// //         )}

// //         <div className="category-form">
// //           <input
// //             type="text"
// //             value={newCategory}
// //             onChange={(e) => setNewCategory(e.target.value)}
// //             placeholder="New Category"
// //             className="category-input"
// //           />
// //           <input
// //             type="number"
// //             value={newLimit}
// //             onChange={(e) => setNewLimit(e.target.value)}
// //             placeholder="Limit"
// //             className="category-input"
// //           />
// //           <input
// //             type="number"
// //             value={newSpent}
// //             onChange={(e) => setNewSpent(e.target.value)}
// //             placeholder="Spent"
// //             className="category-input"
// //           />
// //           <button onClick={handleAddCategory} className="category-button">
// //             <FontAwesomeIcon icon={faPlus} /> Add Category
// //           </button>
// //         </div>

// //         <ul className="category-list">
// //           {categories.map((category, index) => {
// //             const remaining = category.limit - category.spent;
// //             return (
// //               <li key={index} className="category-item">
// //                 {editIndex === index ? (
// //                   <div className="edit-category-form">
// //                     <input
// //                       type="text"
// //                       value={editedCategory}
// //                       onChange={(e) => setEditedCategory(e.target.value)}
// //                       className="category-input"
// //                     />
// //                     <input
// //                       type="number"
// //                       value={editedLimit}
// //                       onChange={(e) => setEditedLimit(e.target.value)}
// //                       placeholder="Limit"
// //                       className="category-input"
// //                     />
// //                     <input
// //                       type="number"
// //                       value={editedSpent}
// //                       onChange={(e) => setEditedSpent(e.target.value)}
// //                       placeholder="Spent"
// //                       className="category-input"
// //                     />
// //                     <button onClick={handleUpdateCategory} className="category-button">
// //                       Save
// //                     </button>
// //                   </div>
// //                 ) : (
// //                   <>
// //                     <div className="category-image-container">
// //                       <img
// //                         src={`https://via.placeholder.com/100?text=${category.name}`} 
// //                         alt={category.name}
// //                         className="category-image"
// //                       />
// //                     </div>
// //                     <div className="category-details">
// //                       <span>{category.name}</span>
// //                       <div className="category-info">
// //                         <span>
// //                           <FontAwesomeIcon icon={faFileAlt} /> Description: {category.name}
// //                         </span>
// //                         <span>
// //                           <FontAwesomeIcon icon={faWallet} /> Limit: ${category.limit.toFixed(2)}
// //                         </span>
// //                         <span>
// //                           <FontAwesomeIcon icon={faDollarSign} /> Spent: ${category.spent.toFixed(2)}
// //                         </span>
// //                         <span>
// //                           <FontAwesomeIcon icon={faDollarSign} /> Remaining: ${remaining.toFixed(2)}
// //                         </span>
// //                       </div>
// //                     </div>
// //                     <div className="category-actions">
// //                       <button onClick={() => handleEditCategory(index)} className="edit-button">
// //                         <FontAwesomeIcon icon={faEdit} /> Edit
// //                       </button>
// //                       <button onClick={() => handleDeleteCategory(index)} className="delete-button">
// //                         <FontAwesomeIcon icon={faTrash} /> Delete
// //                       </button>
// //                     </div>
// //                   </>
// //                 )}
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CategoryPage;





// import React, { useState, useEffect } from 'react';
// import './CategoryPage.css';
// import Navbar from '../components/Navbar/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faPlus, faFileAlt, faDollarSign, faWallet } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// // console.log('Category data:', categories);

// const CategoryPage = () => {
  
//   const [categories, setCategories] = useState([]);
//   const [newCategory, setNewCategory] = useState('');
//   const [newLimit, setNewLimit] = useState('');
//   const [newSpent, setNewSpent] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedCategory, setEditedCategory] = useState('');
//   const [editedLimit, setEditedLimit] = useState('');
//   const [editedSpent, setEditedSpent] = useState('');
//   const [showPopup, setShowPopup] = useState(false);

  
//   /*useEffect(() => {
//     // Fetch categories from the backend when the component mounts
//     axios.get('http://localhost:8080/api/categories')
//       .then(response => setCategories(response.data))
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);*/
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/categories')
//       .then(response => {
//         // Check the response data structure
//         console.log('Categories fetched:', response.data);
//         setCategories(response.data);
//       })
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);
  
  

//   const handleAddCategory = async () => {
//     if (newCategory.trim() !== '' && newLimit.trim() !== '' && newSpent.trim() !== '') {
//       if (parseFloat(newSpent) > parseFloat(newLimit)) {
//         setShowPopup(true);
//         return;
//       }

//       const categoryData = {
//         name: newCategory.trim(),
//         limit: parseFloat(newLimit),
//         spent: parseFloat(newSpent),
//       };

//       try {
//         const response = await axios.post('http://localhost:8080/api/categories/add', categoryData);
//         setCategories([...categories, response.data]);
//         setNewCategory('');
//         setNewLimit('');
//         setNewSpent('');
//       } catch (error) {
//         console.error("There was an error adding the category!", error);
//       }
//     }
//   };

//   const handleEditCategory = (index) => {
//     setEditIndex(index);
//     setEditedCategory(categories[index].name);
//     setEditedLimit(categories[index].limit);
//     setEditedSpent(categories[index].spent);
//   };

//   const handleUpdateCategory = async () => {
//     if (parseFloat(editedSpent) > parseFloat(editedLimit)) {
//       setShowPopup(true);
//       return;
//     }

//     const updatedCategory = {
//       name: editedCategory,
//       limit: parseFloat(editedLimit),
//       spent: parseFloat(editedSpent),
//     };

//     try {
//       const response = await axios.put(`http://localhost:8080/api/categories/${categories[editIndex].id}`, updatedCategory);
//       const updatedCategories = [...categories];
//       updatedCategories[editIndex] = response.data;
//       setCategories(updatedCategories);
//       setEditIndex(null);
//       setEditedCategory('');
//       setEditedLimit('');
//       setEditedSpent('');
//     } catch (error) {
//       console.error('There was an error updating the category!', error);
//     }
//   };

//   const handleDeleteCategory = async (index) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/categories/${categories[index].id}`);
//       setCategories(categories.filter((_, i) => i !== index));
//     } catch (error) {
//       console.error('There was an error deleting the category!', error);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <section>
//       <Navbar />
//       <div className="category-container">
//         <h2>Manage Categories</h2>

//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <p>Your spending limit is exceeded!</p>
//               <button onClick={handleClosePopup}>Close</button>
//             </div>
//           </div>
//         )}

//         <div className="category-form">
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             placeholder="New Category"
//             className="category-input"
//           />
//           <input
//             type="number"
//             value={newLimit}
//             onChange={(e) => setNewLimit(e.target.value)}
//             placeholder="Limit"
//             className="category-input"
//           />
//           <input
//             type="number"
//             value={newSpent}
//             onChange={(e) => setNewSpent(e.target.value)}
//             placeholder="Spent"
//             className="category-input"
//           />
//           <button onClick={handleAddCategory} className="category-button">
//             <FontAwesomeIcon icon={faPlus} /> Add Category
//           </button>
//         </div>

//         <ul className="category-list">
//           {/* {categories.map((category, index) => {
//             const remaining = category.limit - category.spent;
//             return (
//               <li key={index} className="category-item">
//                 {editIndex === index ? (
//                   <div className="edit-category-form"> */}
                  
//                   {categories.map((category, index) => {
//   const limit = category.limit != null ? category.limit : 0; // Ensure limit is a number
//   const spent = category.spent != null ? category.spent : 0; // Ensure spent is a number
//   const remaining = limit - spent;

//   return (
//     <li key={index} className="category-item">
//       {editIndex === index ? (
//         <div className="edit-category-form">
//                     <input
//                       type="text"
//                       value={editedCategory}
//                       onChange={(e) => setEditedCategory(e.target.value)}
//                       className="category-input"
//                     />
//                     <input
//                       type="number"
//                       value={editedLimit}
//                       onChange={(e) => setEditedLimit(e.target.value)}
//                       placeholder="Limit"
//                       className="category-input"
//                     />
//                     <input
//                       type="number"
//                       value={editedSpent}
//                       onChange={(e) => setEditedSpent(e.target.value)}
//                       placeholder="Spent"
//                       className="category-input"
//                     />
//                     <button onClick={handleUpdateCategory} className="category-button">
//                       Save
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="category-image-container">
//                       <img
//                         src={`https://via.placeholder.com/100?text=${category.name}`}
//                         alt={category.name}
//                         className="category-image"
//                       />
//                     </div>
//                     <div className="category-details">
//                       <span>{category.name}</span>
//                       <div className="category-info">
                        
//                         <span>
//                           <FontAwesomeIcon icon={faFileAlt} /> Description: {category.name}
//                         </span>
//                         <span>
//                           <FontAwesomeIcon icon={faWallet} /> Limit: ${category.limit.toFixed(2)}
//                         </span>
//                         <span>
//                           <FontAwesomeIcon icon={faDollarSign} /> Spent: ${category.spent.toFixed(2)}
//                         </span>
//                         <span>
//                           <FontAwesomeIcon icon={faDollarSign} /> Remaining: ${remaining.toFixed(2)}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="category-actions">
//                       <button onClick={() => handleEditCategory(index)} className="edit-button">
//                         <FontAwesomeIcon icon={faEdit} /> Edit
//                       </button>
//                       <button onClick={() => handleDeleteCategory(index)} className="delete-button">
//                         <FontAwesomeIcon icon={faTrash} /> Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default CategoryPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faFileAlt, faWallet, faDollarSign } from '@fortawesome/free-solid-svg-icons';

// function CategoryPage() {
//   const [categories, setCategories] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedCategory, setEditedCategory] = useState('');
//   const [editedLimit, setEditedLimit] = useState('');
//   const [editedSpent, setEditedSpent] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/categories')
//       .then(response => setCategories(response.data))
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   const handleEditCategory = (index) => {
//     setEditIndex(index);
//     const category = categories[index];
//     setEditedCategory(category ? category.name : '');
//     setEditedLimit(category ? category.limit : '');
//     setEditedSpent(category ? category.spent : '');
//   };

//   const handleUpdateCategory = () => {
//     // Implement update logic here
//   };

//   const handleDeleteCategory = (index) => {
//     // Implement delete logic here
//   };

//   return (
//     <div>
//       <ul className="category-list">
//         {categories.map((category, index) => {
//           const limit = category?.limit ?? 0;
//           const spent = category?.spent ?? 0;
//           const remaining = limit - spent;

//           return (
//             <li key={index} className="category-item">
//               {editIndex === index ? (
//                 <div className="edit-category-form">
//                   <input
//                     type="text"
//                     value={editedCategory}
//                     onChange={(e) => setEditedCategory(e.target.value)}
//                     className="category-input"
//                   />
//                   <input
//                     type="number"
//                     value={editedLimit}
//                     onChange={(e) => setEditedLimit(e.target.value)}
//                     placeholder="Limit"
//                     className="category-input"
//                   />
//                   <input
//                     type="number"
//                     value={editedSpent}
//                     onChange={(e) => setEditedSpent(e.target.value)}
//                     placeholder="Spent"
//                     className="category-input"
//                   />
//                   <button onClick={handleUpdateCategory} className="category-button">
//                     Save
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="category-image-container">
//                     <img
//                       src={`https://via.placeholder.com/100?text=${category.name}`}
//                       alt={category.name}
//                       className="category-image"
//                     />
//                   </div>
//                   <div className="category-details">
//                     <span>{category.name}</span>
//                     <div className="category-info">
//                       <span>
//                         <FontAwesomeIcon icon={faFileAlt} /> Description: {category.name}
//                       </span>
//                       <span>
//                         <FontAwesomeIcon icon={faWallet} /> Limit: ${limit.toFixed(2)}
//                       </span>
//                       <span>
//                         <FontAwesomeIcon icon={faDollarSign} /> Spent: ${spent.toFixed(2)}
//                       </span>
//                       <span>
//                         <FontAwesomeIcon icon={faDollarSign} /> Remaining: ${remaining.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="category-actions">
//                     <button onClick={() => handleEditCategory(index)} className="edit-button">
//                       <FontAwesomeIcon icon={faEdit} /> Edit
//                     </button>
//                     <button onClick={() => handleDeleteCategory(index)} className="delete-button">
//                       <FontAwesomeIcon icon={faTrash} /> Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default CategoryPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faFileAlt, faWallet, faDollarSign, faPlus } from '@fortawesome/free-solid-svg-icons';

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedCategory, setEditedCategory] = useState('');
  const [editedLimit, setEditedLimit] = useState('');
  const [editedSpent, setEditedSpent] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [newLimit, setNewLimit] = useState('');
  const [newSpent, setNewSpent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleEditCategory = (index) => {
    setEditIndex(index);
    const category = categories[index];
    setEditedCategory(category ? category.name : '');
    setEditedLimit(category ? category.limit : '');
    setEditedSpent(category ? category.spent : '');
  };

  const handleUpdateCategory = () => {
    const updatedCategory = {
      ...categories[editIndex],
      name: editedCategory,
      limit: parseFloat(editedLimit),
      spent: parseFloat(editedSpent),
    };

    axios.put(`http://localhost:8080/api/categories/${updatedCategory.id}`, updatedCategory)
      .then(() => {
        setCategories(prevCategories => 
          prevCategories.map((cat, idx) => (idx === editIndex ? updatedCategory : cat))
        );
        setEditIndex(null);
      })
      .catch(error => console.error('Error updating category:', error));
  };

  const handleDeleteCategory = (index) => {
    const categoryId = categories[index].id;
    axios.delete(`http://localhost:8080/api/categories/${categoryId}`)
      .then(() => {
        setCategories(prevCategories => 
          prevCategories.filter((_, idx) => idx !== index)
        );
      })
      .catch(error => console.error('Error deleting category:', error));
  };

  const handleAddCategory = () => {
    const newCategoryData = {
      name: newCategory,
      limit: parseFloat(newLimit),
      spent: parseFloat(newSpent),
    };

    axios.post('http://localhost:8080/api/categories', newCategoryData)
      .then(response => {
        setCategories([...categories, response.data]);
        setNewCategory('');
        setNewLimit('');
        setNewSpent('');
      })
      .catch(error => console.error('Error adding category:', error));
  };

  return (
    <div>
      <div className="add-category-form">
        <h2>Add New Category</h2>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category Name"
          className="category-input"
        />
        <input
          type="number"
          value={newLimit}
          onChange={(e) => setNewLimit(e.target.value)}
          placeholder="Limit"
          className="category-input"
        />
        <input
          type="number"
          value={newSpent}
          onChange={(e) => setNewSpent(e.target.value)}
          placeholder="Spent"
          className="category-input"
        />
        <button onClick={handleAddCategory} className="category-button">
          <FontAwesomeIcon icon={faPlus} /> Add Category
        </button>
      </div>

      <ul className="category-list">
        {categories.map((category, index) => {
          const limit = category?.limit ?? 0;
          const spent = category?.spent ?? 0;
          const remaining = limit - spent;

          return (
            <li key={category.id} className="category-item">
              {editIndex === index ? (
                <div className="edit-category-form">
                  <input
                    type="text"
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                    className="category-input"
                  />
                  <input
                    type="number"
                    value={editedLimit}
                    onChange={(e) => setEditedLimit(e.target.value)}
                    placeholder="Limit"
                    className="category-input"
                  />
                  <input
                    type="number"
                    value={editedSpent}
                    onChange={(e) => setEditedSpent(e.target.value)}
                    placeholder="Spent"
                    className="category-input"
                  />
                  <button onClick={handleUpdateCategory} className="category-button">
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <div className="category-image-container">
                    <img
                      src={`https://via.placeholder.com/100?text=${category.name}`}
                      alt={category.name}
                      className="category-image"
                    />
                  </div>
                  <div className="category-details">
                    <span>{category.name}</span>
                    <div className="category-info">
                      <span>
                        <FontAwesomeIcon icon={faFileAlt} /> Description: {category.name}
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faWallet} /> Limit: ${limit.toFixed(2)}
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faDollarSign} /> Spent: ${spent.toFixed(2)}
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faDollarSign} /> Remaining: ${remaining.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="category-actions">
                    <button onClick={() => handleEditCategory(index)} className="edit-button">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button onClick={() => handleDeleteCategory(index)} className="delete-button">
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryPage;
