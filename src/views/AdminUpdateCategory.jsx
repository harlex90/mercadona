import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";


const AdminUpdateCategory = () => {
    const { id } = useParams();
    const { category } = useCategory(id);

    const {
        handleSubmit,
        formState: { isDirty, isValid },
        control,
        reset,
      } = useForm()

      React.useEffect(() => {
        if(category) {
          console.log(category)
          reset(category)
        }
      }, [category]);
    
      const navigate = useNavigate();
      const onSubmit = (data) => {
        axios.put(`/categories/${id}`, {
          name: data.name
      }).then(() => {
          navigate('/catalogue')
      })
      }

      return (
        <div>
          <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
            <TitleAndLogo/>
              <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                <Navbar/>
              </div>
              <div style={{display: "flex", flex: "1 1 10%"}}>

              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
              <div>
                <h3>
                  Modifier une catégorie
                </h3>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller 
                    control={control} 
                    name='name'
                    defaultValue=""
                    render={({field: { value, onChange }}) => (
                    <input value={value} onChange={onChange} />
                    )}
                  />
                  <button type="button" onClick={() => reset()}>Annuler</button>
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
      )
}


export default AdminUpdateCategory;