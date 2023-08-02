import React, { useContext, useState } from 'react';
import { StateContext } from '../../context/context';

const CustomDropdown = ({ options }) => {
    const { setLang } = useContext(StateContext)
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0]);


    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setLang(option.value)
    };

    return (
        <div className="custom-select">
            <div className="selected-option" onClick={() => setShowOptions(!showOptions)}>
                <img
                    className="text-body mx-2 border-1 border-secondary border cursor-pointer"
                    width="20px"
                    height="16px"
                    src={selectedOption.imageSrc}
                    alt="icon" />
                <span></span>
            </div>
            {showOptions && (
                <div className="options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="option"
                            onClick={() => {
                                handleOptionSelect(option)
                                setShowOptions(false)
                            }}
                        >
                            <img className="text-body mx-2 border-1 border-secondary border cursor-pointer"
                                width="20px"
                                height="16px"
                                src={option.imageSrc}
                                alt="icon" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
