alter table "public"."product"
  add constraint "product_place_id_fkey"
  foreign key ("place_id")
  references "public"."place"
  ("id") on update restrict on delete restrict;
