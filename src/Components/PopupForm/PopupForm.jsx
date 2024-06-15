// src/Modal.js
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import './PopupFom.scss';

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="text-center rounded-lg text-white">
                <button
                    type="button"
                    onClick={openModal}
                    className="buy-now-button"
                >
                    Book Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="modal" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="overlay" />
                    </Transition.Child>

                    <div className="modal-content-wrapper">
                        <div className="modal-content">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="modal-panel">
                                    <section>
                                        <div className="modal-container">
                                            <div className="modal-inner">
                                                <div className="modal-form-wrapper">
                                                    <form className="modal-form" action="#">
                                                        <div className="form-group">
                                                            <label htmlFor="name" className="form-label">Enter Full Name</label>
                                                            <input
                                                                value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-input" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="address" className="form-label">Enter Full Address</label>
                                                            <input
                                                                value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" className="form-input" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="pincode" className="form-label">Enter Pincode</label>
                                                            <input
                                                                value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" name="pincode" id="pincode" className="form-input" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="mobileNumber" className="form-label">Enter Mobile Number</label>
                                                            <input
                                                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="mobileNumber" id="mobileNumber" className="form-input" required />
                                                        </div>
                                                    </form>
                                                    <button onClick={buyNow} type="button" className="order-button">Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
