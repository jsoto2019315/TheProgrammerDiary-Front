export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,

}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return(
        <>
            <section>
                <div>
                    <span>{label}</span>
                </div>
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
                <span>
                    {showErrorMessage && validationMessage}
                </span>
            </section>
        </>

    );
};