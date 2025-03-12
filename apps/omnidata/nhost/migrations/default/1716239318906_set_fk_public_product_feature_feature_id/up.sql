alter table "public"."product_feature"
  add constraint "product_feature_feature_id_fkey"
  foreign key ("feature_id")
  references "public"."feature"
  ("id") on update restrict on delete restrict;
