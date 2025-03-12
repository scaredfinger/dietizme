alter table "public"."product_group"
  add constraint "product_group_slug_id_fkey"
  foreign key ("slug_id")
  references "public"."slug"
  ("id") on update restrict on delete restrict;
