const NumericInput = ({ label, unit, onChange, value }) => {
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
                    onChange={onChange}
                    value={value}
                />
                <span className="mx-2">{unit}</span>
            </div>
        </div>
    );
};
export default NumericInput;