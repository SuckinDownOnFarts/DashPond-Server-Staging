import React, { useState, useEffect, useRef } from 'react';
import { generatePath, useOutletContext } from 'react-router-dom';
import MPTable from './MPTable';
import api from '../../../api/axios'
import useAuth from '../../../hooks/useAuth';

const DataProfiles = () => {
    const { setActive } = useOutletContext();
    const { auth } = useAuth();
    const printRef = useRef();
    setActive(0);

    const [profiles, setProfiles] = useState(null);

    const fetchProfilePath = generatePath('/fetchdataprofiles/:id', {
        id: auth.id
    });

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await api.get(fetchProfilePath);
                setProfiles(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        fetchProfiles();
    }, []);

    // const handleDownloadPdf = async () => {
    //     const element = printRef.current;
    //     const canvas = await html2canvas(element);
    //     const data = canvas.toDataURL('image/png');

    //     const pdf = new jsPDF();
    //     const imgProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight =
    //         (imgProperties.height * pdfWidth) / imgProperties.width;

    //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('print.pdf');
    // };



    return (
        <div className='m-8'>
            {!profiles ? <></> :
                <MPTable
                    data={profiles}
                    printRef={printRef}
                />}
        </div>
    )
}

export default DataProfiles









