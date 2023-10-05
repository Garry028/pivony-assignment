const FrequencyInput = ({ label, onChangeValue, onChangeUnit, value, unit }) => {
    return (
        <div className="flex flex-col my-6">
            <label className="mr-2">{label}</label>
            <div>
                <input
                    type="number"
                    className="border p-2 rounded mt-3"
                    min="0"
                    step="1"
                    placeholder="0"
                    onChange={onChangeValue}
                    value={value}
                />
                <select className="border p-2 rounded mx-2" onChange={onChangeUnit} value={unit}>
                    <option value="minutes">minutes</option>
                    <option value="hours">hours</option>
                </select>
            </div>

        </div>
    );
};
export default FrequencyInput;