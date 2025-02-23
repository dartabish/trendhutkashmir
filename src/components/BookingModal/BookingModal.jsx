'use client'

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import BookingForm from '../BookingForm/BookingForm';
import { MdCancel } from "react-icons/md";


export default function BookingModal({open, setOpen, title}) {
  

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/85 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-dark text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className='text-white flex flex-col'>
              <span className='ms-auto cursor-pointer' onClick={(()=>setOpen(false))}>
              <MdCancel className="h-6 w-6" />
              </span>
              <BookingForm setOpen={setOpen} title={title}/>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
