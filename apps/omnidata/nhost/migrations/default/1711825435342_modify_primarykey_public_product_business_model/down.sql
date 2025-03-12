alter table "public"."product_business_model" drop constraint "product_business_model_pkey";
alter table "public"."product_business_model"
    add constraint "product_business_model_pkey"
    primary key ("product_id");
