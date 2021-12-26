import React from 'react';
import { useParams } from 'react-router-dom';

const EditPublisher = () => {
    const { userId } = useParams()

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