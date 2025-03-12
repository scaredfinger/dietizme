alter table "public"."product_group"
  add constraint "product_group_organization_id_fkey"
  foreign key ("organization_id")
  references "public"."organization"
  ("id") on update restrict on delete restrict;
