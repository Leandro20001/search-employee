import React from "react"

function EditModal({open,children}){
    if(open)
    return(
        <>
        <div id="editModal">
            {children}
        </div>
        </>
    )
}
export default EditModal