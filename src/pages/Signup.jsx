import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Sign Up</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Sign Up</h2>
                        <form>
                            {/* Form fields go here */}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
