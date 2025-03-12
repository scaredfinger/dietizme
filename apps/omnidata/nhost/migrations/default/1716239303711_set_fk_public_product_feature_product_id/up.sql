alter table "public"."product_feature"
  add constraint "product_feature_product_id_fkey"
  foreign key ("product_id")
  references "public"."product"
  ("id") on update restrict on delete restrict;
