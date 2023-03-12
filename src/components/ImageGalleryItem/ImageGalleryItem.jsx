import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import './itemGalery.css'

export const ImaageaItems= ({largeImageURL,tags})=>{
  const [openModal, setOpenModal] = useState(false);
  const [src, setSrc] = useState('');
  // state ={
  //   openModal: false,
  //   src: ''
  // }

 const openModals =(e)=>  {
   setOpenModal(true);
   console.log(openModal);
   console.log(src);
   setSrc(e.target.src)
  }
  
 const closeModal =()=>  {
console.log("closeModal");
   setOpenModal(false);
  }

  return (
    <>
          <li className='ImageGalleryItem'  >
            <img className='ImageGalleryItem-image ' src={largeImageURL} alt={tags} width="400px" onClick={openModals}/>
          </li>
      {openModal === true && <Modal closeModal={closeModal} src={src}/>}
    </>
  )
}

ImaageaItems.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};