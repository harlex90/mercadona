const findMaxPromo = (promos) => {
    let maximum = null;
    promos.forEach((promo) => {
        if(maximum === null || promo.discount > maximum.discount) {
            maximum = promo;
            return;
        }
    });
    return maximum;
}

export default findMaxPromo;