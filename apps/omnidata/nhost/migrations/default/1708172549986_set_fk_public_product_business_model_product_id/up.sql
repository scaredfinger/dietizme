alter table "public"."product_business_model"
  add constraint "product_business_model_product_id_fkey"
  foreign key ("product_id")
  references "public"."product"
  ("id") on update restrict on delete restrict;
