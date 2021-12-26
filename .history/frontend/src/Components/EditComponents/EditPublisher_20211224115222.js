import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPublisher = () => {
    const { userId } = useParams()
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({})


    useEffect(() => {
        (async function () {
            let userInformation = await userInfo(userId)
            setOriginalRole(userInformation.role)
            setOriginalActive(userInformation.active)
            setValues({
                ...values,
                firstName: userInformation.firstName,
                lastName: userInformation.lastName,
                email: userInformation.email,
                role: userInformation.role,
                active: userInformation.active,
                img: userInformation.img
            })
        }())
    }, [userId])


    return (
        <div>
            
        </div>
    );
};

export default EditPublisher;