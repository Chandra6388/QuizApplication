import React, { useState, useEffect } from 'react';
import { AllQuestion } from "../../../ReduxStore/Slice/Admin/QuizeSlice";
import { useDispatch } from 'react-redux';
import Datatable from '../../../ExtraComponents/ReusableTable1';
import { useNavigate } from 'react-router-dom';
import { PenLine, Trash2 } from 'lucide-react';
import sweatalert from "sweetalert2";
import ReusableModal from '../../../ExtraComponents/ReusableModal';
import AddFrom from '../../../ExtraComponents/ReusableForm';
import { useFormik } from "formik";
import * as Yup from "yup";

const Question = () => {
    const dispatch = useDispatch();
    const [allQuestions, setAllQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        getAllQuestions();
    }, []);


    const getAllQuestions = async () => {
        await dispatch(AllQuestion()).unwrap()
            .then((response) => {
                if (response.status) {
                    setAllQuestions(response.data);
                } else {
                    sweatalert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: response.msg,
                    });
                    setAllQuestions([]);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    }




    const columns = [
        {
            name: "Question ID",
            selector: (row) => row.questionID,
            sortable: true,
        },
        {
            name: "Question Text",
            selector: (row) => row.question,
            sortable: true,
        },
        {
            name: "Subject",
            selector: (row) => row.subject,
            sortable: true,
        },
        {
            name: "Difficulty",
            selector: (row) => row.difficulty,
            sortable: true,
        },

        {
            name: "Type",
            selector: (row) => row.questionType === 1 ? "MCQ" : row.questionType === 2 ? "True/False" : "MSQ",
            sortable: true,
        },
        {
            name: "Actions",
            selector: (row) => row.id,
            sortable: true,
        },


    ];

    const formik = useFormik({
        initialValues: {
            question: "",
            questionType: "",
            subject: "",
            chapter: "",
            difficulty: "",
            option: {
                option1: "",
                option2: "",
                option3: "",
                option4: "",
            },
            correctOption: "",
            explanation: "",

        },
        validationSchema: Yup.object({
            question: Yup.string().required("Please enter question"),
            questionType: Yup.string().required("Please select question type"),
            subject: Yup.string().required("Please select subject"),
            difficulty: Yup.string().required("Please enter difficulty"),
            option: Yup.object().shape({
                option1: Yup.string().required("Please enter option 1"),
                option2: Yup.string().required("Please enter option 2"),
                option3: Yup.string().required("Please enter option 3"),
                option4: Yup.string().required("Please enter option 4"),
            }),
            correctOption: Yup.string().required("Please select correct option"),
            explanation: Yup.string().required("Please enter explanation"),

        }),
        onSubmit: async (values) => {
            const req = {
                question: values.question,
                questionType: values.questionType,
                subject: values.subject,
                chapter: values.chapter,
                difficulty: values.difficulty,
                option1: values.option.option1,
                option2: values.option.option2,
                option3: values.option.option3,
                option4: values.option.option4,
                correctOption: values.correctOption,
                explanation: values.explanation,
            }
            console.log("req", req);



        },
    });

    const fields = [
        {
            name: "question",
            label: "Question",
            type: "textarea",
            label_size: 12,
            col_size: 12,
            disable: false,
        },
        {
            name: "questionType",
            label: "Question Type",
            type: "select",
            options: [
                { value: "MCQ", label: "MCQ" },
                { value: "True/False", label: "True/False" },
                { value: "MSQ", label: "MSQ" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "subject",
            label: "Subject",
            type: "select",
            options: [
                { value: "Geography", label: "Geography" },
                { value: "History", label: "History" },
                { value: "Physics", label: "Physics" },
                { value: "Chemistry", label: "Chemistry" },
                { value: "Biology", label: "Biology" },
                { value: "Mathematics", label: "Mathematics" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "chapter",
            label: "Chapter",
            type: "select",
            options: [
                { value: "Chapter 1", label: "Chapter 1" },
                { value: "Chapter 2", label: "Chapter 2" },
                { value: "Chapter 3", label: "Chapter 3" },
                { value: "Chapter 4", label: "Chapter 4" },
                { value: "Chapter 5", label: "Chapter 5" },
                { value: "Chapter 6", label: "Chapter 6" },
                { value: "Chapter 7", label: "Chapter 7" },
                { value: "Chapter 8", label: "Chapter 8" },
                { value: "Chapter 9", label: "Chapter 9" },
                { value: "Chapter 10", label: "Chapter 10" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "difficulty",
            label: "Difficulty",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option1",
            label: "Option 1",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option2",
            label: "Option 2",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option3",
            label: "Option 3",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option4",
            label: "Option 4",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,

        },
        {
            name: "correctOption",
            label: "Correct Option",
            type: "select",
            options: [
                { value: "Option 1", label: "Option 1" },
                { value: "Option 2", label: "Option 2" },
                { value: "Option 3", label: "Option 3" },
                { value: "Option 4", label: "Option 4" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "explanation",
            label: "Explanation",
            type: "textarea",
            label_size: 12,
            col_size: 12,
            disable: false,
        }




    ];

    return (
        <div className=''>
            <section className="section dashboard">
                <div className="row">
                    <h4 className="page-title">
                        <button className="btn p-0 fs-5" onClick={() => window.history.back()}>
                            <i className="bx bx-arrow-back text-pink pe-1"></i>
                        </button>

                        All Question
                    </h4>
                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                            Add Question
                        </button>
                    </div>

                    < div className='expandable-table'>
                        <Datatable
                            columns={columns}
                            data={allQuestions}
                            filter={false}
                        />
                    </div>
                </div>
            </section>

            <ReusableModal
                show={showModal}
                onClose={handleCloseModal}
                modalsize={'lg'}
                title={'Question Details'}
                body={
                    <div className='service-filter ps-2'>
                        <AddFrom
                            fields={fields.filter(
                                (fields) => !fields.showWhen || fields.showWhen(formik.values)
                            )}
                            page_title="Add Employee"
                            hide_cancle_btn={true}
                            hide_submit_btn={true}
                            formik={formik}

                        />


                    </div>
                }
                footer={
                    <>
                        <button className='btn btn-outline-secondary' onClick={handleCloseModal}>Cancel</button>
                        <button className='btn btn-pink' onClick={formik.handleSubmit}>Apply</button>
                    </>
                }
            />

        </div>
    );
};

export default Question;
