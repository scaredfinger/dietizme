alter table "public"."venue_facility"
  add constraint "venue_facility_slug_id_fkey"
  foreign key ("slug_id")
  references "public"."slug"
  ("id") on update restrict on delete restrict;
