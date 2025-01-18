import React, { useState, useEffect, KeyboardEventHandler } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReusableModal from './ReusableModal';
const ReusableForm = ({
    fieldtype,
    formik,
    btn_name,
    title,
    additional_field,
    closeBtn,
    closeBtn1,
}) => {


    const location = useLocation();
    const [passwordVisible, setPasswordVisible] = useState({});
    const [previews, setPreviews] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);

    const handleChange1 = (name, e) => {

        const value = e.target.value;

        const isValid = /^[0-9]*\.?[0-9]*$/.test(value);

        if (isValid) {
            if (name === "defaultprice") {
                if (parseFloat(value) > parseFloat(formik.values.totalcostofservices)) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Default Price cannot be less than Total Cost of Services",
                    });
                    formik.setFieldValue(name, formik.values.totalcostofservices)
                    if (parseFloat(formik.values.minimunprice) > parseFloat(formik.values.defaultprice)) {
                        formik.setFieldValue("minimunprice", formik.values.totalcostofservices)
                    }
                    return;
                }
            }
            else if (name === "Thersholdprice") {
                if (parseFloat(value) > parseFloat(formik.values.totalcostofservices)) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Thershold Price cannot exceed Total Cost of Services",
                    });
                    formik.setFieldValue(name, formik.values.totalcostofservices)
                    return;
                }


            }
            else if (name === "minimunprice") {
                if (parseFloat(value) > parseFloat(formik.values.defaultprice)) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Minimum Price cannot exceed Default Price",
                    });
                    formik.setFieldValue(name, formik.values.defaultprice)
                    return;
                }
            }

            formik.setFieldValue(name, value);
        }

    }

    const handleKeyDown = (event) => {

        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, { label: inputValue, value: inputValue }]);
                setInputValue('');
                event.preventDefault();
                break;
            default:
                break;
        }
    };

    const handleTagChange = (tags) => {
        setValue(tags);
        formik.setFieldValue("tags", tags.map((tag) => tag.value));
    };

    const handleChange = (selected, name) => {

        setSelectedOptions({ ...selectedOptions, [name]: selected });
        formik.setFieldValue(name, selected.map((option) => option.value));
    };

    const handleFileChange = (event, index, name) => {
        if (event.target.files[0].size > 420000) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please  Select file less then 420KB",
            });
            event.target.value = "";
            return;
        } else {
            const file = event.target.files[0];
            const newPreviews = [...previews];

            newPreviews[index] = URL.createObjectURL(file);
            setPreviews(newPreviews);

            const reader = new FileReader();
            reader.onload = () => {
                formik.setFieldValue(name, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        if (Array.isArray(formik.values.applicabelto)) {
            if (selectedOptions.applicabelto && selectedOptions.applicabelto.length > 0) {
            } else {
                setSelectedOptions((prev) => ({
                    ...prev,
                    applicabelto: formik.values.applicabelto
                        .filter((item) => item.label)
                        .map((item) => ({
                            label: item.label,
                            value: item.value || item,
                        })),
                }));
            }
        }
    }, [formik.values.applicabelto]);



    return (
        <form onSubmit={formik.handleSubmit}>
            <div
                className="row"
                style={{
                    height: `${title === "addgroup" ? "65vh" : ""}`,
                    overflowY: `${title === "addgroup" ? "scroll" : ""}`,
                }} >
                <div className={`row`}>
                    {fieldtype?.map((field, index) => (
                        <>
                            {field.type === "text" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`} style={{ marginLeft: `${field?.margin ? field?.margin : ""}` }}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={field?.placeholder}
                                                    autoFocus={index == 0 ? true : false}
                                                    {...formik.getFieldProps(field.name)}
                                                    readOnly={field.disable}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "text2" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`} style={{ marginLeft: `${field?.margin ? field?.margin : ""}` }}>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={field?.placeholder}
                                                    autoFocus={index == 0 ? true : false}
                                                    {...formik.getFieldProps(field.name)}
                                                    readOnly={field.disable}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "text3" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`} style={{ marginLeft: `${field?.margin ? field?.margin : ""}` }}>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={field?.placeholder}

                                                    autoFocus={index == 0 ? true : false}
                                                    onChange={(e) => handleChange1(field.name, e)}


                                                    value={formik.values[field.name]}

                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "number" ? (
                                <>
                                    <div className={`col-lg-${field.col_size}`}>
                                        <div className="mb-3 row flex-column">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={field?.placeholder}
                                                    {...formik.getFieldProps(field.name)}
                                                    autoFocus={index == 0 ? true : false}
                                                    readOnly={field.disable}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "email" ? (
                                <>
                                    <div className={`col-lg-${field.col_size}`}>
                                        <div className="mb-3 row flex-column">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={field?.placeholder}
                                                    {...formik.getFieldProps(field.name)}
                                                    autoFocus={index==0 ? true : false}
                                                    readOnly={field.disable}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "password" ? (
                                <>
                                    <div className={`col-lg-${field.col_size}`}>
                                        <div className="mb-3 row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <input
                                                    id={field.name}
                                                    autoFocus={index === 0 ? true : false}
                                                    type={passwordVisible[field.name] ? "text" : field.type}
                                                    placeholder={field?.placeholder}

                                                    {...formik.getFieldProps(field.name)}
                                                    className="form-control"
                                                />
                                                <i
                                                    className={`fa-solid ${passwordVisible[field.name]
                                                        ? "fa-eye-slash"
                                                        : "fa-eye"
                                                        }`}
                                                    style={{
                                                        position: "absolute",
                                                        top: "1.5px",
                                                        right: "20px",
                                                        padding: "12.4px 6.6px",
                                                        borderRadius: "3px",
                                                    }}
                                                    onClick={() =>
                                                        setPasswordVisible((prevState) => ({
                                                            ...prevState,
                                                            [field.name]: !prevState[field.name],
                                                        }))
                                                    }
                                                ></i>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "select" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}  >
                                        <div className="mb-3 row">
                                            <label className={`col-form-label col-lg-${field.label_size}`} htmlFor={field.name} >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`}>
                                                <select
                                                    className="default-select wide form-select"
                                                    id={field.name}
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    {...formik.getFieldProps(field.name)}
                                                    autoFocus={index==0 ? true : false}
                                                    disabled={field.disable}
                                                >
                                                    <option value="" selected disable={field.disable}> {field.placeholder ? field.placeholder : `Please Select ${field.label}`} </option>
                                                    {field?.options.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "select1" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}  >
                                        <div className="mb-3 row">
                                            <label className={`col-form-label col-lg-${field.label_size}`} htmlFor={field.name} >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`}>
                                                <select
                                                    className="default-select wide form-select"
                                                    id={field.name}
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    {...formik.getFieldProps(field.name)}
                                                    disabled={field.disable}
                                                    autoFocus={index==0 ? true : false}
                                                >

                                                    {field.options.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "checkbox" ? (
                                <>
                                    {field.options && field.options.length > 0 ? (
                                        <>
                                            {field.options &&
                                                field.options.map((option, index) => (
                                                    <>
                                                        <div className={`col-lg-${field.col_size}`} key={option.id}  >
                                                            <div className="row d-flex">
                                                                <div className={`col-lg-${field.col_size}`}>
                                                                    <div className="form-check custom-checkbox mb-3">
                                                                        <label className="form-check-label" for={option.label}>
                                                                            {option.label}
                                                                        </label>
                                                                        <input
                                                                            type={field.type}
                                                                            className="form-check-input"
                                                                            id={option.label}
                                                                            {...formik.getFieldProps(option.name)}
                                                                        />
                                                                    </div>
                                                                    {formik.touched[field.name] &&
                                                                        formik.errors[field.name] && (
                                                                            <div className="error-text">
                                                                                {formik.errors[field.name]}
                                                                            </div>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                        </>
                                    ) : (
                                        <>
                                            <div className={`col-lg-${field.col_size}`}>
                                                <div className="row d-flex">
                                                    <div className="col-lg-4" style={{ marginRight: "10px" }}>
                                                        <label className="form-check-label" for={field.label} >
                                                            {field.label}
                                                        </label>
                                                    </div>
                                                    <div className=" col-lg-5 form-check custom-checkbox mb-3">
                                                        <input
                                                            type={field.type}
                                                            className="form-check-input"
                                                            style={{ background: field.disable ? "#eeeeee" : "" }}
                                                            id={field.label}
                                                            autoFocus={index==0 ? true : false}
                                                            {...formik.getFieldProps(field.name)}
                                                            defaultChecked={formik.values[field.name]}
                                                        />

                                                    </div>
                                                    {formik.touched[field.name] &&
                                                        formik.errors[field.name] && (
                                                            <div className="error-text">
                                                                {formik.errors[field.name]}
                                                            </div>
                                                        )}

                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : field.type === "radio" ? (
                                <>
                                    <label
                                        className={`col-form-label col-lg-${field.label_size} col-form-label fw-bold text-decoration-underline`}
                                        htmlFor={field.parent_label}
                                    >
                                        {field.parent_label}
                                    </label>

                                    <div className={`d-flex`}>
                                        <div
                                            className={`col-lg-${field.col_size} form-check custom-checkbox my-3`}
                                        >
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={field.value1}
                                                className=" form-check-input"
                                                id={field.title1}
                                                {...formik.getFieldProps(field.name)}
                                            />
                                            <label
                                                className={`col-form-label col-lg-${field.label_size} col-form-label mx-2`}
                                                for={field.title1}
                                            >
                                                {field.title1}
                                            </label>
                                        </div>
                                        <div
                                            className={`col-lg-${field.col_size} form-check custom-checkbox my-3`}
                                        >
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={field.value2}
                                                className={formik.touched[field.name] && formik.errors[field.name] ? "form-check-input error-field" : " form-check-input"}

                                                id={field.title2}
                                                {...formik.getFieldProps(field.name)}
                                            />
                                            <label
                                                className={`col-form-label col-lg-${field.label_size} col-form-label  mx-2`}
                                                for={field.name}
                                            >
                                                {field.title2}
                                            </label>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "date" ? (
                                <>
                                    <div className="col-lg-3">
                                        <div className="row d-flex">
                                            <div className="col-lg-12 ">
                                                <div className="form-check custom-checkbox mb-3">
                                                    <label className="col-lg-6 col-form-label" for={field.name}>
                                                        {field.label}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        className=" form-control"
                                                        id={field.name}
                                                        {...formik.getFieldProps(field.name)}
                                                        readOnly={field.disable}
                                                    />
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "multiselect" ? (
                                <>

                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`} style={{ marginLeft: `${field?.margin ? field?.margin : ""}` }}>
                                                <Select
                                                    options={field.options}
                                                    isMulti
                                                    className="basic-multi-select"
                                                    value={selectedOptions[field.name]}
                                                    onChange={(selected) => handleChange(selected, field.name)}
                                                    placeholder={field.placeholder ? field.placeholder : "Select options"}

                                                    isDisabled={field.disable}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter {field.label}
                                                </div>
                                                {formik.touched[field.name] &&
                                                    formik.errors[field.name] && (
                                                        <div className="error-text">
                                                            {formik.errors[field.name]}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "searchselect" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`} style={{ marginLeft: `${field?.margin ? field?.margin : ""}` }}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ background: field.disable ? "#eeeeee" : "" }}
                                                    id={field.name}
                                                    placeholder={`Enter ${field.label}`}
                                                    {...formik.getFieldProps(field.name)}
                                                    readOnly={field.disable}
                                                />
                                                <div>
                                                    <div className="card form-card">
                                                        <div className="card-header">
                                                            <h5 className="card-title ">Services</h5>
                                                        </div>
                                                        <div>
                                                            <div className="service-table-container">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Service Name</th>
                                                                            <th>Service Type</th>
                                                                            <th>Values</th>
                                                                            <th>Default Price</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {field.data.map((service) => (
                                                                            <tr key={service.id}>
                                                                                <td>
                                                                                    <div className="d-flex">
                                                                                        <div className="form-check me-3">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input">
                                                                                            </input>
                                                                                        </div>
                                                                                        {service.name}
                                                                                    </div>
                                                                                </td>
                                                                                <td>{service.price_type == "1" ? "Fixed" : "Variable"}</td>
                                                                                <td>{service.price_type == "2" ? <div>
                                                                                    <a onClick={() => setShowModal(true)}> Enter Default Value</a>

                                                                                </div> : "-"}</td>
                                                                                <td>{service.price ? service.price : "-"}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "tags" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label
                                                className={`col-form-label col-lg-${field.label_size}`}
                                                htmlFor={field.name}
                                            >
                                                {field.label}
                                            </label>
                                            <div className={`col-lg-${field.child_col_size}`}>
                                                <CreatableSelect
                                                    inputValue={inputValue}
                                                    isClearable
                                                    isMulti
                                                    className="basic-multi-select"
                                                    menuIsOpen={false}
                                                    onChange={(newValue) => handleTagChange(newValue)}
                                                    onInputChange={(newValue) => setInputValue(newValue)}
                                                    onKeyDown={handleKeyDown}
                                                    autoFocus={index==0 ? true : false}
                                                    placeholder={`Enter ${field.label}`}
                                                    value={value}
                                                />
                                            </div>
                                            <div className="invalid-feedback">
                                                Please enter {field.label}
                                            </div>
                                            {formik.touched[field.name] &&
                                                formik.errors[field.name] && (
                                                    <div className="error-text">
                                                        {formik.errors[field.name]}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "file" ? (
                                <>
                                    <div className={`col-lg-${field.col_size}`}>
                                        <div className="row d-flex">
                                            <div className="mb-3">
                                                <label
                                                    className={`col-form-label col-form-${field.label_size}`}
                                                    htmlFor={field.name}
                                                >
                                                    {field.label}
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="file"
                                                    id={field.name}
                                                    onChange={(e) => handleFileChange(e, index, field.name)}
                                                    className=" form-control"
                                                />
                                            </div>
                                            <img
                                                src={formik.getFieldProps(field.name).value}
                                                name={field.name}
                                                id={field.name}
                                                alt={`Preview ${index}`}
                                                className={`col-lg-11 ms-3 mb-3 border border-2`}
                                                style={{
                                                    height: formik.getFieldProps(field.name).value
                                                        ? "150px"
                                                        : "",
                                                    width: "95%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : field.type === "togglebtn" ? (
                                <>
                                    <div className={`col-lg-${field.col_size} mb-4`}>
                                        <div className="row">
                                            <label htmlFor={field.name} className={`col-lg-${field.label_size} col-form-label`}>
                                                {field.label}
                                            </label>
                                            <div className="col-lg-7">
                                                <div className="form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={field.name}
                                                        checked={formik.values[field.name] === 1}
                                                        onChange={() =>
                                                            formik.setFieldValue(field.name, formik.values[field.name] === 1 ? 0 : 1)
                                                        }
                                                        disabled={field.disable}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className={` col-lg-${field.col_size}`}>
                                        <div className="mb-3  mt-4 row flex-column">

                                            <div></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ))}
                </div>
                {additional_field}
                <div className="modal-footer mt-4 mb-0">
                    {!closeBtn1 && (
                        <button type="button" className="btn btn-outline-danger rounded " onClick={closeBtn}>
                            <i className='fa fa-xmark'></i>  Cancel
                        </button>
                    )}
                    <button className={`btn btn-pink rounded ms-2 ${location.pathname === "resetpassword" ? "col-md-11" : ""}`}
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        <i className='far fa-save'></i> {btn_name}
                    </button>
                </div>
            </div>
            <ReusableModal
                show={showModal}
                onClose={handleCloseModal}
                title={"Enter Default Value"}
                body={<div>
                    <div className="mb-3 row">
                        <div className="col-lg-12 row mb-2">
                            <label className="col-lg-4 col-form-label" for="name">
                                Frequency:
                            </label>
                            <div className="col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Value"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 row mb-2">
                            <label className="col-lg-4 col-form-label" for="name">
                                No. of Transaction:
                            </label>
                            <div className="col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Value"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 row mb-2">
                            <label className="col-lg-4 col-form-label" for="name">
                                Unit:
                            </label>
                            <div className="col-lg-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Value"
                                />
                            </div>
                        </div>
                    </div>
                </div>}
                footer={
                    <>
                        <button className="btn btn-outline-secondary" onClick={handleCloseModal}>
                            Cancel
                        </button>
                        <button className="btn btn-pink" onClick={() => alert("Changes Saved!")}>
                            Apply
                        </button>
                    </>
                }
            />

        </form >

    );
};

export default ReusableForm;
