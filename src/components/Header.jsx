import { useEffect, useState } from "react"

export const Header = ({totalOperations}) => {

    
    return (
        <div className='header'>
            Total Operations: {totalOperations}
        </div>
    )
}