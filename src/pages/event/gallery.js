import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import GalleryForm from "./galleryForm";

const GalleryPanel = React.memo(({ galleryAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addGallery = () => {
        let idx = galleryAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save gallery details!', timeout: 1000 });
            return;
        }
        galleryAddedList.current.push({ ...formList.gallery, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
             <div className="flex justify-end">
             <div className="w-3/4 justify-center">
                    <h1>Gallery Event Details</h1>
                </div>
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-center hover:bg-dodge-b"
                    onClick={addGallery}         
                ><i className='bx bx-plus mr-1 text-lg'></i> Add Gallery Event Details</button>
            </div>
            {galleryAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    <GalleryForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        galleryAddedList={galleryAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default GalleryPanel;