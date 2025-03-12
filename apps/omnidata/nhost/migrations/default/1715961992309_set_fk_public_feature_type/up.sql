alter table "public"."feature"
  add constraint "feature_type_fkey"
  foreign key ("type")
  references "public"."feature_type"
  ("id") on update restrict on delete restrict;
