import React from "react"

function EditEmployee({open,children}){
    if(open)
    return(
        <>
        <div id="editModal">
            {children}
        </div>
        </>
    )
}
export default EditEmployee