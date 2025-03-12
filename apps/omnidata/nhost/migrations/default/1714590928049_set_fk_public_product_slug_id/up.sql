alter table "public"."product"
  add constraint "product_slug_id_fkey"
  foreign key ("slug_id")
  references "public"."slug"
  ("id") on update restrict on delete restrict;
