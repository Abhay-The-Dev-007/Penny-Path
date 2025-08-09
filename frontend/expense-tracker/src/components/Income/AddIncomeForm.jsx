import EmojiPickerPopup from '../EmojiPickerPopup'
import Input from '../Inputs/Input'
import React, { useState } from 'react'

const AddIncomeForm = ({ onAddIncome }) => {

    const [income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
    })

    const handleChange = (key, value) => setIncome({ ...income, [key]: value})
  return (
    <div>

        <EmojiPickerPopup
            icon={income.icon}
            onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />

        <Input
            value={income.source}
            onChange={({ value }) => handleChange("source", value)}
            label="Income Source"
            placeholder="Freelance, Salary, etc"
            type="text"
        />

        <Input 
            value={income.amount}
            onChange={({ value }) => handleChange("amount", value)}
            label="Amount"
            placeholder=""
            type="number"
        />

        <Input 
            value={income.data}
            onChange={({ value }) => handleChange("date", value)}
            label="Date"
            placeholder=""
            type="date"
        />

        <div className='flex justify-end mt-6'>
            <button
                type="button"
                className='add-btn add-btn-fill'
                onClick={() => onAddIncome(income)}
            >
                Add Income
            </button>
        </div>
    </div>
  )
}

export default AddIncomeForm
