import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AddMovie = ({add}) => {
        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
        const [name, setName] = useState('')
        const [date, setDate] = useState('')
        const [image, setImage] = useState('')
        const [rating, setRating] = useState(1)
      
        function openModal() {
          setIsOpen(true);
    }      
        function closeModal() {
          setIsOpen(false);
        }
 const handleChange=(e)=>setName(e.target.value)
 const handleSubmit=(e)=>{
    e.preventDefault()
    let newMovie={
        id:Math.random(),
        name,
        image,
        date,
        rating
    }
    add(newMovie)
closeModal()
 }
const handleRating=(x)=>setRating(x)
  return (
    <div>
        <button className='btn add-movie-btn' onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} >
            <label >name</label>
            <input type="text" value={name} onChange={handleChange} />
            <label >date</label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
            <label >rating</label>
            <StarRating handleRating={handleRating} rating={rating}  />
            <label >Poster</label>
            <input type="URL" value={image} onChange={(e)=>setImage(e.target.value)} />
            <div>
            <button type='submit' className='btn btn-primary' >Confirm</button>
            <button className='btn btn-primary' >Cancel</button>
            </div>
            </form> 
      </Modal>
    </div>
  )
  }
export default AddMovie















// import React, { useState } from 'react'
// import Modal from 'react-modal';
// import StarRating from './StarRating';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');

// const AddMovie = ({add}) => {
//     const [modalIsOpen, setIsOpen] = React.useState(false);
//     const [name, setName] = useState("")
//     const [image, setImage] = useState("")
//     const [date, setDate] = useState("")
//     const [rating, setRating] = useState(1)

//   function openModal() {
//     setIsOpen(true);
//   }
//   function closeModal() {
//     setIsOpen(false);
//   }
//   const handleSubmit = (e)=> {
//     e.preventDefault();
//     let newMovie = {
//         id:Math.random(),
//         image,
//         name,
//         date,
//         rating

//     }
//     add(newMovie)
//     closeModal()
//   }
 
//   const handleRating = (x) => setRating(x)

//   return (
//     <div>
// <button className='btn add-movie-btn'   onClick={openModal}>Add movie</button>
//       <Modal
//         isOpen={modalIsOpen}
    
//         onRequestClose={closeModal}
//         style={customStyles}
        
//       >
//         <form onSubmit={handleSubmit} >
//             <label htmlFor="">Title</label>
//             <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} />
//             <StarRating rating={rating} handleRating={handleRating} />
//             <label htmlFor="">Date</label>
//             <input type="date" value={date}  onChange={(e)=>setDate(e.target.value)} />

//             <label htmlFor="">Poster</label>
//             <input type="url" value={image}  onChange={(e)=>setImage(e.target.value)} />
//             <div>
//                 <button className='btn btn-danger'>Confirm</button>
//                 <button className='btn btn-danger'>Cancel</button>
//             </div>
//         </form>
//       </Modal>
//     </div>
//   )
// }

// export default AddMovie