import { useState, useEffect } from 'react';

const MoreAbout = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="flex justify-center">
            {isVisible && (
                <iframe src="https://res.cloudinary.com/df9znr8oq/image/upload/v1754099846/PresskitButch_mcqiec_tjzxgz.pdf" height={590} width={800} ></iframe>
            )}
        </div>
    )
}

export default MoreAbout