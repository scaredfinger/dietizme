update product
set business_model_id=pbm.id
from (
    select 
        id, 
        product_id 
    from product_business_model
) as pbm
where product.id=pbm.product_id;
