import React, { useState, useEffect } from 'react';
import { login } from "../../../ReduxStore/Slice/Admin/QuizeSlice";
import { useDispatch } from 'react-redux';
import Datatable from '../../../ExtraComponents/ReusableTable1';
import { useNavigate } from 'react-router-dom';
import { PenLine, Trash2 } from 'lucide-react';
import sweatalert from "sweetalert2";
import ReusableModal from '../../../ExtraComponents/ReusableModal';
import AddFrom from '../../../ExtraComponents/ReusableForm';    
import { useFormik } from "formik";
import * as Yup from "yup";

const AllQuize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [questions, setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }




    const columns = [
        {
            name: "Question ID",
            selector: (row) => row.questionID,
            sortable: true,
        },
        {
            name: "Question Text",
            selector: (row) => row.questionText,
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
            name: "Quiz Associated",
            selector: (row) => row.quizAssociated,
            sortable: true,
        },
        {
            name: "Type",
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: "Actions",
            selector: (row) => row.id,
            sortable: true,
        },


    ];

    const data = [
        {
            id: 1,
            questionID: "1",
            questionText: "What is the capital of India?",
            subject: "Geography",
            difficulty: "Easy",
            quizAssociated: "General Knowledge",
            type: "MCQ",
        },
        {
            id: 2,
            questionID: "2",
            questionText: "What is the capital of USA?",
            subject: "Geography",
            difficulty: "Easy",
            quizAssociated: "General Knowledge",
            type: "MCQ",
        },
        {
            id: 3,
            questionID: "3",
            questionText: "What is the capital of UK?",
            subject: "Geography",
            difficulty: "Easy",
            quizAssociated: "General Knowledge",
            type: "MCQ",
        },
        {
            id: 4,
            questionID: "4",
            questionText: "What is the capital of Australia?",
            subject: "Geography",
            difficulty: "Easy",
            quizAssociated: "General Knowledge",
            type: "MCQ",
        },
        {
            id: 5,
            questionID: "5",
            questionText: "What is the capital of Japan?",
            subject: "Geography",
            difficulty: "Easy",
            quizAssociated: "General Knowledge",
            type: "MCQ",
        }
    ]

    const formik = useFormik({
        initialValues: {
            question: "",
            questionType: "",
            subject: "",
            difficulty: "", 
            option : {
                option1: "",
                option2: "",
                option3: "",
                option4: "",
            }
        },
        validationSchema: Yup.object({
            question: Yup.string().required("Question is required"),
            questionType: Yup.string().required("Question Type is required"),
            subject: Yup.string().required("Subject is required"),
            difficulty: Yup.string().required("Difficulty is required"),
            option1: Yup.string().required("Option 1 is required"),
            option2: Yup.string().required("Option 2 is required"),
            option3: Yup.string().required("Option 3 is required"),
            option4: Yup.string().required("Option 4 is required"),
        }),
        onSubmit: async (values) => {
            const req = {
                question: values?.question,
                questionType: values?.questionType,
                subject: values?.subject,
                difficulty: values?.difficulty,
               opetion : {
                     option1: values?.option?.option1,
                     option2: values?.option?.option2,
                     option3: values?.option?.option3,
                     option4: values?.option?.option4,
                }
            }

            

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
            name : "explanation",
            label : "Explanation",
            type : "textarea",
            label_size : 12,
            col_size : 12,
            disable : false,
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
                            data={data}
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
                        <button className='btn btn-pink' onClick={() => getAllService()}>Apply</button>
                    </>
                }
            />

        </div>
    );
};

export default AllQuize;
