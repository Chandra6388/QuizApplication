import React, { useState, useEffect } from 'react';
import { login } from "../../../ReduxStore/Slice/Admin/QuizeSlice";
import { useDispatch } from 'react-redux';
import Datatable from '../../../ExtraComponents/ReusableTable';
import { useNavigate } from 'react-router-dom';
import { PenLine, Trash2 } from 'lucide-react';
import sweatalert from "sweetalert2";


const AllQuize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [getPackageData, setPackageData] = useState([]);


    const columns = [
        {
            name: "Service Name",
            selector: (row) => row.name,
            sortable: true,
        },

        {
            name: "Status",
            selector: (row) => parseInt(row.status) === 1 ? "Active" : "Inactive",
            sortable: true,
        },
        {
            name: 'applicableTo',
            selector: (row) => row.applicableTo,
            sortable: true

        },
        {
            name: "total Cost of Service",
            selector: (row) => row.cost_service_price,
            sortable: true,
        },
        {
            name: "Default Price",
            selector: (row) => row.default_price,
            sortable: true,
        },
        {
            name: "Threshold Price",
            selector: (row) => row.threshold_price,
            sortable: true,
        },
        {
            name: "Final Package Price",
            selector: (row) => row.final_package_price,
            sortable: true,
        },




        {
            name: "Action",
            selector: (row) => <>
                <PenLine
                    onClick={() =>
                        navigate('/admin/pricing/view-package', { state: { row: row }, })
                    }
                />
                <Trash2
                    onClick={() => deletePackageRow(row)}
                />
            </>,
            sortable: true,
        },
    ];

    return (
        <div className=''>
            <section className="section dashboard">
                <div className="row">
                    <h4 className="page-title">
                        <button className="btn p-0 fs-5" onClick={() => window.history.back()}>
                            <i className="bx bx-arrow-back text-pink pe-1"></i>
                        </button>

                        All Packages
                    </h4>

                    < div className='expandable-table'>
                        <Datatable
                            columns={columns}
                            data={getPackageData}
                            filter={false}
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AllQuize;
