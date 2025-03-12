alter table "public"."organization_business_model"
  add constraint "organization_business_model_unit_management_type_fkey"
  foreign key ("unit_management_type")
  references "public"."unit_management"
  ("id") on update restrict on delete restrict;
