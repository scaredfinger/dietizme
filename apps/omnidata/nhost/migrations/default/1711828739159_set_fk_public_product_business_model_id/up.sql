alter table "public"."product"
  add constraint "product_business_model_id_fkey"
  foreign key ("business_model_id")
  references "public"."product_business_model"
  ("id") on update restrict on delete restrict;
