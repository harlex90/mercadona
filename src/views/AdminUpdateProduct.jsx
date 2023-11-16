import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useCategories from "../hooks/useCategories";
import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";
import usePromos from "../hooks/usePromos";
import moment from 'moment';


const AdminUpdateProduct = () => {
    const { id } = useParams();
    const { product } = useProduct(id);

    const { categories } = useCategories();

    const { promos: allPromos } = usePromos();
    const productPromos = allPromos.filter((promo) => promo.product_id === parseInt(id));
    
    const now = Date.now() / 1000;  // TODO remove / 1000 after backend fix int type
    const activePromos = productPromos.filter((promo) => promo.start_date < now && promo.end_date > now);
    const othersPromos = productPromos.filter((promo) => promo.start_date > now || promo.end_date < now);

    const {
        handleSubmit,
        formState: { isDirty, isValid },
        control,
        reset,
      } = useForm();

      React.useEffect(() => {
        if(product) {
          reset(product)
        }
      }, [product]);
    
      const navigate = useNavigate();
      const onSubmit = (data) => {
        axios.put(`/products/${id}`, {
          category_id: data.category_id,
          name: data.name,
          description: data.description,
          price: data.price,
      
        }).then(() => {
          navigate('/catalogue')
      })
      }

      const onDeletePromo = (promoId) => {
        axios.delete(`/promotions/${promoId}`).then(() => {
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
              <div style={{display: "flex", flex: "1 1 10%"}} />
          </div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
          <div>
            <h3>
              Modifier un produit
            </h3>
          </div>

          <div>
            
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller 
                control={control} 
                name='category_id'
                defaultValue=""

                render={({field: { value, onChange }}) => (
                  <select value={value} onChange={onChange}>
                    {categories.map((category) => (
                    <option key={category.id} value={category.id} label={category.name} />
                    ))}
                  </select>
                )}
              />
              <Controller 
                control={control} 
                name='name'
                defaultValue=""
                render={({field: { value, onChange }}) => (
                <input value={value} onChange={onChange} />
                )}
              />
              <Controller 
                control={control} 
                name='description'
                defaultValue=""

                render={({field: { value, onChange }}) => (
                <input value={value} onChange={onChange} />
                )}
              />

              {/* <Controller 
                control={control} 
                name='image'
                render={({field: { value, onChange }}) => (
                  <input value={value} onChange={onChange} />
                )}
              /> */}

              <Controller 
                control={control} 
                name='price'
                defaultValue="0"

                render={({field: { value, onChange }}) => (
                <input type="number" value={value} onChange={onChange} />
                )}
              />

              {/* <Controller 
                control={control} 
                name='promo'
                defaultValue=""
                render={({field: { value, onChange }}) => (
                <div>
                  <input type="number" value={value} min={1} max={100} step={1} onChange={onChange}/>
                  <input type="date" value={value} onChange={onChange} />
                  <input type="date" value={value} onChange={onChange} />
                </div>
                )}
              /> */}

              <button type="button" onClick={() => reset()}>Annuler</button>
              <input type="submit" />
            </form>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%'}}>
              <div>
                <p>Promos actives</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "20px 0px" }}>
                {activePromos.map((promo) => (
                    <div key={promo.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: "0px" }}>discount: {promo.discount * 100} %</p>
                        <p style={{ margin: "0px" }}>start_date: {moment.unix(promo.start_date).format('LL - HH:MM')}</p>
                        <p style={{ margin: "0px" }}>end_date: {moment.unix(promo.end_date).format('LL - HH:MM')}</p>
                        <button style={{width: "300px"}} onClick={() => onDeletePromo(promo.id)}>Supprimer Promo</button>
                    </div>
                ))}
                </div>
              </div>
              
              <div>
                <p>Autres promos</p>
                {othersPromos.map((promo) => (
                  <div key={promo.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: "0px" }}>discount: {promo.discount * 100} %</p>
                        <p style={{ margin: "0px" }}>{promo.start_date}</p>
                        <p style={{ margin: "0px" }}>{now}</p>
                        <p style={{ margin: "0px" }}>{promo.end_date}</p>
                        <p style={{ margin: "0px" }}>start_date: {moment.unix(promo.start_date).format('LL - HH:MM')}</p>
                        <p style={{ margin: "0px" }}>end_date: {moment.unix(promo.end_date).format('LL - HH:MM')}</p>
                        <button style={{width: "300px"}} onClick={() => onDeletePromo(promo.id)}>Supprimer Promo</button>
                    </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}


export default AdminUpdateProduct;