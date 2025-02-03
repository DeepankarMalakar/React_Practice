// src/Components/DatePicker.jsx
import { useState } from 'react';

const CustomDatePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setIsOpen(false); // Close the picker when a date is selected
    };

    const toggleDatePicker = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button
                onClick={toggleDatePicker}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {selectedDate || 'Select a date'}
            </button>

            {isOpen && (
                <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4">
                    <input
                        type="date"
                        value={selectedDate || ''}
                        onChange={handleDateChange}
                        className="border p-2 rounded-md"
                    />
                </div>
            )}
        </div>
    );
};

export default CustomDatePicker;
