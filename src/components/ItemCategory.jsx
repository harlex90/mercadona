import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ItemCategory = ({ category }) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
      };
      const handleMouseLeave = () => {
        setIsHover(false);
      };

      const navigate = useNavigate();

      const onCategory = () => {
        navigate(`/admin/categories/${category.id}`)
         }

      return(
        <button 
            type='button' 
            style={{display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", border: isHover ? "1px solid gray" : "none", borderRadius: "10%", overflow: 'hidden'}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href="#" onClick={onCategory} style={{textDecoration: "none"}}>
                <p style={{display: "flex", justifyContent: "center", fontSize:"20px"}}>{category.name}</p>
            </a>
        </button>
    )
}

export default ItemCategory;